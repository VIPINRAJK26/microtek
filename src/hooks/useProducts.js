import { getProducts } from "../api/products";
import { useEffect, useState } from "react";


const useProducts = () => {
    const [products,setProducts] =useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        getProducts()
        .then(setProducts)
        .catch((err)=>{
            setError(err);
        })
        .finally(()=> {
            setLoading(false);
        })
    },[]);

    return {products,loading, error};
}

export default useProducts;