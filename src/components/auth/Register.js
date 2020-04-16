import React from 'react'
import { connect } from 'react-redux'
import {startRegisterUser} from '../../actions/userAction'

class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:''

        }
    }

    handleChange=(e)=>{
     this.setState({
         [e.target.name] : e.target.value
     })
    }


    handleSubmit=(e)=>{
        e.preventDefault()
        const formData ={
            username:this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        const redirect = () =>{
            return this.props.history.push('/login')
            
        }
        this.props.dispatch(startRegisterUser(formData, redirect))
        //this.props.dispatch(startRegisterUser(formData, this.props))
    }

    render(){
        return(
            <div>
                <h1>Register Page</h1>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="name"></label>
                <input type='text' id="name" value={this.state.username} name='username' placeholder="username" onChange={this.handleChange}/><br/><br/>
                <label htmlFor="email"></label>
                <input type='text' id="email" value={this.state.email} name='email' placeholder="Email" onChange={this.handleChange}/><br/><br/>
                <label htmlFor="pwd"></label>
                <input type='password' id="pwd" value={this.state.password} name='password' placeholder="Password" onChange={this.handleChange}/><br/><br/>
                <input type='submit' value='Register' />
                </form>
                
            </div>
        )
    }

}

export default connect()(Register)