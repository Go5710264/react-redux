import {
    combineReducers,
    // compose,
    legacy_createStore
} from 'redux'
import numberReducer from './numberReducer'

/**
 * Для подключения Redux-devtools
 * необходимо раскомментировать весь код
 */

// const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__();

export const configureStore = () => {
    return legacy_createStore(
        combineReducers({
            number: numberReducer,
        }),
        // compose(
        //     ReactReduxDevTools,
        // )
    )
}

export default configureStore;