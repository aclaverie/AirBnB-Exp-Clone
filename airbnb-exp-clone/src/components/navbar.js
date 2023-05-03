import React from 'react';

function Navbar() {
    return(
        <>
            <div className="navArea">
                <img 
                    
                    src={process.env.PUBLIC_URL + '/static/images/Airbnb_logo.png'}  
                    alt="Airbnb Logo" width="48"/>
            </div>
            <div className="banner">
                <img 
                    src={process.env.PUBLIC_URL + '/static/images/airimg3.png'}  
                    alt="Banner Collage" className='img-fluid' />
            </div>
            <div className="head-text">
                <div className="banHeader">
                    <div>Online Experiences</div>
                </div>
                <div className="banText">
                    <div>
                        Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
                    </div>
                </div>
            </div>
        </>

    );
}

export default Navbar;