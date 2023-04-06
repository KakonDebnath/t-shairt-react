import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData()
    return (
        <div>
            <h1 className='bg-red-200'>This Is Home Compo total tshirt is : {tShirts.length}</h1>
        </div>
    );
};

export default Home;