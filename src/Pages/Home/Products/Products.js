import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const Products = () => {
    const [products, setProducts]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div id="packages" > 
            <h4 className="text-primary mb-5 fw-bold fs-2 text-center mt-5">New Coming </h4>
           <div className="container"> 
           {
                products.map(pack=><Product key={pack._id} pack={pack}>

                </Product>)

            }
           </div>
        </div>
    );
};

export default Products;