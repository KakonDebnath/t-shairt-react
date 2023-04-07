import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({ children, hasFriend, ring }) => {
    return (
        <div className='border border-red-600 p-3 m-3'>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
            {hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;