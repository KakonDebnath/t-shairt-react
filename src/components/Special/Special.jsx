import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const specialRing = useContext(RingContext);
    const [money] = useContext(MoneyContext); 
    return (
        <div>
            <h2>Special</h2>
            <p><small>Ring: {ring}</small></p>
            <p><small>Context: {specialRing}</small></p>
            <p>{money}</p>
        </div>
    );
};

export default Special;