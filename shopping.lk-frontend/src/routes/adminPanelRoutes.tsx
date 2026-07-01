import { AdminPanelLayout } from '@layouts/AdminPanel';
import {
	ProductCreate,
	ProductShow,
	ProductEdit,
	ProductList,
} from '@root/containers/Admin/Products';
import { CustomComponenet } from '@root/containers/Admin/CustomComponenet';
import { PostList, PostShow, PostEdit, PostCreate } from '@root/containers/Admin/Posts';
import { AdminDashboard } from '@root/containers/Admin/AdminDashboard';
import { ThreadCreate, ThreadEdit, ThreadList, ThreadShow } from '@root/containers/Admin/Threads';
import { ErrorComponent } from '@refinedev/antd';

const adminPanelRoutes = {
	path: '/admin',
	element: <AdminPanelLayout />,
	children: [
		{
			index: true,
			element: <AdminDashboard />,
		},
		{
			path: 'cc',
			element: <CustomComponenet />,
		},
		{
			path: 'products',
			children: [
				{
					index: true,
					element: <ProductList />,
				},
				{
					path: 'create',
					element: <ProductCreate />,
				},
				{
					path: 'edit/:id',
					element: <ProductEdit />,
				},
				{
					path: 'show/:id',
					element: <ProductShow />,
				},
			],
		},
		{
			path: 'products_assign',
			element: <>products_assign</>,
		},
		{
			path: 'posts',
			children: [
				{
					index: true,
					element: <PostList />,
				},
				{
					path: 'create',
					element: <PostCreate />,
				},
				{
					path: 'edit/:id',
					element: <PostEdit />,
				},
				{
					path: 'show/:id',
					element: <PostShow />,
				},
			],
		},
		{
			path: 'contact',
			element: <>admin contact page</>,
		},
		{
			path: 'threads',
			children: [
				{
					index: true,
					element: <ThreadList />,
				},
				{
					path: 'create',
					element: <ThreadCreate />,
				},
				{
					path: 'edit/:id',
					element: <ThreadEdit />,
				},
				{
					path: 'show/:id',
					element: <ThreadShow />,
				},
			],
		},
		{
			path: '*',
			element: <ErrorComponent />,
		},
	],
};
export default adminPanelRoutes;
