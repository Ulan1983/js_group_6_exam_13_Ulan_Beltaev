import {createBrowserHistory} from "history";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunkMiddleware from "redux-thunk";

import {loadFromLocalStorage, localStorageMiddleware} from "./localStorage";
import usersReducer from "./reducers/usersReducer";
import locationsReducer from "./reducers/locationsReducer";
import reviewsReducer from "./reducers/reviewsReducer";
import photosReducer from "./reducers/photosReducer";

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	router: connectRouter(history),
	users: usersReducer,
	locations: locationsReducer,
	reviews: reviewsReducer,
	photos: photosReducer
});

const middleware = [
	thunkMiddleware,
	routerMiddleware(history),
	localStorageMiddleware
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

export default store;