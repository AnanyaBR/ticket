import React from 'react'
import { connect } from 'react-redux'
import {startGetDepartment} from '../actions/departmentAction'
import {startAddDepartment} from '../actions/departmentAction'
import {startGetDepInfo} from '../actions/departmentAction'
import {startDeleteDepartment} from '../actions/departmentAction'

class Departments extends React.Component{
    constructor(){
        super()
        this.state={
            
            name:''

        }
    }

    componentDidMount(){
        this.props.dispatch(startGetDepartment())
        
    }

    handleDepartment=(e)=>{
    const name = e.target.value

     this.setState({name})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            name : this.state.name
        }
 this.props.dispatch(startAddDepartment(formData))
 this.setState({
     name:''
 })

    }

    handleShow=(department)=>{
this.props.dispatch(startGetDepInfo(department))
    }

    handleRemove =(_id)=>{
      this.props.dispatch(startDeleteDepartment(_id))  
    }

    render(){
        
        return(
           
            <div>
            <h1>Departments -{this.props.departments.length}</h1>
                <table border="1px solid black">
                   
                    <tbody>{
                     this.props.departments.map(department=>{
                         return <tr key = {department._id}>
                          <td>{department.name}</td>
                         <td><button onClick={()=>{
                             this.handleShow(department)
                         }}>Show</button></td>
                         <td><button onClick={()=>{
                             this.handleRemove(department._id)
                         }}>Remove</button></td>
                     </tr>
                     })
                        
                        }
                        

                    </tbody>
                </table>
                <h1>Add Department</h1>
                <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.name} onChange={this.handleDepartment}/><br/><br/>
                <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        departments: state.department
    }
}

export default connect(mapStateToProps)(Departments)