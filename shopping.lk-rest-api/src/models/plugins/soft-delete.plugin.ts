import mongoose, { Schema, FilterQuery } from 'mongoose';
import { DeleteResult } from 'mongodb';
import MongooseDelete, { type SoftDeleteDocument, type SoftDeleteModel } from 'mongoose-delete';

type MongooseDeleteOptions = Parameters<typeof MongooseDelete>[1];

// 1. Extend the bundled SoftDeleteDocument interface
// SoftDeleteDocument already provides: delete(), restore(), deleted, deletedAt, deletedBy
export interface IBaseDocument extends SoftDeleteDocument {
	forceDelete: () => Promise<void>;
}

// 2. Extend the bundled SoftDeleteModel interface
// SoftDeleteModel already provides: delete(), deleteById(), restore(), findDeleted(), findWithDeleted(), countDeleted(), countWithDeleted(), etc.
// We intersect with mongoose.Model<T> to retain built-in statics (deleteMany, findByIdAndDelete, modelName…)
export interface IBaseModel<T extends IBaseDocument> extends SoftDeleteModel<T>, mongoose.Model<T> {
	forceDelete: (conditions?: FilterQuery<T>) => Promise<DeleteResult>;
	forceDeleteById: (id: mongoose.Types.ObjectId | string) => Promise<T | null>;
}

export interface SoftDeletePluginOptions extends NonNullable<MongooseDeleteOptions> {
	enableForceDelete?: boolean;
}

// PLUGIN IMPLEMENTATION
export function softDeleteWithForcePlugin<T extends IBaseDocument>(
	schema: Schema<T>,
	options: SoftDeletePluginOptions = {},
): void {
	const mongooseDeleteOptions: MongooseDeleteOptions = {
		deletedAt: true,
		deletedBy: true,
		overrideMethods: 'all',
		...options,
	};

	schema.plugin(MongooseDelete, mongooseDeleteOptions);

	// STATIC METHODS

	// Cast `this` to the intersection so we get both SoftDeleteModel and Mongoose statics
	schema.statics.forceDelete = async function (conditions?: FilterQuery<T>): Promise<DeleteResult> {
		const model = this as unknown as IBaseModel<T>;
		//console.warn(`⚠️ PERMANENTLY deleting from ${model.modelName} - THIS CANNOT BE UNDONE!`);
		return model.deleteMany(conditions ?? {});
	};

	schema.statics.forceDeleteById = async function (id: mongoose.Types.ObjectId | string): Promise<T | null> {
		const model = this as unknown as IBaseModel<T>;
		//console.warn(`⚠️ PERMANENTLY deleting from ${model.modelName} by ID - THIS CANNOT BE UNDONE!`);
		return model.findByIdAndDelete(id);
	};

	// INSTANCE METHODS

	// Mongoose schema methods receive `this` as the raw document; cast explicitly
	schema.methods.forceDelete = async function (): Promise<void> {
		const doc = this as unknown as IBaseDocument & mongoose.Document;
		//const modelName = (doc.constructor as { modelName?: string })?.modelName ?? 'Document';
		//console.warn(`⚠️ PERMANENTLY deleting ${modelName}: ${doc._id} - THIS CANNOT BE UNDONE!`);
		await doc.deleteOne();
	};
}

export default softDeleteWithForcePlugin;

// ==========================================
// USAGE IN MULTIPLE SCHEMAS
// ==========================================

/*
//--------------------------------------------------------
//Setup
//--------------------------------------------------------
import mongoose, { Schema } from 'mongoose';
import { softDeleteWithForcePlugin, IBaseDocument, IBaseModel } from './soft-delete.plugin';

interface IPet extends IBaseDocument {
    name: string;
    species: string;
    age: number;
}

const PetSchema = new Schema<IPet>({
    name: { type: String, required: true },
    species: { type: String, required: true },
    age: { type: Number, required: true },
});

PetSchema.plugin(softDeleteWithForcePlugin);
const Pet = mongoose.model<IPet, IBaseModel<IPet>>('Pet', PetSchema);



//--------------------------------------------------
//1. Model.forceDelete() — Static method
//--------------------------------------------------
Permanently deletes all documents matching a filter from the database. No recovery possible.

// ❌ Regular soft delete — sets deleted: true, document still exists in DB
await Pet.delete({ species: 'cat' });

// ✅ Force delete — physically removes ALL cats from the DB forever
const result = await Pet.forceDelete({ species: 'cat' });
console.log(result);
// { acknowledged: true, deletedCount: 3 }

// You can also pass no filter to wipe the entire collection (use with extreme caution)
await Pet.forceDelete(); // deletes every pet document


//When to use: Purging all records of a certain type — e.g. clearing test data, GDPR "right to erasure" for a category of records, removing all soft-deleted records during a cleanup job.
// Common pattern: clean up already-soft-deleted records older than 30 days
const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
await Pet.forceDelete({
    deleted: true,
    deletedAt: { $lt: thirtyDaysAgo },
});




//---------------------------------------------
//2. Model.forceDeleteById() — Static method
//---------------------------------------------
//Permanently deletes one specific document by its ID, without needing to fetch it first.
const petId = '507f1f77bcf86cd799439011';

// ❌ Regular soft delete by ID — still in DB
await Pet.deleteById(petId); // from mongoose-delete

// ✅ Force delete by ID — gone from DB permanently
const deletedPet = await Pet.forceDeleteById(petId);
console.log(deletedPet);
// { _id: '507f...', name: 'Whiskers', species: 'cat', age: 3, ... }
// (returns the document as it was before deletion)

// If ID doesn't exist, returns null
const result = await Pet.forceDeleteById('nonexistent-id');
console.log(result); // null
//When to use: When you have the ID from a request (e.g. a DELETE API endpoint) and want to permanently remove that one record without a prior findById call.

// Typical REST API handler
async function hardDeletePetHandler(req, res) {
    const deleted = await Pet.forceDeleteById(req.params.id);

    if (!deleted) {
        return res.status(404).json({ message: 'Pet not found' });
    }

    return res.status(200).json({ message: 'Permanently deleted', pet: deleted });
}



//---------------------------------------------------------------
//3. doc.forceDelete() — Instance method
//---------------------------------------------------------------
//Permanently deletes the specific document instance you already have in hand.
// First fetch the document
const pet = await Pet.findById('507f1f77bcf86cd799439011');

if (pet) {
    console.log(pet.name); // 'Whiskers'

    // ❌ Regular soft delete — sets deleted: true
    await pet.delete(); // from mongoose-delete

    // ✅ Force delete — removes this exact document from DB permanently
    await pet.forceDelete();

    // The `pet` variable still holds the data in memory, but it's gone from DB
    console.log(pet.name); // still 'Whiskers' in memory
    console.log(await Pet.findById(pet._id)); // null — gone from DB
}

//When to use: When you've already fetched the document and are working with it — avoids a second DB lookup. Common in service-layer code where the doc is passed around.
// Service layer pattern
async function processPetDeletion(pet: IPet) {
    // ... do some cleanup logic, send emails, audit logs, etc.
    console.log(`Processing final deletion for ${pet.name}`);

    await pet.forceDelete(); // no need to look it up again
}

const pet = await Pet.findById(someId);
if (pet) {
    await processPetDeletion(pet);
}

//Side-by-side comparison
//const id = '507f1f77bcf86cd799439011';

// Static — no fetch needed, targets by filter
await Pet.forceDelete({ species: 'cat', deleted: true }); // many docs

// Static — no fetch needed, targets by ID
await Pet.forceDeleteById(id); // one doc, by ID

// Instance — fetch first, then delete the object you have
const pet = await Pet.findById(id);
await pet?.forceDelete(); // one doc, already in memory
//The rule of thumb: use the static methods when you're working at the query level, and the instance method when you already have the document object and want to act on it directly.
*/
