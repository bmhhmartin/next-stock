import React from 'react';
import Header from '@/components/Header';
import { FiFileText, FiFolder, FiDribbble, FiLayers } from "react-icons/fi";

const page = () => {
    return (
        <>
            <Header></Header>
            <div className='container mx-auto px-4'>
                <h1 className='py-5 text-3xl text-green-600 font-bold'>Dashboard</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    <div className="card w-full shadow-x bg-slate-600 ">
                        <figure className="px-10 pt-10">
                            <FiFileText className='text-5xl text-red-400 font-bold'/>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-400 font-bold">All Report</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="card w-full shadow-x bg-slate-600 ">
                        <figure className="px-10 pt-10">
                            <FiFileText className='text-5xl text-red-400 font-bold'/>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-400 font-bold">All Report</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="card w-full shadow-x bg-slate-600 ">
                        <figure className="px-10 pt-10">
                            <FiFileText className='text-5xl text-red-400 font-bold'/>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-400 font-bold">All Report</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="card w-full shadow-x bg-slate-600 ">
                        <figure className="px-10 pt-10">
                            <FiFileText className='text-5xl text-red-400 font-bold'/>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-400 font-bold">All Report</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="card w-full shadow-x bg-slate-600 ">
                        <figure className="px-10 pt-10">
                            <FiFileText className='text-5xl text-red-400 font-bold'/>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-400 font-bold">All Report</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="card w-full shadow-x bg-slate-600 ">
                        <figure className="px-10 pt-10">
                            <FiFileText className='text-5xl text-red-400 font-bold'/>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-400 font-bold">All Report</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>

        </>
    );
};

export default page;