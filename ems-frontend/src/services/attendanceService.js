import axios from "axios"
const url = 'http://127.0.0.1:5000/attendance'


export async function getAttendanceList(){
    try{
        const response= await axios.get(url)
        const data = response.data
        console.log("Response: ..",response)
        console.log("Data: ",data)
        return response
    }catch(error){
        console.error("Error while fetching attendance: ",error)
    }
}

export async function createAttendance(body) {
    try{
        const response = await axios.post(url,body)
        return response
    }catch(error){
        console.error("Error while creating attendance: ",error)
    }
}

export async function editAttendance(id,body) {
    try{
        const response = await axios.put(id,body)
        return response
    }catch(error){
        console.error("Error while updating attendance: ",error)
    }
}

export async function removeAttendance(id) {
    try{
        return axios.delete(`${url}/${id}`)
    }catch(error){
        console.error("Error while deleting attendance: ",error)
    }
}