import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddItem = () => {
    const{register,handleSubmit}= useForm();
    const onSubmit = (data) => {
    const url=`https://shrouded-sands-75928.herokuapp.com/product/` 
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
      <input type="text" placeholder="photo URL"{...register("picture")}></input>
      <input type="text" placeholder="Type :"{...register("type")}></input>
      <input type="text" placeholder="Model :"{...register("model")}></input>
      <input type="text" placeholder="Supplier :"{...register("supplier")}></input>
      <input type="text" placeholder="Dealer :"{...register("dealer")}></input>
      <input type="text" placeholder="About :"{...register("about")}></input>
      <input type="number" placeholder="Price :"{...register("price")}></input>
      <input type="number" placeholder="Quantity :"{...register("quantity")}></input>
    <input value="Add Item" type="submit"></input>
    <ToastContainer />
    </form>
        </div>
    );
};

export default AddItem;