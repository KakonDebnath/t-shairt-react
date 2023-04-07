import React from 'react';
import Cousin from '../Cousin/Cousin';

const Anti = ({ring}) => {
    return (
        <div className='border border-red-600 p-3 m-5 '>
            <h2>Anti</h2>
            <section className='flex justify-center border border-red-600 '>
                <Cousin>Abir</Cousin>
                <Cousin>Sabir </Cousin>
                <Cousin hasFriend={true} ring={ring}>Jabir</Cousin>
            </section>
        </div>
    );
};

export default Anti;