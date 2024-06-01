import React from 'react';
import Header from '../Components/Header';
import { AuthData } from '../Auth/AuthWrapper';
import { Link } from 'react-router-dom';
import { signin } from '../constants/PagePaths';


export default function Main(){
	const user = AuthData(); 

    return(
        <>
        <Header />
            <div className="banner padding-top padding-bottom bg_img"  style={{backgroundImage: `url("../../public/assets/images/banner/bg.jpg")`}} >
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6 col-12">
					<div className="banner__content wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
						<div className="banner__title">
							<h2>Find your Friends</h2>
						</div>
						<div className="banner__form">
							{user.user.isAuthenticated ?
							<Link>В профиль</Link>
							: <Link to={signin}>Зайти?</Link>
							}
							
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-12">
					<div className="banner__thumb banner__thumb--thumb1 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">
						<img src="assets/images/banner/01.jpg" alt="banner" />
					</div>
				</div>
			</div>
		</div>
	</div>
        </>
    )
}
