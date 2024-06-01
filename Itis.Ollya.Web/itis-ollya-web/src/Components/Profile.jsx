import React from 'react'

export default function Profile () {

    return(
        <>
         <div className="banner padding-top padding-bottom bg_img"  style={{backgroundImage: `url("../../public/assets/images/banner/bg.jpg")`}} >                  
            <div className="banner__content wow fadeInUp animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                <div className="col-lg-4 col-5">
                    <a href="index.html" className="backto-home"><i className="fas fa-chevron-left"></i> Back to Home</a>
                </div>
                <div className="banner__title">
                    <h2>Welcome User!</h2>
                    <div className='banner__list'>
                    <label>UserName: </label>
                    </div>
                    <div className='banner__list'>
                    <label>UserName: </label>
                    </div>
                    <div className='banner__list'>
                    <label>UserName: </label>
                    </div>
                    
                    <div className='banner__list'>
                        <label>Name: </label>
                    </div>
                    
                    <div className='banner__list'>
                        <label>Bitrhday: </label>
                        </div>
                    
                    <div className='banner__list'>
                        <label>Sex: </label>
                    </div>
                    
                    <div>			
                    <button type="submit" className="default-btn reverse d-block"><span>Edit</span></button>							
                    </div>
                </div>      
            </div>
        </div>  
                
        </>
    )
}