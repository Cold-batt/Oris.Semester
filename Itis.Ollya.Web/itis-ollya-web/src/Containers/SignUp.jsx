import React, { useReducer} from 'react'
import { Link } from 'react-router-dom';
import { main } from '../constants/PagePaths';
import { AuthData } from '../Auth/AuthWrapper';
import { useNavigate } from 'react-router-dom';


function SignUp(){

    const [registerData, setRegisterData] = useReducer((registerData, newItem) => { return ({...registerData, ...newItem})},
    {    email: "",
        password: "",
        repeatedPasssword: "",
        male: true

    });
    const {user, login} = AuthData();
    const navigate = useNavigate();
    
    async function onFormSubmit(event) {
        const errors = validateRegister(signInData.email, signInData.password);
        if(Object.keys(errors).length == 0)
            {
                await login(signInData.email, signInData.password);
                navigate(main);
            }
    }

    function validateRegister(email, password) {
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
            <section className="log-reg">
            <div className="top-menu-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-7">
                            <div className="logo">
                                <a href="index.html"><img src="assets/images/logo/logo.png" alt="logo" /></a>
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
                            <div className="section-header">
                                <h2 className="title">Welcome to Ollya </h2>
                                <p>Let's create your profile! Just fill in the fields below, and we’ll get a new account. </p>
                            </div>
                            <div className="main-content">
                                
                                    <h4 className="content-title">Acount Details</h4>
                                    <div className="form-group">
                                        <label>Username*</label>
                                        <input type="text" className="my-form-control" placeholder="Enter Your Usewrname" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address*</label>
                                        <input type="email" className="my-form-control" placeholder="Enter Your Email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password*</label>
                                        <input type="text" className="my-form-control" placeholder="Enter Your Password"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Password*</label>
                                        <input  type="text" className="my-form-control" placeholder="Enter Your Password"/>
                                    </div>
                                    <h4 className="content-title mt-5">Profile Details</h4>
                                    <div className="form-group">
                                        <label>Name*</label>
                                        <input type="text" className="my-form-control" placeholder="Enter Your Full Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Birthday*</label>
                                        <input type="date" className="my-form-control"/>
                                    </div>
                                    <div className="form-group">
                                    <label>I am a*</label>
                                    <div className="banner__inputlist">
                                        <div className="s-input me-3">
                                            <input type="radio" name="gender1" id="males1" /><label htmlFor="males1"> Man</label>
                                        </div>
                                        <div className="s-input">
                                            <input
                                            onChange={(e) => setSignInData({Mal: e.target.value})}
                                             type="radio" name="gender1" id="females1" /><label htmlFor="females1">Woman</label>
                                        </div>
                                    </div>
                                     </div>
                                    <button onClick={onFormSubmit} className="default-btn reverse" data-toggle="modal" data-target="#email-confirm"><span>Create Your Profile</span></button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default SignUp;
