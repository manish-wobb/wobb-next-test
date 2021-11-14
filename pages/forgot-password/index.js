import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import Container from '../../components/ui/container';
import Navbar from '../../components/navbar/navbar';

const ForgotPassword = () => {
  const router = useRouter();
  const sendOTPHandler = (e) => {
    e.preventDefault();
    router.push('/reset-password-otp');
  };
  return (
    <>
      <Navbar />

      <main className='flex items-center justify-start pt-6 flex-col w-full h-full bg-gray-100'>
        <Container width={96}>
          <h1 className='text-2xl font-semibold my-2 text-gray-900'>Forgot password?</h1>
          <p className='text-sm font-normal text-gray-500 leading-5'>
            Please enter your registered email <br /> address or phone number.
          </p>
          <form className='w-full mt-14'>
            <Input type='email' placeholder='jhon@example.com' label='Email or phone number' />
            <Button bgColor='blue-800' fullWidth size='md' textColor='white' onClick={sendOTPHandler}>
              Reset Password
            </Button>
            <Link href='/login'>
              <button className='w-full flex items-center font-medium justify-center mt-2'>Back</button>
            </Link>
          </form>
        </Container>
      </main>
    </>
  );
};

export default ForgotPassword;
