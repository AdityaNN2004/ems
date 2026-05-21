import axios from "axios"
import { toast } from "react-toastify"

const url = 'http://127.0.0.1:5000/dept'

export async function getDepartment() {
    const response = await axios.get(url)
    // console.log("Data: ",response.data)  
    return response
}

export async function addDepartment(name, location, budget, hod) {
    try {
        const body = { name, location, budget, hod }
        const response = await axios.post(url, body)
        return response.data
    } catch (exception) {
        toast.error('Internal Server Error !!')
        console.log("Exception", exception)
    }
}

export async function editDepartment(id, name, location, budget, hod) {
    try {
        const body = { name, location, budget, hod }
        const response = await axios.put(`${url}/${id}`, body)
        return response.data
    } catch (exception) {
        toast.error(exception.message)
        console.error('Exception', exception)
    }
}

export async function removeDepartment(id) {
    try{
        return await axios.delete(`${url}/${id}`)
    }
    catch(exception){
        console.log("Exception",exception)
    }    
}