import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import css from './SignUp.css'

const SignUp = () => {
      const nameRef=useRef('');
      const emailRef=useRef('');
      const passwordRef=useRef('');

      const handleSignUp=e=>{
        e.preventDefault();
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        createUserWithEmailAndPassword(email,password);
      }

      const[
        createUserWithEmailAndPassword,
        user, loading,error,
          ]=useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
          const navigate=useNavigate()
          if(user){
            navigate('/')
          }
          if(loading){
            return <Loading></Loading>
          }
          let signUpError='';
          if(error){
            signUpError=<p> the email already regestered.</p>
          }
      return (
        <div className="body-container text-center mx-auto m-3">
          <p className="text-center mt-2 fs-3 fw-bold text-success "> Sign up Here</p>
          <div className="signup body"> 
            <div className="signIn-img m-3">
       <img src="https://i.ibb.co/4RR5gSZ/sign-In-removebg-preview-2.jpg" alt="sign-In-removebg-preview-2" border="0"></img>  
     
        </div>
        <div className="m-3"> 
          <Form  className="text-center"onSubmit={handleSignUp}>
          <Form.Group className="" controlId="formBasicName">
          <Form.Label></Form.Label>
          <Form.Control className=" shadow-lg "ref={nameRef} type="name" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group className="  mb-3" controlId="formBasicEmail">
         <Form.Label></Form.Label>
         <Form.Control className=" shadow-lg "ref={emailRef} type="email" placeholder="Enter email" required />
       </Form.Group>
        {signUpError}
        <Form.Group  controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control className=" shadow-lg" ref={passwordRef} type="password" placeholder="Enter password" required />
        </Form.Group>
          
          </Form>
          <p className="text-center mt-3"> 
          <Button className="fw-bold text-light shadow-lg mb-3" variant="info" type="submit">Sign Up</Button>
           <p>Have Already An account? 
              <Link className="m-2 text-decoration-none" to="/signin">please sign in</Link></p>
          </p>
          </div>
            
          </div>
          
          <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;