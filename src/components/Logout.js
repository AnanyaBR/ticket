import React from 'react'
import { connect } from 'react-redux'

class Logout extends React.Component{
    render(){
        return(
            <div>
                <h1>Logout Page</h1>
            </div>
        )
    }
}

export default connect()(Logout)