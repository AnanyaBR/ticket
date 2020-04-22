import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configuresStore'
import {startGetUser} from './actions/userAction'
//import { startGetDepartment } from './actions/departmentAction'
//import { startGetCustomer } from './actions/customerAction'
const store = configureStore()
console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

//handle page reload

if(localStorage.getItem('authToken')){
store.dispatch(startGetUser())
//store.dispatch(startGetCustomer())
//store.dispatch(startGetDepartment())
}



const ele = (
    <Provider store={store}>
        <App/>
    </Provider>
)


ReactDOM.render(ele, document.getElementById('root'))