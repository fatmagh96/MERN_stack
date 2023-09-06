import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SWForm = () => {
    const [type, setType] = useState("people")
    const [id, setID] = useState(0)
    const navigate = useNavigate();
    const search = (e) => {
        e.preventDefault()
        console.log(type,"+++",id);
        navigate(`/${type}/${id}`)
    }
  return (
    <div>
        <form onSubmit={search}>
            <div className="row align-items-center">
                <label htmlFor="" className='col-1'>Search for:</label>
                <div className="col-2">
                    <select className='form-select' onChange={(e)=>setType(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <label htmlFor="" className='col-1'>ID:</label>
                <div className="col-1 me-5">
                    <input type="number" className='form-control' value={id} onChange={(e)=>setID(e.target.value)}/>
                </div>
                <button className='btn btn-primary col-1'>Search</button>
            </div>
        </form>
    </div>
  )
}

export default SWForm