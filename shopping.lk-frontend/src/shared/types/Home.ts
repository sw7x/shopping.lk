import { string } from 'zod';

export type IHome = {
	a_x: {
		a1: number[];
		a2: string;
		a3: {};
	};
	status: string;
};

/* 
export type HomeState = {
	articles: IArticle[];
}; 
*/

export type HomeAction = {
	type: string;
	article: IHome;
};

export type HomeDispatchType = (payload: IHome) => { type: string; payload: IHome };

//////////////////

/* 

interface IArticle {
	id: number;
	title: string;
	body: string;
}

type ArticleState = {
	articles: IArticle[];
};

type ArticleAction = {
	type: string;
	article: IArticle;
};

type DispatchType1 = (args: ArticleAction) => ArticleAction;

*/
