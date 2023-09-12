import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const ProductForm = (props) => {
    const [product, setProduct] = useState({title:"",price:"",description:""})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    const formHandler = e=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`,product)
        .then(serverResponse=>console.log(serverResponse.data))
        .catch(serverError=>console.log(serverError))
        // setProduct({title:"",price:"",description:""})
    }

  return (
    <div>
        <h1>Product Editor</h1>
        <Link to='/'>Home</Link>
        <form onSubmit={formHandler}>
            <div>
                <label htmlFor="">Title:</label>
                <input type="text" onChange={(e)=> setProduct({...product,title:e.target.value})} value={product.title} />
            </div>
            <div>
                <label htmlFor="">Price:</label>
                <input type="number" onChange={(e)=> setProduct({...product,price:e.target.value})} value={product.price} />
            </div>
            <div>
                <label htmlFor="">Description:</label>
                <input type="text" onChange={(e)=> setProduct({...product,description:e.target.value})} value={product.description}/>
            </div>
            <button>Edit</button>
        </form>
    </div>
  )
}

export default ProductForm