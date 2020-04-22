const departmentReducerIntialValue= []

const departmentReducer = (state= departmentReducerIntialValue, action)=>{
    switch(action.type){

        case 'GET_ALLDEPARTMENT' : {
            return action.payload
        }

        case 'ADD_DEPARTMENT' :{
            return state.concat(action.payload)
        }

        case 'GET_DEPINFO' :{
            alert(`ID - ${action.payload._id} \n Department - ${action.payload.name}`)
            return state
        }

        case 'DEL_DEPARTMENT' :{
            const departments = state.filter(department=> department._id !== action.payload._id)
            return departments
        }
        default :{
            return [].concat(state)
        }
    }
}

export default departmentReducer