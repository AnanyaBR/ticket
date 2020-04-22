const employeeReducerInitialValue = []

const employeeReducer=(state=employeeReducerInitialValue, action)=>{
    switch(action.type){
        case 'GET_ALLEMPLOYEE' :{
            return action.payload
        }

        case 'ADD_EMPLOYEE' : {
            return state.concat(action.payload)
        }
        case 'GET_EMPINFO' :{
            alert(`ID - ${action.payload._id} \n Name - ${action.payload.name} \n Email - ${action.payload.email} \n Department - ${action.payload.department.name}`)
            return state
        }
        case 'DEL_EMP' : {
            const employees = state.filter(employee=>employee._id != action.payload._id)
            return employees
        }

        default : {
            return [].concat(state)
        }
    }
}

export default employeeReducer