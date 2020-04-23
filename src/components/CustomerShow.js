import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class CustomerShow extends React.Component{

    render(){
        return(
            <div>
    <h1>{this.props.cutsomers.name}-{this.props.customers.email}</h1>
    <Link >Edit</Link>
    <button>All</button>
    <button>Pending</button>
    <button>Connected</button>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        customers: state.customer
    }
}

export default connect(mapStateToProps)(CustomerShow)