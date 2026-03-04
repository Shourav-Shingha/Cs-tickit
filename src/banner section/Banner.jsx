import React from 'react';

const Banner = () => {
    return (
        <div className='bg-gray-100 flex justify-between p-16'>
            <div className='w-[48%] rounded-xl bg-linear-to-br from-purple-600 via-purple-500  to-pink-300 text-center py-20'>
            <h1 className='text-3xl  text-white'>In-Progress</h1>
            <h1 className='text-6xl text-white font-bold'>0</h1>
            </div>
            <div className='w-[48%] rounded-xl bg-linear-to-r from-[#5de270] via-[#31a37c] to-[#007b83] text-center py-20'>
            <h1 className='text-3xl  text-white'>Resolve</h1>
            <h1 className='text-6xl text-white font-bold'>0</h1>
            </div>
        </div>
    );
};

export default Banner;