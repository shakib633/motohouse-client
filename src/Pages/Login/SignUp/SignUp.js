import React, { useRef } from 'react';
import './SignUp.css';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const SignUp = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSignUp = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);

    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();
    if (user) {
        navigate('/');

    }

    if (loading) {
        return <Loading></Loading>
    }

    let signUpError = '';
    if (error) {
        signUpError = <p className='text-danger'> <span className='fw-bold'>Error:</span> The email address you have entered is already registered. Please try another email to register'</p>
    }

    return (
        <section className='sign-up'>
            
            <div className=''>
            <h5 className='text-center fw-bold'>Sign Up to Fresh Fruit Warehouse</h5>

                <div className='d-flex signUp-container'>
                    <div> 
                    <img src="https://i.ibb.co/n06q99z/signup.png" alt="signup" border="0"></img>
                    </div>
                    <div className='sign-up-form-container'>

                        <Form onSubmit={handleSignUp}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control ref={nameRef} type="name" placeholder="Enter your name" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control ref={emailRef} type="email" placeholder="Enter your email address" required />
                            </Form.Group>
                            {signUpError}

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={passwordRef} type="password" placeholder="Enter your password" required />
                            </Form.Group>

                            <Button variant="success" type="submit">
                                Sign Up
                            </Button>
                            <p className='mt-3'>Already have an account? <Link className='text-decoration-none' to='/signin'>Please Sign </Link></p>
                        </Form>

                        <SocialLogin></SocialLogin>

                    </div>
                    
                </div>
               
            </div>



        </section>
    );
};

export default SignUp;