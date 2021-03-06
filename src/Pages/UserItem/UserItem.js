import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const UserItem = ({product}) => {
    const{name,price,supplier ,quantity} = product;
    const[user,loading]=useAuthState(auth);
    let userEmail = user?.email;
    if(loading) {
        <Loading></Loading>
    }
    const handleDeletBtn=id=>{
        const proceed=window.confirm('Are you sure you want to delete')
        if(proceed) {
            const url=`https://shrouded-sands-75928.herokuapp.com/product/${id}`
            fetch(url,{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=> console.log(data))
        }
    }
   
        return (
            <div>
                <p>name:{name}</p>
                <p>price:{price}</p>
                <p>suplier:{supplier}</p>
                <p>{quantity}</p>
                <button onClick={()=> handleDeletBtn(product._id)}>Delete</button>
            </div>
        );
    
   
};

export default UserItem;