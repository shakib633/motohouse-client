import React from 'react';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import {FcGoogle} from 'react-icons/fc';
import { Button } from 'react-bootstrap';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate=useNavigate();
    const location= useLocation();
    let from =location.state?.from?.pathname || '/'

    if (user){
        navigate(from, {replace: true});
    }
    if(loading){
        return <Loading></Loading>
    }
    let socialError='';
    if(error){
        socialError=<p className="text-danger fw-bold">Error: User Decline  PopUp</p>
    }
    
    return (
      <div>
           <div className="d-flex align-items-center"> 
           <div style={{height:"2px", backgroundColor:"#208454"}} className="w-50">   </div>
           <p className="text-success">or</p>
           <div style={{height:"2px", backgroundColor:"#208454"}} className=" w-50">   </div>
 </div>
 {socialError}
 <div className="d-flex m-2"> 
<p className="mx-5"> <Button className="bg-white mx-2 text-primary fw-bold"  onClick={()=> signInWithGoogle()}><FcGoogle></FcGoogle> Continue with Google</Button></p>
 </div>
      </div>
    );
};

export default SocialLogin;