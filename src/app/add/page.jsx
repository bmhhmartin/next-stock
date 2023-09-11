import React from 'react';
import Header from '@/components/Header';

const page = () => {
    return (
        <div>
            <Header></Header>
            <div className='container mx-auto px-4'>
                <h1 className='py-5 text-3xl text-green-600 font-bold'>Add New Product</h1>
            </div>
        </div>
    );
};

export default page;