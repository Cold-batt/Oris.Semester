import React from 'react';
import { Link } from 'react-router-dom';
import { contact } from '../constants/PagePaths';

function Header() {
    return(
        <>
		 <header className="header" id="navbar">
		<div className="header__bottom">
			<div className="container">
				<nav className="navbar navbar-expand-lg">
					<img src="assets/images/logo/logo.png" alt="logo" />
					<button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler--icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
						<div className="navbar-nav mainmenu">
							<ul>
								<li>
									<Link to="/a" >Home</Link>									
								</li>
								<li>
									<a href="#0">Community</a>
									<ul>
										<li><Link to="/Community">Friends Posts</Link></li>
									</ul>
								</li>
								<li>
									<a href="#0">Blogs</a>
									<ul>
										<li><a href="blog.html">My Blogs</a></li>
									</ul>
								</li>
								<li><Link to={contact} href="contact.html">contact</Link></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
    </header> 
		</>
	)
}
        
export default Header;