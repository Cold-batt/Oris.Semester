import {useReducer} from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import {main, registration} from "../constants/PagePaths"
import React from 'react';
import { AuthData } from '../Auth/AuthWrapper';

function SignIn() {
    const [signInData, setSignInData] = useReducer((signInData, newItem) => { return ({...signInData, ...newItem})},
    {    email: "",
        password: "",
    });
    const {user, login} = AuthData();
    const navigate = useNavigate();
    
    async function onFormSubmit(event) {
        const errors = validateLogin(signInData.email, signInData.password);
        if(Object.keys(errors).length == 0)
            {
                await login(signInData.email, signInData.password);
                navigate(main);
            }
    }

    function validateLogin(email, password) {
        let errors = {};
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }
    
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
    
        return errors;
    }

    return(
    <>
        <a href="#" className="scrollToTop"><i className="fa-solid fa-angle-up"></i></a>


        <section className="log-reg">
            <div className="top-menu-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-7">
                            <div className="logo">
                                <Link to={main}><img src="assets/images/logo/logo.png" alt="logo" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-5">
                            <Link to={main} className="backto-home"><h1 className="title"> Back to Home</h1></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="log-reg-inner">
                            <div className="section-header inloginp">
                                <h2 className="title">Welcome to Ollya</h2>
                            </div>
                            <div className="main-content inloginp">
                                    <div className="form-group">
                                        <label >Your Address</label>
                                        <input 
                                        value={signInData.email}
                                        onChange={(e) => setSignInData({email: e.target.value})}
                                          type="email" className="my-form-control" placeholder="Enter Your Email" />
                                    </div>
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input
                                         value={signInData.password}
                                          onChange={(e) => setSignInData({password: e.target.value})}
                                           type="password" className="my-form-control" placeholder="Enter Your Password" />
                                    </div>
                                    <div className="text-center">
                                        <button onClick={onFormSubmit} type="submit" className="default-btn"><span>Sign IN</span></button>
                                    </div>
                                    <p class="or-signup"> Don't have an account? <Link to={registration} >Sign up here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default SignIn;
