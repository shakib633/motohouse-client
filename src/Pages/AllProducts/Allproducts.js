import { Button } from 'bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Allproducts = ({product}) => {
    const{_id,price,name,about,picture,dealer,quantity,type}=product;
    const navigate=useNavigate()
    const navigateToUpdate = (id)=>{
        navigate(`/product/${id}`);
    }

    const handleProduct=product_id=>{
        const proceed=window.confirm("Are You sure?");
        if (proceed){
            const url =`http://localhost:5000/product/${product_id}`;
            fetch(url,{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
        }
    }
    return (
        <div className="border-none shadow-lg rounded-lg m-2 p-2 ">
    
      <img className="mx-3" src={picture} alt='/'></img>
      <h4 className="text-center mt-2 fw-bold mx-5">{name}</h4>
      <p className="text-center text-primary">{type}</p>

      <p className="fs-2 mx-5 fw-bold text-danger">{price}</p>
      <p className="mx-5"><small className='dot'>⚫</small>{dealer}</p>
      <p className="mx-5"><small className='dot'>⚫ Quantity: </small>{quantity}</p>
      <p className="mx-5"><small className='dot'>⚫</small>{about}</p>
      <button className='mx-5 mb-2 fw-bold rounded' onClick={()=>handleProduct(product._id)}>Delete</button>
      <button className='mx-5 mb-2 fw-bold rounded' onClick={()=>navigateToUpdate(_id)}>Update</button>
        </div>
    );
};

export default Allproducts;