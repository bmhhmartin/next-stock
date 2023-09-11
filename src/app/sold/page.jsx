
import React from 'react';
import Header from '@/components/Header';
import { getAllProducts } from '@/libs/getAllProducts';
import Image from 'next/image';
import RestoreProduct from './RestoreProduct';

const Page = async () => {
        
    const data = await getAllProducts();

    


    return (
        <>
            <Header></Header>
            <div className='px-4'>
                <h1 className='py-5 text-3xl text-red-600 font-bold dark:text-red-300'>Already Sold</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className='border border-red-600'>
                            <tr className='border border-red-600 bg-red-500 text-sm text-white'>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((product)=>{
                                    return product.product_active === false ? <div></div> : <tr className='border border-red-600' key={product.product_id}>
                                                <th><Image src={product.product_image} width='100' height='50' layout='fixed' alt='product'></Image></th>
                                                <td>{product.product_name}</td>
                                                <td>{product.product_details}</td>
                                                <td>{product.product_price}</td>
                                                <td>
                                                    <RestoreProduct productIndex={product.product_id}></RestoreProduct>
                                                </td>
                                            </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
        
    );
};

export default Page;