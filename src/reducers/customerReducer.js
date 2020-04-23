

const customerReducerInitialValue=[]

const customerReducer=(state=customerReducerInitialValue, action)=>{
    switch(action.type){
        case 'GET_ALLCUSTOMER' :{
            return action.payload
        }

        case 'ADD_CUSTOMER' :{
            return state.concat(action.payload)
        }

        case 'CUSTOMER_INFO' : {
            
            //alert('Name - '+action.payload.name+'\nID - '+ action.payload._id +'\nEmail - '+action.payload.email )
            return state
    
        }

        case 'REMOVE_CUSTOMER' :{
            
            //console.log(state , state.customer)
            // const xyz = state
            // const cus = xyz.filter(custo=>custo._id !== action.payload._id)
            const customers = state.filter(customer => customer._id !== action.payload._id)
            return customers

        }
        default :{
            return [].concat(state)
        }
    }
}

export default customerReducer