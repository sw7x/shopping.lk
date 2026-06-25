import mongoose from 'mongoose';

const PermissionRuleSchema = new mongoose.Schema(
	{
		action: {
			type: mongoose.Schema.Types.Mixed,
			required: true,
			validate: {
				validator: function (v: string | string[]) {
					return typeof v === 'string' || (Array.isArray(v) && v.every((item) => typeof item === 'string'));
				},
				message: 'Action must be a string or an array of strings',
			},
		},
		subject: {
			type: mongoose.Schema.Types.Mixed,
			validate: {
				validator: function (v: string | string[]) {
					return (
						v === undefined ||
						typeof v === 'string' ||
						(Array.isArray(v) && v.every((item) => typeof item === 'string'))
					);
				},
				message: 'Subject must be a string or an array of strings',
			},
		},

		fields: {
			type: [String],
			default: undefined, // tells Mongoose not to initialize the fields property unless it's explicitly set.
		},
		conditions: {
			type: mongoose.Schema.Types.Mixed,
		},
		inverted: {
			type: Boolean,
		},
		reason: {
			type: String,
		},
		id: {
			type: Number,
			required: true,
		},
	},
	{ _id: false }, // _id: false prevents Mongoose from creating an _id that particular schema
);

export default PermissionRuleSchema;
