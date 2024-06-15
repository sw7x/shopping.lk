import { configureStore, type Middleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { createLogger } from 'redux-logger';

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import localStorage from 'redux-persist/lib/storage'; //localStorage
import sessionStorage from 'redux-persist/lib/storage/session'; //sessionStorage
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import {
	CALL_HISTORY_METHOD,
	LOCATION_CHANGE,
	createReduxHistoryContext,
} from 'redux-first-history';

import { createBrowserHistory } from 'history';

import { createStateSyncMiddleware, initMessageListener } from 'redux-state-sync';

import counterReducer from '@store/slices/counterSlice';
import postsReducer from '@store/slices/postsSlice';
import authReducer from '@store/slices/authSlice';
//import todoReducer from '@store/slices/todosSlice';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
	history: createBrowserHistory(),
	reduxTravelling: true,
});

/* 
export const createReduxHistoryContext = {
	history,
	routerReducerKey = 'router',
	reduxTravelling = false,
	selectRouterState = null,
	savePreviousLocations = 0,
	batch = null,
	reachGlobalHistory = null,
};
 */

const loggerMiddlewarex: Middleware = (store) => (next) => (action) => {
	console.log('x-Action:', action);
	const result = next(action);
	console.log('x-Next State:', store.getState());
	return result;
};
const loggerMiddlewarey: Middleware = (store) => (next) => (action) => {
	console.log('y-Action:', action);
	const result = next(action);
	console.log('y-Next State:', store.getState());
	return result;
};

const stateSyncMiddleware = createStateSyncMiddleware({
	whitelist: [
		'auth/loginUser/pending',
		'auth/loginUser/fulfilled',
		'auth/loginUser/rejected',
		'auth/logoutUser/pending',
		'auth/logoutUser/fulfilled',
		'auth/logoutUser/rejected',
	],
	/*
	predicate: (action) => {
		const blacklist = [
			PERSIST,
			PURGE,
			REHYDRATE,
			REGISTER,
			FLUSH,
			PAUSE,
			CALL_HISTORY_METHOD,
			LOCATION_CHANGE,
		];
		if (typeof action !== 'function') {
			if (Array.isArray(blacklist)) {
				return blacklist.indexOf(action.type) < 0;
			}
		}
		return false;
	},*/
}) as Middleware;

const logger: Middleware = createLogger();
const middlewares = [logger, routerMiddleware];
//const middlewares = [loggerMiddlewarex, loggerMiddlewarey, routerMiddleware];
//const middlewares = [loggerMiddlewarex, loggerMiddlewarey];
//const middlewares = [routerMiddleware];
//const middlewares = [];

const rootPersistConfig = {
	key: 'root',
	version: 1,
	storage: sessionStorage,
	stateReconciler: (inboundState: any, originalState: any, reducedState: any) => {
		//alert('dfff');
		return inboundState;
	},

	//stateReconciler: hardSet,
	//blacklist: ['posts'],
	//whitelist: ['counter', 'router', 'posts', 'auth'],
	//whitelist: ['auth', 'router'],
	whitelist: ['posts', 'counter', 'router'],
};

const routerPersistConfig = {
	key: 'router',
	storage: sessionStorage,
};

const authPersistConfig = {
	key: 'auth',
	storage: localStorage,
	stateReconciler: hardSet,
	whitelist: ['token', 'user'],
};

const postsPersistConfig = {
	key: 'posts',
	storage: localStorage,
};

const rootReducer = combineReducers({
	//todos: todoReducer,
	counter: counterReducer,
	//auth: authReducer,
	auth: persistReducer(authPersistConfig, authReducer),
	//posts: postsReducer,
	posts: persistReducer(postsPersistConfig, postsReducer),
	router: persistReducer(routerPersistConfig, routerReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
	/* 
	reducer: {
		//todos: todoReducer,
		counter: counterSlice,
	}, 
	*/
	preloadedState: {
		counter: {
			value: 7,
		},
	},

	//reducer: rootReducer,
	reducer: persistedReducer,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
			.prepend(stateSyncMiddleware)
			//.prepend(middlewares),
			.concat(middlewares),
});

initMessageListener(store);

export const persistor = persistStore(store);
export const history = createReduxHistory(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
