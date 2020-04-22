import axios from '../config/axios'


export const getAllEmployees=(employee)=>{
    return {type:'GET_ALLEMPLOYEE', payload: employee}
}

export const startGetAllEmployee=()=>{
    return(dispatch)=>{
        axios.get('/employees', {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }  
        })
        .then((response)=>{
        const employee = response.data 
        dispatch(getAllEmployees(employee))   
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addEmployees=(employee)=>{
    return {type:'ADD_EMPLOYEE', payload: employee}
}

export const startAddEmployee=(formData)=>{
return(dispatch)=>{
    axios.post('/employees', formData, {
        headers:{
            'x-auth': localStorage.getItem('authToken')
        }  
    } )
    .then((response)=>{
        //console.log('newemp', response.data)
        const employee = response.data
        dispatch(addEmployees(employee))
    })
    .catch((err)=>{
        console.log(err)
    })
}
}

export const getEmpInfo=(empInfo)=>{
    return {type:'GET_EMPINFO', payload:empInfo}
}

export const startGetEmpInfo=(employe)=>{
    return(dispatch)=>{
        axios.get(`/employees/${employe._id}`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }  
        } )
        .then((response)=>{
            const empInfo = response.data
            dispatch(getEmpInfo(empInfo))
                })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const deleteEmp =(delEmp)=>{
    return {type:'DEL_EMP', payload: delEmp}
}

export const startDeleteEmp = (_id)=>{
    return(dispatch)=>{
        axios.delete(`/employees/${_id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }  
        })
        .then((response)=>{
            //console.log('delete', response.data)
            const delEmp = response.data
            dispatch(deleteEmp(delEmp))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}