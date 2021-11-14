import React from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import Container from '../../components/ui/container';
import Navbar from '../../components/navbar/navbar';

const Register = () => {
  return (
    <>
      <Navbar />
      <main className='flex items-center justify-start pt-6 flex-col w-full h-full bg-gray-100'>
        <h1 className='-ml-36 mb-2 text-2xl font-medium'>Welcome to Wobb!</h1>
        <Container width={96}>
          <h2 className='text-xl mb-1 font-bold'>Sign Up</h2>
          <form className='py-2 w-full'>
            <Input type='email' label='Name' placeholder='jhon' />
            <Input type='email' label='Email or phone number' placeholder='jhon@example.com' />
            <Input
              type='password'
              label='Create password'
              placeholder='Must be atleast 6 or more characters'
            />

            <Button size='md' bgColor='blue-800' fullWidth textColor='white'>
              Sign Up
            </Button>
          </form>
          <div className='flex self-center items-center justify-center text-gray-500 my-3'>
            <span className='text-gray-300'>---------</span>
            &nbsp; &nbsp; &nbsp; <p className=' text-md font-medium'> or </p> &nbsp; &nbsp; &nbsp;{' '}
            <span className='text-gray-300'>---------</span>
          </div>
          <div className='w-full max-w-full flex flex-col'>
            <button className='w-full flex items-center justify-center text-blue-900 font-medium text-base border-2 border-gray-200 rounded-sm py-3 pl-6 mb-3  hover:border-gray-300 hover:shadow-sm delay-75'>
              <FcGoogle className='mr-3 scale-150' /> Join with Google
            </button>
            <button className='w-full flex items-center justify-center text-blue-900 font-medium text-base border-2 border-gray-200 rounded-sm py-3 pl-6 mb-3 hover:border-gray-300 hover:shadow-sm delay-75'>
              <BsFacebook className='mr-3 scale-150 text-blue-600' /> Join with Facebook
            </button>
          </div>
          <p className='text-gray-600 font-normal text-sm flex self-center mt-1'>
            Already a Member? &nbsp;
            <Link href='/login'>
              <span className='font-semibold text-gray-900 cursor-pointer'>Sign In</span>
            </Link>
          </p>
        </Container>
      </main>
    </>
  );
};

export default Register;
