import axios from '../config/axios'

export const getDepartment=(department)=>{
    return {type:'GET_ALLDEPARTMENT', payload: department}
}

export const startGetDepartment=()=>{
    return(dispatch)=>{
        axios.get('/departments' , {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const department = response.data
            dispatch(getDepartment(department))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addDepartment =(newDep)=>{
    return {type: 'ADD_DEPARTMENT', payload: newDep}
}

export const startAddDepartment=(formData)=>{
    return(dispatch)=>{
        axios.post('/departments', formData , {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }  
        })
        .then((response)=>{
            //console.log('department', response.data)
            const newDep = response.data
            dispatch(addDepartment(newDep))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getDepartmentInfo=(departmentInfo)=>{
    return {type: 'GET_DEPINFO', payload:departmentInfo}
}

export const startGetDepInfo =(department)=>{
    return(dispatch)=>{
        axios.get(`/departments/${department._id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }  
        })
        .then((response)=>{
            const departmentInfo = response.data
            dispatch(getDepartmentInfo(departmentInfo))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const deleteDepartment=(deleteDep)=>
{
    return {type: 'DEL_DEPARTMENT', payload:deleteDep}
}

export const startDeleteDepartment = (_id)=>{
    return(dispatch)=>{
        axios.delete(`/departments/${_id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }  
        })
        .then((response)=>{
           const deleteDep = response.data
           dispatch(deleteDepartment(deleteDep))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}