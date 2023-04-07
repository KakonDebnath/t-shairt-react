import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Anti from '../Anti/Anti';
export const RingContext = createContext("Gold");
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const [money, setMoney] = useState(0);
    const ring = "Diamond";
    return (
        <div className='border border-red-600 text-center p-5'>
            <h2>Grand Pa</h2>
            <p>Grand Pa Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='Golden Ring'>
                    <section className='flex justify-center gap-1'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Anti ring={ring}></Anti>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;