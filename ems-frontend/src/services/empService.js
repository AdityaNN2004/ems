import axios from "axios"
const url = 'http://127.0.0.1:5000/emp'

export async function getEmps() {
   try{
        const response = await axios.get(url)
        // const data = response.data.data
        // console.log("data: ",response.data.data)
        return response
   }catch(error){
    console.error("Exception",error)
   }
}

export async function addEmp(body) {
    try{
        console.log("Body",body)
        const response = await axios.post(url,body)
        return response
    }catch(error){
        console.error("Exception: ",error)
    }
}

export async function editEmp(id,body) {
    try{
        const response = await axios.put(`${url}/${id}`,body)
        return response
    }catch(error){
        console.error("Exception: ",error)
    }
}

export async function removeEmp(id) {
    try{
        return await axios.delete(`${url}/${id}`)
    }catch(exception){
        console.error("Exception: ",exception)
    }
}