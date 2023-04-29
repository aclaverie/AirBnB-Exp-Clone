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
                    alt="Airbnb Logo" width="350"/>
            </div>
            <div>
                <div className="banHeader">
                    <h3><b>Online Experiences</b></h3>
                </div>
                <div className="banText">
                    <text><b>
                        Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
                    </b></text>
                </div>
            </div>
        </>

    );
}

export default Navbar;