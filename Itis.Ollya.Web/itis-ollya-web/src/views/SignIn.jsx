import {useState} from "react"
import {useNavigate} from "react-router-dom";
import {processSignIn} from "./SignIn.js";
import {main} from "../constants/PagePaths.js";

export default function SignIn() {
    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
    });

    let errorText = "";
    const navigate = useNavigate();
    const [textForAlert, setTextForAlert] = useState("")
    async function onFormSubmit(event) {
        event.preventDefault();
        errorText = await processSignIn(signInData)
        if (errorText === ""){
            navigate(main)
        }
        else{
            setTextForAlert(errorText)
        }
    }

    return(
        <>
            <div class="preloader">
                <div class="preloader-inner">
                    <div class="preloader-icon">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <!-- preloader ending here -->

            <!-- scrollToTop start here -->
            <a href="#" class="scrollToTop"><i class="fa-solid fa-angle-up"></i></a>
            <!-- scrollToTop ending here -->


            <!-- ================> login section start here <================== -->
            <section class="log-reg">
                <div class="top-menu-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-7">
                                <div class="logo">
                                    <a href="index.html"><img src="assets/images/logo/logo.png" alt="logo"/></a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-5">
                                <a href="index.html" class="backto-home"><i class="fas fa-chevron-left"></i> Back to
                                    Home</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="image image-log"></div>
                        <div class="col-lg-7">
                            <div class="log-reg-inner">
                                <div class="section-header inloginp">
                                    <h2 class="title">Welcome to Ollya</h2>
                                </div>
                                <div class="main-content inloginp">
                                    <form action="#">
                                        <div class="form-group">
                                            <label>Your Address</label>
                                            <input type="email" class="my-form-control" placeholder="Enter Your Email" onChange={
                                                (event) => {
                                                    setSignInData({...setSignInData, email: event.target.value})
                                                }
                                            }/>
                                        </div>
                                        <div class="form-group">
                                            <label>Password</label>
                                            <input type="text" class="my-form-control"
                                                   placeholder="Enter Your Password" onChange={
                                                (event) => {
                                                    setSignInData({...setSignInData, password: event.target.value})
                                                }
                                            }/>
                                        </div>
                                        <div class="text-center">
                                            <button onClick={onFormSubmit} type="button" class="default-btn"><span>Sign IN</span></button>
                                        </div>
                                        <div class="or-content">
                                            <p class="or-signup"> Don't have an account? <a href="register.html">Sign up
                                                here</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ================> login section end here <================== -->
            <!-- All Needed JS -->
            <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
            <script src="assets/js/vendor/modernizr-3.11.2.min.js"></script>
            <script src="assets/js/isotope.pkgd.min.js"></script>
            <script src="assets/js/swiper.min.js"></script>
            <!-- <script src="assets/js/all.min.js"></script> -->
            <script src="assets/js/wow.js"></script>
            <script src="assets/js/counterup.js"></script>
            <script src="assets/js/jquery.countdown.min.js"></script>
            <script src="assets/js/lightcase.js"></script>
            <script src="assets/js/waypoints.min.js"></script>
            <script src="assets/js/vendor/bootstrap.bundle.min.js"></script>
            <script src="assets/js/plugins.js"></script>
            <script src="assets/js/main.js"></script>
        </>
    )
}
