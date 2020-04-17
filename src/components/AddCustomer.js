import React from 'react'
import { connect } from 'react-redux'
import { startAddCustomer } from '../actions/customerAction'

class AddCustomers extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            mobile:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            name:this.state.name,
            email:this.state.email,
            mobile: this.state.mobile
        }
        //console.log('add customer', formData)
        this.props.dispatch(startAddCustomer(formData))
        this.setState({
            name:'',
            email:'',
            mobile:''
        })

    }
    render(){
        return(
            <div>
                <h1>Add Customer</h1>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="name">Name</label>  <br/><br/>
                  <input type='text' id='name' name='name' value={this.state.name} onChange={this.handleChange}/><br/><br/>
                  <label htmlFor="email">Email</label>  <br/><br/>
                  <input type='text' id='email' name='email' value={this.state.email} onChange={this.handleChange}/><br/><br/>
                  <label htmlFor="mobile">Mobile</label>  <br/><br/>
                  <input type='text' id="mobile" name="mobile" value={this.state.mobile} onChange={this.handleChange}/><br/><br/>
                  <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}

export default connect()(AddCustomers)
