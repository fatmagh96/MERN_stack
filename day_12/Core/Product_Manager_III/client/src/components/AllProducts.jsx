import axios from 'axios'
import { Link } from 'react-router-dom'
import React, {useState, useEffect} from 'react'


const AllProducts = (props) => {
    const [products, setProducts] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
        .then(serverResponse => {
          console.log(serverResponse.data)
          setProducts(serverResponse.data)
        })
        .catch(serverError => console.log(serverError))
    },[])
    const deleteElement = (id) =>{
      axios.delete('http://localhost:8000/api/products/'+id)
        .then(serverResponse => {
          console.log(serverResponse.data)
          setProducts(products.filter(product => product._id != id));
        })
        .catch(serverError => console.log(serverError))
    }
  return (
    <div>
        <h1>AllProducts</h1>
        {products.map((product)=><h3 key={product._id}>
            <Link to={`/${product._id}` }>{product.title} </Link>
            <Link to={`/${product._id}/edit`} ><button>edit</button></Link>
            <button onClick={()=>deleteElement(product._id)}>delete</button>
        </h3>)}
    </div>
  )
}

export default AllProducts