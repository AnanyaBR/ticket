import React from 'react'
import { connect } from 'react-redux'
 class Tickets extends React.Component{
     render(){
         return(
             <div>
                 <h1>Tickets</h1>
             </div>
         )
     }
 }

 export default connect()(Tickets)