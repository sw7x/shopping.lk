import { TopNav } from '@root/layouts/default/TopNav/TopNav';
import { Sidebar } from '@root/layouts/default/Sidebar/Sidebar';
import { CategorySidebar } from '@root/layouts/default/CategorySidebar';
import { Footer } from '@root/layouts/default/Footer';
//import { MessageCard } from '@root/layouts/default/MessageCard';

import { Main } from '@root/layouts/default/Main';
import { useEffect, useRef, useState } from 'react';

//import { Outlet, useLocation } from 'react-router-dom';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
//import { Outlet } from 'react-router-dom';

import { ScrollToPButton } from './ScrollToPButton.tsx';
import { HotQuestions } from '@containers/HomePage';
import { BannerText } from '@components/BannerText';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@root/components/Error/ErrorFallback';
import { useAppDispatch, useAppSelector } from '@shared/hooks/useStore';
import {
	logOut,
	selectAuthIsShowMessage,
	selectAuthReredirectUrl,
	selectAuthResponseMsg,
	selectAuthStatus,
	selectAuthToken,
	selectAuthUser,
	setCredentials,
	viewMessage,
	type AuthStateType,
} from '@root/store/slices/authSlice';
import { Alert } from '@root/components/Alert';
import { persistor } from '@root/store';

import { getStoredState } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage'; //localStorage
import type { UserType } from '@root/shared/types';

export const DefaultLayout = () => {
	//const [showAlert, setShowAlert] = useState(false);
	const isInitialRender = useRef(true);

	const [persistedUser, setPersistedUser] = useState(false);

	const navigateTo = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();

	const bottomRef = useRef(null);

	const authRespMsg = useAppSelector(selectAuthResponseMsg);
	const authIsShowMessage = useAppSelector(selectAuthIsShowMessage);

	const authStatus = useAppSelector(selectAuthStatus);

	const authUser = useAppSelector(selectAuthUser);
	const authToken = useAppSelector(selectAuthToken);

	const redirectUrl = useAppSelector(selectAuthReredirectUrl);

	useEffect(() => {
		let loginTimer: ReturnType<typeof setTimeout>;
		let logoutTimer: ReturnType<typeof setTimeout>;

		// after login
		if (authUser !== null && authStatus === 'success') {
			loginTimer = setTimeout(() => {
				navigateTo(fromLogin, { replace: true });
				dispatch(viewMessage(false));
			}, 3000);
		}

		// after logout
		if (authUser === null && authStatus === 'success') {
			logoutTimer = setTimeout(() => {
				navigateTo(fromLogout, { replace: true });
				dispatch(viewMessage(false));
			}, 3000);
		}

		// cleanup function
		return () => {
			if (typeof loginTimer !== 'undefined') {
				clearTimeout(loginTimer);
			}
			if (typeof logoutTimer !== 'undefined') {
				clearTimeout(logoutTimer);
			}
		};
	}, [authUser]);

	/* const gg = getStoredState({
		key: 'auth',
		storage: localStorage,
	}); */

	//dispatch(logOut({ redirectUrl: '/login', responseMessage: 'auto logout' }));

	/* 
	useEffect(() => {
		// Code to execute on each re-render (skip initial render)
		console.log('Component re-rendered');

		gg.then(
			(
				restoredAuthState: { token?: string; user?: UserType; status?: string } | undefined,
			) => {
				// Access the persisted state
				console.log('Persisted State:', restoredAuthState);

				let token = restoredAuthState?.token ?? '';
				let user = restoredAuthState?.user ?? {};
				let status = restoredAuthState?.status ?? '';

				if (authUser === null && Object.keys(user).length !== 0) {
					//if(authUser == {} && user !== {}) {
					dispatch(setCredentials({ token, user }));
					console.log('persisted state set');
				}

				if (authUser !== null && Object.keys(user).length === 0) {
					//if(authUser == {} && user !== {}) {
					dispatch(logOut({ redirectUrl: '/login', responseMessage: 'auto logout' }));
					console.log('persisted state cleared');
				}

				//dispatch(setCredentials({ token, user }));
			},
		).catch((error) => {
			// Handle any errors
			console.error('Error retrieving persisted state:', error);
		});

		// Mark that it's not the initial render for subsequent renders
		isInitialRender.current = false;

		dispatch(viewMessage(false));
		//alert('initial render');

		let rand = Math.random();
		console.log(`=============layout  rendered ========== - ` + rand);

		//alert(`=============layout  rendered ========== - ` + rand);
	});
	*/

	//const xx = persistor;
	//const persistedState = persistor.getState();

	const isHome = useLocation().pathname === '/';
	//const isHome = true;

	//const from = location.state?.from || redirectUrl || '/empty';
	const fromLogin = redirectUrl || '/empty';
	const fromLogout = redirectUrl || '/login';

	const alertCls = authStatus === 'success' ? 'success' : 'danger';

	return (
		<div className=''>
			<TopNav />
			<Sidebar />
			<div className='mcw clearfix container-fluid'>
				<div className='row'>
					<div className='col-md-9 page-content __clearfix'>
						<div id='react_page_container'>
							{/* <Main>{children}</Main> */}
							{authIsShowMessage && authRespMsg && (
								<Alert type={alertCls}>{authRespMsg}</Alert>
							)}

							{/* <MessageCard /> */}
							{isHome && <BannerText />}

							<Main>
								<Outlet />
							</Main>
						</div>
					</div>

					<div id='react_right_sidebar_container' className='col-md-3'>
						{/* isHome === true ? 'Home' : 'Other' */}
						<aside>{isHome && <HotQuestions />}</aside>

						<aside>
							<CategorySidebar />
						</aside>
					</div>
				</div>

				<div className='footer_row row'>
					<Footer />
				</div>
			</div>
			<div ref={bottomRef} />
			{isHome && <ScrollToPButton />}
		</div>
	);
};

{
	/* <Main>
	<ErrorBoundary FallbackComponent={ErrorFallback} onError={() => console.log('Error happened!')}>
		<Outlet />
	</ErrorBoundary>
</Main>; */
}
