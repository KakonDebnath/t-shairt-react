import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from './Tshirt';
import Cart from '../Cart/Cart';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);
    // Add To Cart Handler
    const addToCartHandler = (tshirt)=>{
        const exists = cart.find((ts)=>ts._id === tshirt._id);
        if(exists){
            toast.error("All Ready Added");
        }else{

            const newCart = [...cart, tshirt]
            setCart(newCart);
        }
    }
    // Removed Form Cart 
    const removedFromCartHandler = (id)=>{
        const remaining = cart.filter((item)=>item._id !== id);
        setCart(remaining);
    }
    return (
        <div className='grid grid-cols-4 gap-4 p-4'>
            <div className='col-span-3 grid grid-cols-3 gap-4' >
                {
                    tShirts.map((tShirts) => <TShirt
                        key={tShirts._id}
                        tShirts={tShirts}
                        addToCartHandler ={addToCartHandler}
                    ></TShirt>)
                }
            </div>
            <div>
                <Cart cart={cart} removedFromCartHandler={removedFromCartHandler}></Cart>
            </div>
        </div>
    );
};

export default Home;