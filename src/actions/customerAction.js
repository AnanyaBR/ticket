import axios from "../config/axios"

export const getCustomer=(customer)=>{
    return {type:'GET_ALLCUSTOMER', payload: customer}
}

export const startGetCustomer=()=>{
return(dispatch)=>{
    axios.get('/customers', {
        headers:{
            'x-auth': localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
    const customer = response.data
    dispatch(getCustomer(customer))
    })
    .catch((err)=>{

    })
}
}

export const addCustomer=(customer)=>{
    return {type:'ADD_CUSTOMER', payload: customer}
}

export const startAddCustomer=(formData)=>{
    return(dispatch)=>{
        axios.post('/customers',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
  const customer = response.data
  dispatch(addCustomer(customer))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const customerInfo=(msg)=>{
    return {type:'CUSTOMER_INFO', payload: msg}
}

export const startGetCustomInfo=(customer)=>{
    return(dispatch)=>{
        axios.get(`/customers/${customer._id}`, {
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        } )
        .then((response)=>{
            const msg = response.data // {createdAt: "2020-04-16T19:59:31.316Z", _id: "5e98bdd61666b7001664cd2a", name: "customer1", email: "cus@gmail.com", mobile: "9876543210", …}
            dispatch(customerInfo(msg))
            // console.log(response.data)
            // console.log(msg.name)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const removeCustomer=(customer)=>{
    return{type:'REMOVE_CUSTOMER', payload:customer}
}

export const startDeleteCustomer=(_id)=>{
    return(dispatch)=>{
        axios.delete(`/customers/${_id}`, {
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const customer = response.data
            dispatch(removeCustomer(customer))
        })
    }
}

