import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-center gap-2 mt-1 w-full text-sm lg:text-normal'>
            <div className='p-2 border-2 border-black rounded-2xl '>
                <Link to='/'>OFF-ROAD EBIKES</Link>
            </div>
            <div className='p-2 border-2 border-black rounded-2xl'>
                <Link to='cosmopolitan'>COSMOPOLITAN EBIKES</Link>
            </div>
            <div className='p-2 border-2 border-black rounded-2xl'>
                <Link to='trailers'>TRAILERS</Link>
            </div>


        </div>
    );
};

export default Navbar;