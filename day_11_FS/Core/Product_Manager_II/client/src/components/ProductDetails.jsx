import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ProductDetails = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
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
        </div>
    )
}


export default ProductDetails