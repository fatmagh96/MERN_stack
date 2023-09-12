import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = (props) => {
    const [product, setProduct] = useState({title:"",price:"",description:""})
    const formHandler = e=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/products',product)
        .then(serverResponse=>console.log(serverResponse.data))
        .catch(serverError=>console.log(serverError))
        setProduct({title:"",price:"",description:""})
    }
  return (
    <div>
        <h1>Product Manager</h1>
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
            <button>Create</button>
        </form>
    </div>
  )
}

export default ProductForm