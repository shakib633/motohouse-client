import  { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts]=useState([]);

    useEffect(()=>{
        fetch('https://shrouded-sands-75928.herokuapp.com/product/')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[products])

    return [products, setProducts]
        
};

export default useProducts;