import React from 'react'
import { connect } from 'react-redux'
import {Link, Route, BrowserRouter} from 'react-router-dom'
import AddEmployees from './AddEmployees'
import {startGetAllEmployee} from '../actions/employeeAction'
import {startGetEmpInfo} from '../actions/employeeAction'
import {startDeleteEmp} from '../actions/employeeAction'

class Employees extends React.Component{
    // constructor(){
    //     super()
    //     this.state={

    //     }
    // }
    
componentDidMount(){
    this.props.dispatch(startGetAllEmployee())
}

handleShow=(employe)=>{
    this.props.dispatch(startGetEmpInfo(employe))
}

handleRemove=(_id)=>{
this.props.dispatch(startDeleteEmp(_id))

}

    render(){
        return(
            <BrowserRouter>
            <div>
<h1>Employees-{this.props.employees.length}</h1>
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
    <tbody>{
        this.props.employees.map((employe, i)=>{
            return  <tr key = {i}>
            <td>{employe._id}</td>
        <td>{employe.name}</td>
        <td>{employe.email}</td>
            <td>{employe.mobile}</td>
            <td>{employe.department.name}</td>
            <td><button onClick ={()=>{
                this.handleShow(employe)
            }}>Show</button></td>
            <td><button onClick={()=>{
                this.handleRemove(employe._id)
            }}>Remove</button></td>
        </tr>

        })
        }
        
    </tbody>
</table>
<Link to="/employees/new">Add Employees</Link>
<Route path ="/employees/new" component ={AddEmployees} exact={true}/>

            </div>
            </BrowserRouter>
            
        )
    }
}

const mapStateToProps=(state)=>{
    //console.log('state', state.employee)
    return {
        employees:state.employee
    }
}

export default connect(mapStateToProps)(Employees)