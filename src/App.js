import React from 'react'
import Home from './components/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Customers from './components/Customers'
import Departments from './components/Departments'
import Employees from './components/Employees'
import Tickets from './components/Tickets'
import Logout from './components/Logout'
//import AddEmployees from './components/AddEmployees'
//import AddCustomer from './components/AddCustomer'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {startUserLogout} from './actions/userAction'

function App(props){

    const handleLogout=()=>{
        props.dispatch(startUserLogout())

    }
    return(
        <BrowserRouter>
        <div>
            
            <h1>Ticket Master</h1>
            <Link to='/'>Home</Link> 
            {
                Object.keys(props.user).length!==0 ?(
                    <div>
                <Link to="/customers">Customers</Link> |
            <Link to="/departments">Departments</Link> |
            <Link to="/employees">Employees</Link> |
            <Link to="/tickets">Tickets</Link> |
            <Link to="/" onClick ={handleLogout}>Logout</Link>
                    </div>

                ):(
                    <div>
            <Link to="/login">Login</Link> |
            <Link to="/register">Register</Link> |

                    </div>

                )
            }

            <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/customers" component={Customers} />
            <Route path="/departments" component={Departments} />
            <Route path="/employees" component={Employees} />
            
            <Route path="/tickets" component={Tickets} />
            <Route path="/logout" component={Logout}   />    
            
            </Switch>   
        </div>
        </BrowserRouter>
        
    )
}

const mapStateToProps =(state)=>{
    return{
 user:state.user
    }
}

export default connect(mapStateToProps)(App)

