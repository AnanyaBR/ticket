import React from 'react'
import { connect } from 'react-redux'
import AddCustomer from './AddCustomer'
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom'
import { startGetCustomer } from '../actions/customerAction'
import {startGetCustomInfo} from '../actions/customerAction'
import {startDeleteCustomer} from '../actions/customerAction'

class Customers extends React.Component{
    constructor(){
        super()
        this.state={
//        //createdAt: "2020-04-16T19:59:31.316Z"
// email: "cus@gmail.com"
// mobile: "9876543210"
// name: "customer1"
// user: "5e9216159b38110016837a1e"
// __v: 0
// _id: "5e98bf941666b7001664cd2b"
        }
        
    }

    componentDidMount(){
        this.props.dispatch(startGetCustomer())
    }

    handleShow=(customer)=>{
        this.props.dispatch(startGetCustomInfo(customer))
    //console.log(customer._id)
   }

   handleRemove=(_id)=>{
       //console.log(_id)
       this.props.dispatch(startDeleteCustomer(_id))
   }

   
    
    render(){
        return(
            <BrowserRouter>
            <div>
        <h1>Customers - {this.props.customers.length}</h1>
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
            <tbody>{
                this.props.customers.map((customer,i)=>{
                    return <tr key={i}>
                    <td>{customer._id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.mobile}</td>
                    <td><button onClick={()=>{
                        this.handleShow(customer)
                    }}>Show</button></td>
                    <td><button onClick={()=>{
                        this.handleRemove(customer._id)
                    }}>Remove</button></td>
                </tr>
                })
                 
                }
               

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

const mapStateToProps =(state)=>{
    return{
        customers:state.customer
    }
}

export default connect(mapStateToProps)(Customers)