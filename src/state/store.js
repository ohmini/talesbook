import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {router5Middleware as createRouterMiddleware, router5Reducer} from 'redux-router5'
import createSagaMiddleware from 'redux-saga'

import {effects, reducer} from './ducks'
import { router } from '../router';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const routerMiddleware = createRouterMiddleware(router)
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    combineReducers({
        router: router5Reducer,
        ...reducer
    }),
    {},
    composeEnhancers(applyMiddleware(
        routerMiddleware, sagaMiddleware
    ))
)

effects.forEach(fx => sagaMiddleware.run(fx))

export {
    store
}