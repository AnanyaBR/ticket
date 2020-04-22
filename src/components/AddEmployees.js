import React from 'react'
import {connect} from 'react-redux'
import { startGetDepartment } from '../actions/departmentAction'
import {startAddEmployee} from '../actions/employeeAction'

class AddEmployees extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            mobile:'',
            department:''
        }
    }

    componentDidMount(){
        this.props.dispatch(startGetDepartment())
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            department:this.state.department
        }

        //console.log('emp', formData )
        this.props.dispatch(startAddEmployee(formData))
        this.setState({
            name:'',
            email:'',
            mobile:'',
            department:''
        })
    }

    render(){
        return(
            <div>
                <h1>Add Employee</h1>
    
                <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name</label><br/><br/>
                <input type='text' id='name' value={this.state.name} name='name' onChange={this.handleChange} /><br/><br/>
                <label htmlFor='email'>Email</label><br/><br/>
                <input type='text' id='email' value={this.state.email} name='email' onChange={this.handleChange} /><br/><br/>
                <label htmlFor='mobile'>Mobile</label><br/><br/>
                <input type='text' id='mobile' value={this.state.mobile} name='mobile' onChange={this.handleChange} /><br/><br/>
                <label htmlFor="department">Department</label><br/><br/>
                <select id="department" value={this.state.department} name='department' onChange={this.handleChange}>
                <option  value=''>Select</option>
                    {
                        this.props.depNames.map(name=>{
                        return <option key ={name._id} value={name._id}>{name.name}</option>
                        })
                    }
                    
                    
                </select><br/><br/>
                <input type='submit' value='submit' />

                </form>
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    const departments = state.department
    // console.log('department', departments.length)
    // console.log('names', departments[1])
    return{
        depNames : departments
    }
}

export default connect(mapStateToProps)(AddEmployees)