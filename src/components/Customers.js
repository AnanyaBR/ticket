import React from 'react'
import { connect } from 'react-redux'
import AddCustomer from './AddCustomer'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'

class Customers extends React.Component{
    constructor(){
        super()
        this.state={
        customer :[]
        }
    }
    render(){
        return(
            <BrowserRouter>
            <div>
                <h1>Customers Page</h1>
        <h1>Customers - {}</h1>
        <table border= '1px solid black'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Actions</th>
                    <th>Remove</th>
                </tr>

            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button>Show</button></td>
                    <td><button>Remove</button></td>
                </tr>

            </tbody>

        </table>
        <Link to='/customers/new'>Add Customer</Link>
        <Switch>
        <Route path='/customers/new' component={AddCustomer} exact={true}/>
        </Switch>
         
        
        </div>
        </BrowserRouter>
        )
    }
}

export default connect()(Customers)