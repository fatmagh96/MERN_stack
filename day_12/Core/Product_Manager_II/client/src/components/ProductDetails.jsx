import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = ({deleteElement}) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <h1>{product.title}</h1>
            <h4>Price: ${product.price}</h4>
            <h4>description: {product.description}</h4>
            <button onClick={()=>{
                deleteElement(id);
                navigate('/')}}>delete</button>
        </div>
    )
}


export default ProductDetails