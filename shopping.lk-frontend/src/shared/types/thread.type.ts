import { CategoryType } from '@shared/types/category.type';
import { UserType } from '@shared/types/user.type';

export type ThreadType = {
	id: number;
	title: string;
	text: string;
	categories: CategoryType[];
	postCount: number;
	user: UserType;
};
