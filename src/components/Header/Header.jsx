import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between lg:mx-24 md:mx-12 my-5'>
            <div>
                <h1 className='text-3xl font-bold'>Make <span className='text-red-700'>Your</span> Team</h1>
            </div>
            <nav className='space-x-6'>
                <a className='hover:bg-red-700 bg-sky-300 px-3 py-2 rounded-md text-black' href="">Home</a>
                <a className='hover:bg-red-700 bg-sky-300 px-3 py-2 rounded-md text-black' href="">About</a>
                <a className='hover:bg-red-700 bg-sky-300 px-3 py-2 rounded-md text-black' href="">Find Team</a>
            </nav>
        </div>
    );
};

export default Header;