import React , {useEffect, useState} from 'react'
import { useParams , Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SWDisplay = () => {
    const baseUrl = "https://swapi.dev/api"
    const [object, setObject] = useState("")
    const [homeLand,setHomeLand] = useState ('')
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`${baseUrl}/people/${id}`)
        .then(response=>{setObject(response.data);
            console.log(response.data);
            axios.get(response.data.homeworld).then(rep => setHomeLand(rep.data)).catch(err => navigate('/error'))
        })
        .catch(err=>{console.log(err)
            navigate('/error')
        })
    }
    , [id])
    console.log('****',object.homeworld);
    const getplanet = (link) => {
        useEffect(()=>{
            axios.get(link)
            .then(response=>{setObject(response.data);
                console.log(response.data)
            })
            .catch(err=>{console.log(err)
                navigate('/error')
            })
        }
        , [])
    }
  return (
    <div>
        <h2 className='mt-5'>{object.name}</h2>
        <br />
        <div className="d-flex align-items-center gap-2">
            <h5>Height:</h5><span>{object.height}</span>
        </div>
        <div className="d-flex align-items-center gap-2">
            <h5>Mass:</h5><span>{object.mass}</span>
        </div>
        <div className="d-flex align-items-center gap-2">
            <h5>Hair Color:</h5><span>{object.hair_color}</span>
        </div>
        <div className="d-flex align-items-center gap-2">
            <h5>Skin Color:</h5><span>{object.skin_color}</span>
        </div>   
        <div className="d-flex align-items-center gap-2">
        <h5>Home world:</h5><a className="pe-auto" style={{cursor: "pointer"}} onClick={()=>{navigate(homeLand.url.replace(baseUrl,""))}} >{homeLand.name}</a>
        </div>  
        
        
    </div>
  )
}

export default SWDisplay