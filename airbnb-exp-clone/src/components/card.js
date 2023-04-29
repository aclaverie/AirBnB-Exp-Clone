import React from 'react';

function Card() {
    return(
        <div className="cardspace">
            <img 
                src={process.env.PUBLIC_URL + '/static/images/katie-zaferes.png'}  
                alt="Katie Zaferes Picture" width="160px"/>
            <div className="para">
                <img 
                    src={process.env.PUBLIC_URL + '/static/images/star.png'}  
                    alt="Katie Zaferes Picture" width="16px"  />
            
                <text><span className="rateSpace">5.0</span> <span className="shade">(6)·USA</span></text>
                <br />
                <text className="title">Life lessons with Katie Zaferes</text>
                <br />
                <text className="price">From $136</text>
                <text className="person">/Person</text>
            </div>
        </div>

    );
}

export default Card;