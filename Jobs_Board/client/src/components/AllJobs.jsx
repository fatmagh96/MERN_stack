import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import DeleteJob from './DeleteJob'

const AllJobs = ({baseUrl}) => {
    const [jobs, setJobs] = useState([])
    const [deleted, setDeleted] = useState(false)
    useEffect(()=>{
        axios.get(baseUrl+'jobs')
        .then(serverResponse=>{
            console.log(serverResponse);
            setJobs(serverResponse.data)
            setDeleted(false)
        })
        .catch(error=>console.log(error))
    },[deleted])
    console.log(deleted);
  return (
    <div>
        <Link to={'/jobs/new'}>Create new jobs</Link>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Job title</th>
                    <th>Company</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {jobs.map((job)=>
                <tr key={job._id}>
                    <td>{job.title} {job.isRemote && <span>(Remote)</span>}</td>
                    <td>{job.company}</td>
                    <td>{job.status}</td>
                    <td>
                        <Link to={`/jobs/edit/${job._id}`} className='btn btn-link'>Edit</Link>
                        <DeleteJob style={'btn btn-link'} baseUrl={baseUrl} id={job._id} isDeleted={setDeleted}/>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default AllJobs