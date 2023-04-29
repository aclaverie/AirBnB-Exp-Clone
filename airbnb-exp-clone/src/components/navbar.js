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
                    alt="Banner Collage" width="280px"/>
            </div>
            <div>
                <div className="banHeader">
                    <h3>Online Experiences</h3>
                </div>
                <div className="banText">
                    <text>
                        Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
                    </text>
                </div>
            </div>
        </>

    );
}

export default Navbar;