import React from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

function Login() {
  return (
    <main className='flex items-center justify-center flex-col w-full h-full bg-gray-100'>
      <h1 className='-ml-28 mb-5 text-xl font-medium'>Welcome to Wobb!</h1>
      <div className='bg-white py-4 px-10 flex justify-start flex-col  items-start border-2 border-gray-200 shadow-sm'>
        <h2 className='text-xl mb-1 font-bold'>Sign In</h2>
        <form className='py-2 '>
          <div className='py-1'>
            <p className='text-gray-900 text-sm font-medium'>Name</p>
            <input
              type='text'
              placeholder='john'
              className='border-2 border-gray-200 py-2 px-6 my-2 rounded-md outline-none focus:border-gray-400 placeholder-gray-300'
            />
          </div>
          <div className='py-1'>
            <p className='text-gray-900 text-sm font-medium'>Email or phone number</p>
            <input
              type='email'
              placeholder='john@example.com'
              className='border-2 border-gray-200 py-2 px-6 my-2 rounded-md outline-none focus:border-gray-400  placeholder-gray-300'
            />
          </div>
          <div className='py-1'>
            <p className='text-gray-900 text-sm font-medium'>Password</p>
            <input
              type='password'
              placeholder='enter your password'
              className='border-2 border-gray-200 py-2 px-6 my-2 rounded-md outline-none focus:border-gray-400 placeholder-gray-300'
            />
          </div>
          <Link href='/login'>
            <button className='py-2 mt-4 px-5 w-full bg-blue-800 text-white rounded-md font-semibold text-lg hover:bg-blue-900  transition-all delay-75 focus:bg-blue-800 '>
              Sign In
            </button>
          </Link>
        </form>
        <div className='flex self-center items-center justify-center text-gray-500 my-3'>
          <span className='text-gray-300'>----------</span>
          &nbsp; &nbsp; &nbsp; <p className=' text-md font-medium'> or </p> &nbsp; &nbsp; &nbsp;{' '}
          <span className='text-gray-300'>----------</span>
        </div>
        <div className='w-full max-w-full flex flex-col'>
          <button className='w-full flex items-center justify-start text-blue-900 font-medium text-sm border-2 border-gray-200 rounded-sm py-2 pl-6 mb-3'>
            <FcGoogle className='mr-3 scale-150' /> Continue with Google
          </button>
          <button className='w-full flex items-center justify-start text-blue-900 font-medium text-sm border-2 border-gray-200 rounded-sm py-2 pl-6 mb-3'>
            <BsFacebook className='mr-3 scale-150 text-blue-600' /> Continue with Facebook
          </button>
        </div>
      </div>
    </main>
  );
}

export default Login;
