import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';
import css from './SignIn.css'

const SignIn = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const [signInWithEmailAndPassword, user,loading,error]=useSignInWithEmailAndPassword(auth)
    const[sendPasswordResetEmail,sending]=useSendPasswordResetEmail(auth);
    
    const handleSignIN=e=>{
        e.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        signInWithEmailAndPassword(email,password);

    }
    
     const navigate=useNavigate();
     const location=useLocation();
     let from =location.state?.from?.pathname || "/";
     if(user){
        navigate(from, {replace: true});
     }
     if(loading){
       return <Loading></Loading>
     }
     let signInError='';
    if (error) {
      signInError = <p className='text-danger fs-5'>{"Error : Email or Password is Wrong "}</p>
    }
    
    const resetPassword= async ()=>{
      const emailAddress=emailRef.current.value;
      if(emailAddress){
        await sendPasswordResetEmail(emailAddress);
        toast.info('verification email sent',{
          position: 'top-center'
        })
      }
      else{
        toast.error('Enter your email address',{
          position: 'top-center'
        });
      };

    };

    if (sending){
      return <Loading></Loading>
    }

    return (
        <div className=" body">
       <p className="text-center mb=2 text-success mb-3 fw-bold fs-3">please sign in 🏍️ </p>
        <div className="container"> 

        <div className="signIn-img m-3">
       <img src="https://i.ibb.co/4RR5gSZ/sign-In-removebg-preview-2.jpg" alt="sign-In-removebg-preview-2" border="0"></img>  
     
        </div>
        <div className="mt-5 ">
     
     <Form onSubmit={handleSignIN}>
       <Form.Group className="  mb-3" controlId="formBasicEmail">
         <Form.Label>Email Address</Form.Label>
         <Form.Control className=" shadow-lg "ref={emailRef} type="email" placeholder="Enter email" required />
       </Form.Group>

       <Form.Group className=" mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control  className=" shadow" ref={passwordRef} type="password" placeholder="Password" required />
       </Form.Group>
       
       {signInError}
       <Button  className=" btn btn-primary fw-bold shadow" variant="primary" type="submit">
         Sign In ➧
       </Button>
       <ToastContainer/>
       </Form>
       

       <p className="mt-3"> Have No Account ? <Link className="text-decoration-none fw-bold" to="/signup" > Sign UP</Link></p>
       <p>Forget Your Password ? <Button variant='link' className="text-decoration-none"><span onClick={resetPassword}></span>Reset Password</Button> </p>
       </div>
      

     
     <SocialLogin></SocialLogin>


     

        </div>

    </div>

    );
};

export default SignIn;