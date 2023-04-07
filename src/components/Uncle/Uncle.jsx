import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className='border border-red-600 p-3 m-5 '>
            <h2 >Uncle</h2>
            <p>Grand Pa Money: {money}</p>
            <button onClick={()=>setMoney(money + 1000)} className='bg-red-200 py-2 px-4 rounded-lg'>Click</button>
            <section className='flex justify-center border border-red-600 '>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
                <Cousin>Sabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;