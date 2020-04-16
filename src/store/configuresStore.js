import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import useReducer from '../reducers/userReducer'

const configureStore =()=>{
    const store = createStore(combineReducers({
        user:useReducer
        

    }), applyMiddleware(thunk))
    return store
}

export default configureStore