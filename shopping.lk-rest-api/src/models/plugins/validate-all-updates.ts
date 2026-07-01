import { Schema, Query } from 'mongoose';

/**
 * Mongoose plugin that forces `runValidators: true` on all update-style query methods.
 */

export default function validateAllUpdates<DocType>(schema: Schema<DocType>): void {
	schema.pre('updateOne', function (this: Query<unknown, DocType>) {
		this.setOptions({ runValidators: true });
	});

	schema.pre('updateMany', function (this: Query<unknown, DocType>) {
		this.setOptions({ runValidators: true });
	});

	schema.pre('findOneAndUpdate', function (this: Query<unknown, DocType>) {
		this.setOptions({ runValidators: true });
	});

	schema.pre('findOneAndReplace', function (this: Query<unknown, DocType>) {
		this.setOptions({ runValidators: true });
	});

	schema.pre('replaceOne', function (this: Query<unknown, DocType>) {
		this.setOptions({ runValidators: true });
	});

	// For bulkWrite - more complex, handled separately
}

/*
// Apply to ALL schemas
import { validateAllUpdates } from './plugins/validateAllUpdates';

userSchema.plugin(validateAllUpdates);

// Now ALL update methods validate by default! 🎉
await User.updateOne({ _id: id }, { age: 16 }); // ✅ Validates!
await User.findOneAndUpdate({ _id: id }, { age: 16 }); // ✅ Validates!
*/
