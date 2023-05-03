import React from 'react';

function Card({cardData}) {
    
    //solve the key warning when using .map in React
    
    const cards = cardData.map((item) =>  {
        return(
            <div className="para" key={item.id}>
                <img 
                    src={process.env.PUBLIC_URL + '/static/images/'+ item.img}  
                    alt="Katie Zaferes" className='img-fluid rounded' />
                <br />
                <img 
                    src={process.env.PUBLIC_URL + '/static/images/star.png'}  
                    alt="Katie Zaferes" width="15px" />
            
                <span>
                    <span className="rateSpace">{item.rate}</span>
                    <span className="shade">({item.reviewCount}) · </span>
                    <span className="shade">{item.country}</span>
                </span>
                <br />
                <div className="title">{ item.title }</div>
                <span className="price">From ${ item.price }</span>
                <span className="person">/Person</span>
            </div>
        )
    })

    return(
        <div className="cardspace">{cards}</div>
    );
}

export default Card;