import mongoose from 'mongoose';
//import { type MongoQuery, type ClaimRawRule, type SubjectRawRule } from '@casl/ability';
import PermissionRuleSchema from '@src/models/common/permissionRule.schema';
import { type PermissionsFieldType } from '@src/permissions/types/Permission.Types';

/* 
interface RawRule {
	action: string | string[];
	subject?: string | string[];
	fields?: string[];
	conditions?: MongoQuery;
	inverted?: boolean;
	reason?: string;
}
*/

interface IRoleDocument {
	name: string;
	slug: string;
	//permissions: RawRule[];
	permissions: PermissionsFieldType[];
}

const RoleSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			enum: ['super-admin', 'admin', 'manager', 'user'], // Allowed values for the role field
			required: true,
		},
		slug: {
			type: String,
			required: true,
		},
		permissions: {
			type: [PermissionRuleSchema],
		},
	},
	{
		timestamps: true,
	},
);

const Role = mongoose.model<IRoleDocument>('Role', RoleSchema);

// Middleware to update the 'updatedAt' field on save
/* RoleSchema.pre('save', function (next) {
	this.updatedAt = new Date();
	next();
}); */

export default Role;
export { Role, IRoleDocument };
