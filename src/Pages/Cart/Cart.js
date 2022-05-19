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
      <p className="text-center text-primary">{type}</p>
      <img className="mx-3" src={picture} alt='/'></img>
      <h4 className="text-center mt-2 fw-bold mx-5">{name}</h4>
      <p className="mx-5"><small className='dot '>⚫</small>{type}</p>
      <p className="fs-2 mx-5 fw-bold text-danger">{supplier}</p>
      <p className="mx-5"><small className='dot'>⚫</small>{dealer}</p>

      <p className="fs-2 mx-5 fw-bold text-danger">{price}</p>
      
      
      <p className="mx-5"><small className='dot'>⚫</small>{about}</p>
      <Button className='mx-5 mb-2 fw-bold rounded' onClick={()=>navigateToUpdate(_id)}>Update</Button>
        </div>
    );
};

export default Cart;