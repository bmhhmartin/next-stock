import React from 'react';

const page = () => {
    return (
        <div className='h-screen flex items-center justify-center flex-col p-5'>
            <form className='bg-slate-300 p-5'>
                <div className=''>
                    <h1 className='text-red-600 font-bold text-3xl mb-5 text-center'>Login Page</h1>
                </div>
                <div className='mb-3'>
                    <input type="email" placeholder="Enter your Email" className="input input-bordered input-success w-full" />
                </div>
                <div className='mb-3'>
                    <input type="text" placeholder="Enter your password" className="input input-bordered input-success w-full" />
                </div>
                <button className="btn btn-active btn-accent w-full mb-3">Login</button>
                <button className="btn btn-active btn-neutral w-full mb-3">Login With Github</button>
                <button className="btn btn-active btn-primary w-full mb-3">Login With Facebook</button>
            </form>
        </div>
    );
};

export default page;