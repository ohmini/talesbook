import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {router5Middleware as createRouterMiddleware, router5Reducer} from 'redux-router5'
import { router } from '../router';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const routerMiddleware = createRouterMiddleware(router)

const store = createStore(
    combineReducers({
        router: router5Reducer,
    }),
    {},
    composeEnhancers(applyMiddleware(
        routerMiddleware
    ))
)

export {
    store
}