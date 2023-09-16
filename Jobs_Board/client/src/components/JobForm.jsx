import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const JobForm = ({baseUrl}) => {
    const navigate = useNavigate()
    const [job, setJob] = useState({title:'',company:'',isRemote:false})
    const [errors,setErrors] = useState({title:"",company:""})
    const createJob = (e) => {
        e.preventDefault()
        axios.post(baseUrl+'jobs',job)
        .then(serverResponse=>{
            console.log(serverResponse.data);
            navigate(`/jobs/${serverResponse.data._id}`)
        })
        .catch(error=>{
            console.log(error)
            const errs = { title: "", company: "" }
            for (let key of Object.keys(error.response.data)) {
                errs[key] = error.response.data[key].message
              }
            setErrors({ ...errors, ...errs })
        })
    } 
  return (
    <div>
        {JSON.stringify(job)}
        <form onSubmit={createJob}>
            <div className="form-group mb-3">
                <label htmlFor="">Title : </label>
                <input type="text" className="form-control" onChange={(e)=>{
                    console.log(e.target.value);
                    setJob({...job, title:e.target.value})}} value={job.title} />
                {errors.title && <span className='text-danger'> {errors.title}</span>}
            </div>
            <div className="form-group mb-3">
                <label htmlFor="">Company : </label>
                <input type="text" className="form-control" onChange={(e)=>setJob({...job, company:e.target.value})} value={job.company}/>
                {errors.company && <span className='text-danger'> {errors.company}</span>}
            </div>
            <div className="form-group mb-3">
                <input type="checkbox" className="form-check-input me-3" onChange={(e)=>setJob({...job,isRemote:e.target.checked})}
                checked={job.isRemote}/>
                <label htmlFor="">Remote</label>
            </div>
            <div>
                <button className='btn btn-success me-4'>Create Job</button>
                <Link to={'/'} className='btn btn-secondary'>Cancel</Link>
            </div>
        </form>

    </div>
  )
}

export default JobForm