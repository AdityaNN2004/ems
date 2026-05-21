import axios from "axios"
const url = 'http://127.0.0.1:5000/project'


export async function getProjects(){
    try{
        return await axios.get(url)
    }catch(error){
        console.log("exception: ",error)
    }
}

export async function addProject(body) {
    try{
        const response = await axios.post(url,body)
        return response
    }catch(error){
        console.error("Error: ",error)
    }
}

export async function updateProject(id,body) {
    try{
        const response = await axios.put(id,body)
        return response
    }catch(error){
        console.error("Error: ",error)
    }
}

export async function deleteProject(id) {
    try{
        const response = await axios.delete(id)
        return response
    }catch(error){
        console.error("Error: ",error)
    }
}