import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import useReducer from '../reducers/userReducer'
import customerReducer from '../reducers/customerReducer'

const configureStore =()=>{
    const store = createStore(combineReducers({
        user:useReducer,
        customer:customerReducer
        

    }), applyMiddleware(thunk))
    return store
}

export default configureStore