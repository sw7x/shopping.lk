import mongoose from 'mongoose';
//import { type MongoQuery, type ClaimRawRule, type SubjectRawRule } from '@casl/ability';
import PermissionRuleSchema from '@src/models/common/permissionRule.schema';
import { IRoleDocument } from '@src/models/role.model';
import { type PermissionsFieldType } from '@src/permissions/types/Permission.Types';

interface IUserDocument {
	email: string;
	username: string;
	password: string;
	//role: string;
	role: mongoose.Schema.Types.ObjectId; // This refers to the ObjectId of a Role
	//permissions: RawRule[];
	restrictedPermissionRules: number[];
}

const userSchema = new mongoose.Schema(
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
			type: mongoose.Schema.Types.ObjectId,
			//ref: Role, // Reference the Role schema
			ref: 'Role', // Reference the Role schema
			required: true,
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

const User = mongoose.model<IUserDocument>('User', userSchema);

export default User;
export { User, IUserDocument, PopulatedUserDocumentType };
