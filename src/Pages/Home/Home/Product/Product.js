import { Button } from 'bootstrap';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {_id , name, price,quantity, picture, type, supplier, about ,dealer}=product;
    const navigate=useNavigate();
    const updateInventory=(id)=>{
        navigate(`/inventory/${id}`);
    }
    return (
        <div className="border-none shadow-lg p-2  m-3 rounded">
            <p className=" text-center"> <img src={picture}></img>
</p>
            <h5 className="text-center fw-bold">Model: {name}</h5>
            <h5 className="m-2"> Type: {type}</h5>
            <h5 className="m-2">Supplier: {supplier}</h5>
            <h5 className="m-2">Dealer: {dealer}</h5>
            <h6 className="m-2">About:{about}</h6>
            <h4 className=" text-bold text-center text-warning">Quantity: {quantity}</h4>
            <h2 className="text-center text-success fw-bold">{price}</h2>
        </div>
)
};

export default Product;