import mongoose, { Schema } from 'mongoose';

//import { type MongoQuery, type ClaimRawRule, type SubjectRawRule } from '@casl/ability';
import PermissionRuleSchema from '@src/models/common/permissionRule.schema';
import { IRoleDocument } from '@src/models/role.model';
import { type PermissionsFieldType } from '@src/permissions/types/Permission.Types';
import { softDeleteWithForcePlugin, IBaseDocument, IBaseModel } from '@src/models/plugins/soft-delete.plugin';
import autopopulate from 'mongoose-autopopulate';
//import uniqueValidator from 'mongoose-unique-validator';
//const uniqueValidator = (await import('mongoose-unique-validator')).default;
import { hash } from 'bcrypt';
import { timezonePlugin } from '@src/models/plugins/timezone-plugin';

async function applyUniqueValidator() {
	const uniqueValidator = (await import('mongoose-unique-validator')).default;
	userSchema.plugin(uniqueValidator);
}

interface IUserDocument extends IBaseDocument {
	email: string;
	username: string;
	password: string;
	//role: string;
	role: Schema.Types.ObjectId; // This refers to the ObjectId of a Role
	//permissions: RawRule[];
	restrictedPermissionRules: number[];
}

const userSchema = new Schema<IUserDocument>(
	{
		//name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		//age: { type: Number, required: false },
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true, select: false },
		/* 
		role: {
			type: String,
			enum: ['super-admin', 'admin', 'manager', 'user'], // Allowed values for the role field
			required: true,
			default: 'user', // Set a default role if none is provided
		},
		*/
		role: {
			type: Schema.Types.ObjectId,
			//ref: Role, // Reference the Role schema
			ref: 'Role', // Reference the Role schema
			required: true,
			autopopulate: true, // Apply the autopopulate plugin to the schema
		},

		restrictedPermissionRules: {
			//type: [PermissionRuleSchema],
			type: [Number],
			validate: {
				validator: function (arr: number[]) {
					// Ensure every element in the array is an integer
					return arr.every(Number.isInteger);
				},
				message: '{VALUE} contains non-integer values for restricted permission rules',
			},
		},
	},
	{ timestamps: true },
);

type PopulatedUserDocumentType = Omit<IUserDocument, 'role'> & {
	role: IRoleDocument; // Now `role` is the populated `RoleDocument` type instead of just an ObjectId
};

userSchema.pre('save', async function (next) {
	this.email = this.email.toLowerCase().trim();

	// 3. Hashing passwords before save
	if (!this.isModified('password')) return next(); // only hash if changed
	this.password = await hash(this.password, 10);
	next();
});

userSchema.plugin(timezonePlugin, { timezone: 'Asia/Colombo', format: 'datetime' });
userSchema.plugin(autopopulate);
userSchema.plugin(softDeleteWithForcePlugin);

applyUniqueValidator();

//const User = mongoose.model<IUserDocument>('User', userSchema);
const User = mongoose.model<IUserDocument, IBaseModel<IUserDocument>>('User', userSchema);

export default User;
export { User, IUserDocument, PopulatedUserDocumentType };
