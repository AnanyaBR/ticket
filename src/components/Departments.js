import React from 'react'
import { connect } from 'react-redux'

class Departments extends React.Component{
    constructor(){
        super()
        this.state={
            department:[]

        }
    }
    render(){
        return(
            <div>
                <h1>Departments -</h1>
                <table border="1px solid black">
                   
                    <tbody>
                        <tr>
                            <td></td>
                            <td><button>Show</button></td>
                            <td><button>Remove</button></td>
                        </tr>

                    </tbody>
                </table>
                <h1>Add Department</h1>
                <input type='text' value={this.state.department} onChange={this.handleDepartment}/><br/><br/>
                <button>Add</button>
            </div>
        )
    }
}

export default connect()(Departments)