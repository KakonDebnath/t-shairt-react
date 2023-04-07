import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';

const Cart = ({ cart, removedFromCartHandler }) => {
    return (
        <div>
            <h2 className='text-center py-3 bg-red-300 rounded mb-2'>
                Order Summery: {cart.length}
            </h2>
            {
                cart.map((tshirt) =>
                    <p 
                    key={tshirt._id} 
                    className='flex justify-between bg-red-200 p-2 mb-1 rounded'>   {tshirt.name}
                    <TrashIcon className='h-6 w-6' onClick={()=>removedFromCartHandler(tshirt._id)}></TrashIcon> </p>)
            }
        </div>
    );
};

export default Cart;