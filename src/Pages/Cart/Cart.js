import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart = ({data}) => {
    const{_id,price,name,supplier,about,picture,dealer,quantity,type}=data;
    const navigate=useNavigate()
    const navigateToUpdate = (id)=>{
        navigate(`/product/${id}`);
    }
    return (
    
               <div className="border-none shadow-lg rounded-lg m-2 p-2 ">
      <img className="mx-3" src={picture} alt='/'></img>
      <h4 className="text-center mt-2 fw-bold mx-5"> Model : {name}</h4>
      <p className="mx-5">Type :{type}</p>
      <p className=" mx-5">Supplier: {supplier}</p>
      <p className="mx-5">Dealer{dealer}</p>

      <p className=" mx-5 ">About :{about}</p>
      <p className=" mx-5 ">Price :{price}</p>
      
    
      <p className="mx-5">Quantity :{quantity}</p>
      <Button className='mx-5 mb-2 bg-info border shadow-lg fw-bold ' onClick={()=>navigateToUpdate(_id)}>Update</Button>
        </div>
    );
};

export default Cart;