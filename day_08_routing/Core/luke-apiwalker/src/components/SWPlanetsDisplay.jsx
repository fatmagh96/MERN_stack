import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SWPlanetsDisplay = () => {
    const [object, setObject] = useState("")
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}/`)
        .then(response=>{setObject(response.data);
            console.log(response.data)
        })
        .catch(err=>{console.log(err)
            navigate('/error')
        })
    }
    , [id])
  return (
    <div>
        <h2 className='mt-5'>{object.name}</h2>
        <br />
        <div className="d-flex align-items-center gap-2">
            <h5>Climate:</h5><span>{object.climate}</span>
        </div>
        <div className="d-flex align-items-center gap-2">
            <h5>Terrain:</h5><span>{object.terrain}</span>
        </div>
        <div className="d-flex align-items-center gap-2">
            <h5>Surface Water:</h5><span>{object.surface_water}</span>
        </div>
        <div className="d-flex align-items-center gap-2">
            <h5>Population:</h5><span>{object.population}</span>
        </div>   
        
        
    </div>
  )
}

export default SWPlanetsDisplay