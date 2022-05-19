import React from 'react';
import { Link } from 'react-router-dom';
import Allproducts from '../AllProducts/Allproducts';
import useProducts from './../../hooks/useProducts/useProducts';

import css from './ManageInventories.css'

const ManageInventories = () => {
    const [products, setProducts] =useProducts();

    return (
        <div>
            <h2>All Products</h2>
            <div className="all-product-container">
                {
                    products.map(product=><Allproducts key={product._id} product={product} setProducts={setProducts}></Allproducts>)
                }
            </div>
            <p className='text-center'> 
            <Link to='/additem' className='btn btn-primary'>Add Item</Link>
 
            </p>
            
        </div>
    );
};

export default ManageInventories;