import { type MongoQuery, type ClaimRawRule, type SubjectRawRule } from '@casl/ability';

export type PermissionsType = SubjectRawRule<string, string, MongoQuery> | ClaimRawRule<string>;

export type PermissionsFieldType = PermissionsType & { id: number };

export type RawRuleType = {
	action: string | string[];
	subject?: string | string[];
	fields?: string[]; // an array of fields to which user has (or not) access
	conditions?: MongoQuery; // an object of conditions which restricts the rule scope
	inverted?: boolean; // indicates whether rule allows or forbids something
	reason?: string; // message which explains why rule is forbidden
};

export type mongoAbilityRuleType = {
	action: string | string[];
	subject: string | string[];
	fields?: string[]; // an array of fields to which user has (or not) access
	conditions?: MongoQuery; // an object of conditions which restricts the rule scope
	inverted?: boolean; // indicates whether rule allows or forbids something
	reason?: string; // message which explains why rule is forbidden
};
