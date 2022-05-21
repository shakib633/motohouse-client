import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const InventoryUpdate = () => {
    const{id}=useParams();
    const [product, setProduct]=useState({});

    useEffect(()=>{
        const url =`http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }, [product]);

    const addQuantity = (event) =>{
        event.preventDefault();
        const oldQuantity = event.target.quantity.value;
        const quantity= parseInt(oldQuantity) + parseInt(product.quantity);
        

        const url =`http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({quantity})
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);
        })

        toast.info('Successfully Stock',{
            position: 'top-center'
        });
        event.target.reset();
    }

    //delivering
    const handleDeliverBtn=()=>{
        const oldQuantity=product.quantity;
        const quantity=parseInt(oldQuantity) - 1;
        const url=`http://localhost:5000/product/${id}`;
        fetch(url,{
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({quantity})
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
        })

        toast.info('Successfully delivered',{
            position: 'top-center'
        });
    }
    return (
        <div className="mx-auto">

            <div>
                <img src={product.picture}></img>
                <p> Model: {product.name}</p>
                <p>Type: {product.type}</p>
                <p> Supplier: {product.supplier}</p>
                <p> Dealer: {product.dealer}</p>
                <p> About: {product.about}</p>
                <p> price: {product.price}</p>
                <p> Quantity : {product.quantity}</p>
                <p className="text-center"> 
               
           <button className="btn btn-primary center mb-2"onClick={()=> handleDeliverBtn()}>Delivered</button>
           </p>
            <form onSubmit={addQuantity}>
                <input className=" d-block mx-auto" type="number" name="quantity" id="" required placeholder="Quantity" />
                <br></br>
                <input className="mx-auto d-block btn btn-info shadow fw-bold text-white" type="submit" value="Restock" />
                <ToastContainer></ToastContainer>
            </form> 
           
            </div>
           <Link to='/manageinventories' className=' text-center text-decoration-none d-block mx-auto'>Manage Inventory</Link>
        </div>
    );
};

export default InventoryUpdate;