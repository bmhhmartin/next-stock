import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import { getProductDetails } from '@/libs/getProductDetails';

const page = async({params}) => {

    const id = params.id;
    const details = await getProductDetails(id);



    return (
        <div>
            <Header></Header>
            <div className='px-4 container mx-auto'>
                <h1 className='py-5 text-3xl text-green-600 font-bold dark:text-green-100'>Product Details</h1>
                <div className='grid grid-cols-2 gap-4'>
                    <figure>
                        <Image src={details.product_image} height={500} width={800} layout='responsive' alt='Product'></Image>
                    </figure>
                    <div className='bg-slate-500 p-5'>
                        <h1 className='text-3xl pb-2'>Name: {details.product_name}</h1>
                        <h2 className='text-2xl pb-2'>Price: {details.product_price} $</h2>
                        <h3 className='text-xl pb-2'>Description: {details.product_details}</h3>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;