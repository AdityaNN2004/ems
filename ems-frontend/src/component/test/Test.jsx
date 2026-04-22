import React from 'react'
import { ToastContainer,toast } from 'react-toastify'
import axios from 'axios'
import { useEffect } from 'react'

function Test() {
    useEffect(()=>{
        const fetchMessage = async () =>{
            try{
                const response =  await axios.get("http://localhost:5000")
                toast.success(response.data)
            }catch(exception){
                toast.error("Something Went Wrong!!")
                console.error("Exception Message: ",exception.message)
            }
        }
        fetchMessage()
    },[])
    return (
        <>
        <div>
            <h1 className='d-flex justify-content-center'>My React App</h1>
        </div>
        
        </>
    )
}

export default Test