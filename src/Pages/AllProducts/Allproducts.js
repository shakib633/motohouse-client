import { Button } from 'bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Allproducts = ({product}) => {
    const{_id,price,name,about,picture,dealer,quantity,type, supplier}=product;
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
      <h4 className="text-center mt-2 fw-bold mx-5"> Model : {name}</h4>
      <p className="mx-5">Type :{type}</p>
      <p className=" mx-5">Supplier: {supplier}</p>
      <p className="mx-5">Dealer{dealer}</p>

      <p className=" mx-5 ">About :{about}</p>
      <p className=" mx-5 ">Price :{price}</p>
      
      
      <p className="mx-5">Quantity :{quantity}</p>
      <button className='mx-5 mb-2 fw-bold rounded' onClick={()=>handleProduct(product._id)}>Delete</button>
      <button className='mx-5 mb-2 fw-bold rounded' onClick={()=>navigateToUpdate(_id)}>Update</button>
        </div>
    );
};

export default Allproducts;