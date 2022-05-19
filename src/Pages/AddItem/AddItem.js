import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddItem = () => {
    const{register,handleSubmit}= useForm();
    const onSubmit = (data) => {
    const url=`https://shrouded-sands-75928.herokuapp.com/product` 
    fetch(url,{
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })  
    .then(res => res.json())
    .then(result=>{console.log(result)
    })  
    
    toast.info('Successfully item Added',{
        position:'top-center'
    });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name"{...register("name")}></input>
    <input value="Add Item" type="submit"></input>
    <ToastContainer />
    </form>
        </div>
    );
};

export default AddItem;