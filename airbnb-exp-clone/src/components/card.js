import React from 'react';

function Card() {
    return(
        <div className="cardspace">
            <div className="para">
                <img 
                    src={process.env.PUBLIC_URL + '/static/images/katie-zaferes.png'}  
                    alt="Katie Zaferes Picture" className='img-fluid' />
                <br />
                <img 
                    src={process.env.PUBLIC_URL + '/static/images/star.png'}  
                    alt="Katie Zaferes Picture" width="15px" />
            
                <text>
                    <span className="rateSpace">5.0</span>
                    <span className="shade">(6)</span>
                    <span className="shade">·USA</span>
                </text>
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