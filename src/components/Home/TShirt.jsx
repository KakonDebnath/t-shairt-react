import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const TShirt = ({ tShirts, addToCartHandler }) => {
    // console.log(tShirts);
    const { _id, name, price, picture } = tShirts;
    return (
        <div className='relative border border-lime-400 rounded p-4 flex justify-center text-center transition-all duration-300 hover:shadow-xl  bottom-0 hover:bottom-2'>
            <div className='space-y-3 '>
                <img src={picture} alt={name} className="h-60" />

                <h3>{name}</h3>
                <h4>Price: {price}</h4>
                <button 
                className='bg-lime-300 p-3 rounded text-center flex mx-auto'
                onClick={()=>addToCartHandler(tShirts)}
                >Add To Cart <ShoppingCartIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
};

export default TShirt;