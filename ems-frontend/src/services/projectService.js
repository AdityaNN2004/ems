import axios from "axios"
const url = 'http://127.0.0.1:5000/project'


export async function getProjects(){
    try{
        return await axios.get(url)
    }catch(error){
        console.log("exception: ",error)
    }
}