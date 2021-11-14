import React from 'react';
import Link from 'next/link';
import Button from '../ui/button';

const Navbar = () => {
  return (
    <nav className='h-16 bg-white flex py-3 px-12 justify-around'>
      <Link href='/'>
        <img src='https://wobb.ai/images/logo-blue.png' className='w-32 cursor-pointer' />
      </Link>
      <div></div>
      <div className=''>
        <Link href='/login'>
          <button className='text-base font-semibold text-gray-600 mr-4 hover:bg-gray-100 focus:bg-white py-2 px-3 rounded-sm'>
            Log In
          </button>
        </Link>
        <Link href='/register'>
          <Button size='sm' bgColor='blue-800' textColor='white' m0>
            Sign Up
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
