export interface ICategory {
	id: number;
	title: string;
}

export interface IPost {
	id: number;
	title: string;
	slug: string;
	content: string;
	status: 'published' | 'draft' | 'rejected';
	hit: number;
	category: { id: number };
	user: { id: number };
	status_color: string;
	createdAt: string;
	publishedAt: string;
	image: {
		url: string;
		name: string;
		status: string;
		type: string;
		uid: string;
	}[];
	tags: string[];
	language: number;
}

/* 
url	"http://loremflickr.com/640/480/abstract"
name	"951d9d79-7fca-4431-8e11-5ff2e327f7eb"
status	"done"
type	"image/jpeg"
uid	"924698bc-a28c-4f2e-b429-832bbf4616d4"



id	1
title	"Aspernatur fugit reicien… sit libero cupiditate."
slug	"voluptatibus-aut-sed"
content	"Omnis dolorem quasi arch…s soluta aut qui eaque."
hit	127135
category	{…}
user	{…}
status	"rejected"
status_color	"red"
createdAt	"2022-10-29T19:43:44.773Z"
publishedAt	"2022-12-10T11:00:40.797Z"
image	[…]
tags	[…]
language  */

type IThreadCategory = {
    id: number;
    category_name: string;
};


type IThreadUser = {
    id: number;
    fullname: string;
    email: string;
    username: string;
    gender: string;
    badge: string;
    points: number;
    account_type: string;
};


export interface  IThread {
    id: number;
    title: string;
    text: string;
    categories: IThreadCategory[];
    postCount: number;
    user: IThreadUser;
};






{
            "id": 1,
            "title": "water One More Doubt. I Was Trying To Put",
            "text": "Thank you for replying, it is working now. I have one more doubt. I was trying to put a checkmark when we press the elements of the list is pressed",
            "categories": [
                {
                    "id": 1,
                    "category_name": "Rice"
                },
                {
                    "id": 2,
                    "category_name": "Fruits"
                },
                {
                    "id": 3,
                    "category_name": "Water"
                },
                {
                    "id": 4,
                    "category_name": "Vegetables"
                }
            ],
            "postCount": 0,
            "user": {
                "id": 3,
                "fullname": "bruce wayne",
                "email": "batman@gg.com",
                "username": "batman",
                "gender": "male",
                "badge": "bg",
                "points": 102,
                "account_type": "farmer"
            }
        },
