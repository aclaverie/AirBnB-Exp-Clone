import React from 'react';
import Hero from './hero';
import Card from './card';
import cardData from '../cardInfo';

function Backspace() {
    return(
        <div className="bkspace">
            <Hero />
            <Card cardData = {cardData}/>
        </div>
    );
}

export default Backspace;