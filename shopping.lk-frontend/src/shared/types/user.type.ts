import { Gender } from '@root/shared/types/Gender.type';
import { RoleName } from '@root/shared/types/RoleName.type';

export type UserType = {
	id: number;
	fullname: string;
	email: string;
	username: string;
	gender: Gender;
	badge: string;
	points: number;
	account_type: RoleName;
};
