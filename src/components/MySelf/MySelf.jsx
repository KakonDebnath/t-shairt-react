import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ring}) => {
    return (
        <div className='border border-red-600 p-3 m-3'>
            <h2>My Self</h2>
            <Special ring={ring}></Special>
        </div>
    );
};

export default MySelf;