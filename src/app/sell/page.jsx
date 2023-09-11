
import React from 'react';
import Header from '@/components/Header';
import { getAllProducts } from '@/libs/getAllProducts';
import Image from 'next/image';
import SellButton from './sellButton';
import Link from 'next/link';

const Page = async () => {
        
    const data = await getAllProducts();

    


    return (
        <>
            <Header></Header>
            <div className='px-4'>
                <h1 className='py-5 text-3xl text-green-600 font-bold'>Sell Products</h1>
                {
                    data &&
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className='border border-green-600'>
                            <tr className='border border-green-600 bg-green-500 text-sm text-white'>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data === null ? <div>There is no Sold Items</div> : 
                                data.map((product)=>{
                                    return product.product_active === true ? <div></div> : <tr className='border border-green-600' key={product.product_id}>
                                                <th><Image src={product.product_image} width='100' height='50' layout='fixed' alt='product'></Image></th>
                                                <td>{product.product_name}</td>
                                                <td>{product.product_details.slice(0, 40)}</td>
                                                <td>{product.product_price}</td>
                                                <td>
                                                    <div className='flex gap-2'>
                                                        <SellButton productIndex={product.product_id}></SellButton>
                                                        <Link className="btn btn-info" href={`/sell/${product.product_id}`}>Details</Link>
                                                    </div>
                                                </td>
                                            </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                }
            </div>
        </>
        
    );
};

export default Page;