import React, {  useState } from 'react';
import * as firebase from 'firebase/app';
import firebaseConfig from './firebase.config';
import useAuth from '../Hook_Context/useAuth';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './Login.css';
import Navbar from '../Home/Nav/Navbar';
import Footer from '../Home/Footer/Footer';
import { TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [loggedIn, setLoggedIn] = useAuth();
    

    firebase.initializeApp(firebaseConfig);
    const auth = getAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () =>{
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {
                name: displayName,
                email: email,
                photo: photoURL,
                
            }
            setLoggedIn(signedInUser);
            navigate(from, { replace : true });
            
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            
        });
    }

    return (
        <>
            <Navbar></Navbar>
            <div className='container'>
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <div className="sign-in">
                            <h2 className='brandC'>login</h2>
                            <TextField
                            className="login-field"
                            label=" Name"
                            variant="outlined"
                            size="small"
                            />
                            <TextField
                            className="login-field"
                            label=" Email"
                            variant="outlined"
                            size="small"
                            />
                            <button className="btn bgC ">SUBMIT</button>
                            <div className='google-sign' onClick={handleGoogleSignIn}>Google</div>
                            
                        </div>

                    </div>
                    <div className="col-md-6">
                        <img className='login-img' src={require("../assets/images/login.png")} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;