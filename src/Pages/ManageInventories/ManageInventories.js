import React from 'react';
import { Link } from 'react-router-dom';
import Allproducts from '../AllProducts/Allproducts';
import useProducts from './../../hooks/useProducts/useProducts';

import css from './ManageInventories.css'

const ManageInventories = () => {
    const [products, setProducts] =useProducts();

    return (
        <div className="background">
            <p className="text-center fs-2">All Products</p>
            <div className="all-product-container ">
                {
                    products.map(product=><Allproducts key={product._id} product={product} setProducts={setProducts}></Allproducts>)
                }
            </div>
            <p className='text-center'> 
            <Link to='/additem' className='btn btn-primary mt-3 fw-bold'>Add Item</Link>
 
            </p>
            
        </div>
    );
};

export default ManageInventories;