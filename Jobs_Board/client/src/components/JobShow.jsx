import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import DeleteJob from './DeleteJob'

const JobShow = ({ baseUrl }) => {
    const [job, setJob] = useState({ title: '', company: '', isRemote: false })
    const [deleted, setDeleted] = useState(false)
    const { id } = useParams()
    console.log('+++++', id);
    useEffect(() => {
        axios.get(baseUrl + 'jobs/' + id)
            .then(serverResponse => {
                console.log(serverResponse.data);
                setJob(serverResponse.data)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <>

            <Link to={'/'}>Home</Link>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-3 h5">Job Title:</div>
                    <div className="col-4">{job.title}</div>
                </div>
                <div className="row">
                    <div className="col-3 h5">Company:</div>
                    <div className="col-4">{job.company}</div>
                </div>
                <div className="row">
                    <div className="col-3 h5">Remote working:</div>
                    <div className="col-4">{job.isRemote ? <p>Yes</p> : <p>No</p>}</div>
                </div>
                <div className="row">
                    <div className="col-3 h5">Status:</div>
                    <div className="col-4">{job.status}</div>
                </div>
                <div>
                    {/* <button className='mt-3 me-3 btn btn-success'>Edit</button> */}
                    <Link to={`/jobs/edit/${job._id}`} className='mt-3 me-3 btn btn-success'>Edit</Link>
                    {/* <button className='mt-3 btn btn-danger'>Delete</button> */}
                    <DeleteJob style={'mt-3 btn btn-danger'} baseUrl={baseUrl} id={job._id} isDeleted={setDeleted}/>

                </div>
            </div>
        </>
    )
}

export default JobShow