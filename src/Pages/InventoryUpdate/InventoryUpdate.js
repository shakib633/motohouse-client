import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const InventoryUpdate = () => {
    const{id}=useParams();
    const [product, setProduct]=useState({})

    useEffect(()=>{
        const url =`http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);

    const addQuantity = e =>{
        e.preventDefault();
        const previousQuantity = e.target.quantity.value;
        const quantity= parseInt(previousQuantity)+parseInt(product.quantity)

        const url =`http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({quantity})
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
        })

        toast.info('Successfully',{
            position: 'top-center'
        });
        e.target.reset();
    }

    //delivering
    const handleDeliverBtn=()=>{
        const previousQuantity=product.quantity;
        const quantity=parseInt(previousQuantity) - 1;
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
        <div>

            <div><p> {product.name}</p>
            <p>
                {product.supplier}
            </p>
            <p>Quantity: {product.quantity}</p>
            <button onClick={()=> handleDeliverBtn()}>Delivered</button>
            <form onSubmit={addQuantity}>
                <input type="number" name="quantity" id="" required placeholder="quantity" />
                <input type="submit" value="Restock" />
                <ToastContainer></ToastContainer>
            </form>
            </div>
           <Link to='/manageinventories' className='btn btn-primary text-center'>Manage Inventory</Link>
        </div>
    );
};

export default InventoryUpdate;