import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
    const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const middleware = [thunk]

    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware)
        )
    )
}