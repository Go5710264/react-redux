import {
    combineReducers,
    compose,
    legacy_createStore
} from 'redux'
import numberReducer from './numberReducer'

/**
 * Подключение Redux-devtools
 */
// @ts-ignore
const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__();

export const configureStore = () => {
    return legacy_createStore(
        combineReducers({
            number: numberReducer,
        }),
        compose(
            ReactReduxDevTools,
        )
    )
}

export default configureStore;