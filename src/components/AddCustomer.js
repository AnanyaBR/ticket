import React from 'react'
import { connect } from 'react-redux'

class AddCustomers extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            mobile:''
        }
    }
    render(){
        return(
            <div>
                <h1>Add Customer</h1>
                <form>
                  <label htmlFor="name">Name</label>  <br/><br/>
                  <input type='text' id='name' name='name' value={this.state.name} onChange={this.handleChange}/><br/><br/>
                  <label htmlFor="email">Email</label>  <br/><br/>
                  <input type='text' id='email' name='email' value={this.state.email} onChange={this.handleChange}/><br/><br/>
                  <label htmlFor="mobile">Name</label>  <br/><br/>
                  <input type='text' id="mobile" name="mobile" value={this.state.mobile} onChange={this.handleChange}/><br/><br/>
                  <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}

export default connect()(AddCustomers)
