import {combineReducers, compose, legacy_createStore} from 'react-redux'
import numberReducer from './numberReducer'

const ReactReduxDevTools = 
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__();

export const configureStore = () => {
    return legacy_createStore(
        combineReducers({
            number: numberReducer,
        }),
        undefined,
        compose(
            ReactReduxDevTools,
        )
    )
}

export default configureStore;