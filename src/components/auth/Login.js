import React from 'react'
import {connect} from 'react-redux'
import {startLoginUser} from '../../actions/userAction'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        //console.log(formData)
        const redirect=()=>{
            return this.props.history.push('/')
        }
        this.props.dispatch(startLoginUser(formData, redirect))
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }



    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>Login Page</h1>
                <label htmlFor="email"></label>
                <input type="text" id='email' name ='email' value={this.state.email} placeholder='Email' onChange={this.handleChange}/><br/><br/>
                <label htmlFor="pswrd"></label>
                <input type="password" id="pswrd" name="password" value={this.state.password} placeholder='Password' onChange={this.handleChange}/><br/><br/>
                <input type='submit' value='Login'/>
                </form>
                


            </div>
        )
    }
}

export default connect()(Login)