import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import DeleteJob from './DeleteJob'

const JobEdit = ({baseUrl}) => {
    const navigate = useNavigate()
    const [job, setJob] = useState({title:'',company:'',isRemote:false})
    const [errors,setErrors] = useState({title:"",company:""})
    const [deleted, setDeleted] = useState(false)
    const {id} = useParams()
    console.log('+++++',id);
    useEffect(()=>{
        axios.get(baseUrl+'jobs/'+id)
        .then(serverResponse=>{
            console.log(serverResponse.data);
            setJob(serverResponse.data)
        })
        .catch(error=>console.log(error))
    },[])
    const updateJob = (e) => {
        e.preventDefault()
        axios.put(baseUrl+'jobs/'+id,job)
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
        <form onSubmit={updateJob}>
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
            <div className="form-group mb-3">
                <label htmlFor="">Status:</label>
                <select name="" id="" className='form-select' onChange={(e)=>{
                    console.log(e.target.value);
                    setJob({...job,status:e.target.value})
                    }} value={job.status}>
                    <option value="Pending">Pending</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview(s) scheduled">Interview(s) scheduled</option>
                    <option value="Interview(s) complete">Interview(s) complete</option>
                </select>
            </div>



            <div>
                <button className='btn btn-success me-4'>Update Job</button>
                <Link to={'/'} className='btn btn-secondary me-4'>Cancel</Link>
                {/* <button className='btn btn-danger'>Delete</button> */}
                <DeleteJob style={'btn btn-danger'} baseUrl={baseUrl} id={job._id} isDeleted={setDeleted}/>
            </div>
        </form>

    </div>
  )
}

export default JobEdit