import React, { useState } from 'react'
import { getProjects } from '../../services/projectService'
import { toast,ToastContainer } from 'react-toastify'

function Project() {
    const [data,setData] = useState([])
    const getProject = async()=>{
        try{
            const response = await getProjects()
            const projectList = response.data.project || response.data
            setData(projectList)
            toast.success("Fetched Data Successfully!!")
            console.log("Data from server: ",response)
        }catch(error){
            toast.error("Error While Fetching Data......")
            console.log("Exception: ",error)
        }
    }

    return (
        <>
        <div>
            <ToastContainer position="top-right"></ToastContainer>
        </div>
        <div className="container m-4">
            <button type="button" className="m-3 btn btn-primary" onClick={getProject}>
            Get Projects
            </button>
            <button type="button"  className="m-3 btn btn-primary">
            Add Project
            </button>
        </div>
        <div className="d-flex justify-content-center">
            <h1>Project List</h1>
        </div>
        <div className="m-5 border">
            <table className="table table-info table-bordered">
            <thead>
                <tr className="text-center">
                <th scope="col">Name of Project</th>
                <th scope="col">Status</th>
                <th scope="col">Department Name</th>
                <th scope="col">Team Members</th>
                <th scope="col" colSpan={2}>
                    Actions
                </th>
                </tr>
            </thead>
            <tbody>
                {data.map((dt) => {
                return (
                    <tr key={dt._id} className="text-center">
                    <td>{dt.name}</td>
                    <td>{dt.status}</td>
                    <td>{dt.deptId?.name || "No Dept"}</td>
                    <td>{dt.teamMembers?.length || 0} Members</td>
                    <td>
                        <div className="d-flex justify-content-center">
                        <button
                            className="btn btn-danger"
                            
                        >
                            Remove
                        </button>
                        </div>
                    </td>
                    <td>
                        <div className="d-flex justify-content-center">
                        {/* 2. Wrap the call in an arrow function to pass the current 'dt' */}
                        <button
                            className="btn btn-warning"
                            
                        >
                            Edit
                        </button>
                        </div>
                    </td>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>
        </>

    )
    }

    export default Project
