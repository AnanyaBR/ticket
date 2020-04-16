import React from 'react'
import { connect } from 'react-redux'
import {Link, Route, BrowserRouter} from 'react-router-dom'
import AddEmployees from './AddEmployees'

class Employees extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <BrowserRouter>
            <div>
<h1>Employees-</h1>
<table border= "1px solid black">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Department</th>
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
            <td></td>
            <td></td>
            <td></td>
        </tr>

    </tbody>
</table>
<Link to="/employees/new">Add Employees</Link>
<Route path ="/employees/new" component ={AddEmployees} exact={true}/>

            </div>
            </BrowserRouter>
            
        )
    }
}

export default connect()(Employees)