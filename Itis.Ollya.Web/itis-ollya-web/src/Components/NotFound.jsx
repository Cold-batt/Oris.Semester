import React from "react";
import { Link } from "react-router-dom";

function NotFound()
{
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

    <a href="#" class="scrollToTop"><i class="fa-solid fa-angle-up"></i></a>

    
    <section class="log-reg forezero">
        <div class="container">
            <div class="row justify-content-end">
                <div class="col-lg-7 ">
                    <div class="log-reg-inner">
                        <div class="main-thumb mb-5">
                            <img src="assets/images/404.png" />
                        </div>
                        <div class="main-content inloginp">
                            <div class="text-content text-center">
                                <h2>Ops! This Page Not Pound</h2>
                                <p>We are Really Sorry But the Page you Requested is Missing :( </p>
                                <Link to="/" class="default-btn reverse"><span>Back to Home</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default NotFound;