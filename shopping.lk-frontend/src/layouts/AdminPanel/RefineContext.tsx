import { Refine } from '@refinedev/core';
import dataProvider from '@refinedev/simple-rest';
import routerProvider from '@refinedev/react-router-v6';
import { RefineThemes, Sider } from '@refinedev/antd';
import { App as AntdApp, ConfigProvider } from 'antd';

const theme = {
	...RefineThemes.Green,
	components: {
		...RefineThemes.Green.components,
		//borderRadius: 1,
		Button: {
			...RefineThemes.Green.components?.Button,
			borderRadius: 1,
		},

		Input: {
			...RefineThemes.Green.components?.Input,
			borderRadius: 1,
		},
		Select: {
			...RefineThemes.Green.components?.Select,
			borderRadius: 1,
		},
	},
};

export function RefineContext({ children }: { children: React.ReactNode }) {
	return (
		<ConfigProvider
			theme={theme}
			prefixCls=''
			//button={{ className: 'custom-button', style: { position: 'sticky' } }}
			layout={{
				className: 'shopping_lk_admin_layout',
			}}
		>
			<AntdApp>
				<Refine
					routerProvider={routerProvider}
					//dataProvider={dataProvider('https://api.fake-rest.refine.dev')}
					dataProvider={{
						// `default` is required to determine the default data provider
						default: dataProvider('https://api.fake-rest.refine.dev'),
						kamatha: dataProvider('http://local.kamatha.com/api/v1'),
						//kamathaDataProvider,
					}}
					resources={[
						{
							name: 'dashboard', // name of the resource is not important for the `useBreadcrumb` hook
							list: '/admin', // If any one of your resources has a list action with `/` route, the home icon will be rendered
						},
						{
							name: 'product_manage',
							meta: {
								label: 'Products Manage',
							},
						},
						{
							name: 'products',
							list: '/admin/products',
							create: '/admin/products/create',
							edit: '/admin/products/edit/:id',
							show: '/admin/products/show/:id',
							meta: {
								label: 'Products CRUD',
								//icon: '📝',
								canDelete: true,
								parent: 'product_manage',
								hideCreate: false,
							},
						},

						{
							name: 'products_assign',
							list: '/admin/products_assign',
							meta: {
								label: 'Products Assign',
								//icon: '📝',
								//canDelete: true,
								parent: 'product_manage',
								//hideCreate: true,
							},
						},
						{
							name: 'categories',
							list: '/admin/categories',
							show: '/admin/categories/show/:id',
							edit: '/admin/categories/edit/:id',
							create: '/admin/categories/create',
						},
						{
							name: 'posts',
							list: '/admin/posts',
							show: '/admin/posts/show/:id',
							edit: '/admin/posts/edit/:id',
							create: '/admin/posts/create',
							meta: {
								label: 'Posts',
								hideCreate: false,
								icon: false,
							},
						},
						{
							name: 'contact', // name of the resource is not important for the `useBreadcrumb` hook
							list: '/admin/contact', // If any one of your resources has a list action with `/` route, the home icon will be rendered

							meta: {
								label: 'Contact',
								icon: <div className='mr-1'>📝</div>,
							},
						},
						{
							name: 'threads',
							meta: {
								// Refine will use the `fineFoods` data provider for this resource
								dataProviderName: 'kamatha',
							},
							list: '/admin/threads',
						},
					]}
					options={{ syncWithLocation: true, breadcrumb: true }}
				>
					{/* <ThemedLayoutV2>{children}</ThemedLayoutV2> */}
					{/* <ThemedLayoutV2>{children}</ThemedLayoutV2> */}
					{children}
				</Refine>
			</AntdApp>
		</ConfigProvider>
	);
}
