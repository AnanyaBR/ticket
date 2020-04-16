import React from 'react'

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

    render(){
        return(
            <div>
                <h1>Add Employee</h1>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name</label><br/><br/>
                <input type='text' id='name' value={this.state.name} name='name' onChange={this.handleChange} /><br/><br/>
                <label htmlFor='email'>Email</label><br/><br/>
                <input type='text' id='email' value={this.state.email} name='email' onChange={this.handleChange} /><br/><br/>
                <label htmlFor='mobile'>Name</label><br/><br/>
                <input type='text' id='mobile' value={this.state.mobile} name='mobile' onChange={this.handleChange} /><br/><br/>
                <label htmlFor="department">Department</label><br/><br/>
                <select id="department" value={this.state.department} name='department' onChange={this.handleChange}>
                    <option value=''>Select</option>
                    
                </select>
                <input type='submit' value='submit' />

                </form>
                
            </div>
        )
    }
}

export default AddEmployees