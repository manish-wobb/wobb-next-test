import React from 'react';
import { useRouter } from 'next/router';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import Container from '../../components/ui/container';
import Navbar from '../../components/navbar/navbar';

const ResetPassword = () => {
  const router = useRouter();
  const confirmOTPHandler = (e) => {
    e.preventDefault();
    router.push('/reset-password');
  };
  return (
    <>
      <Navbar />

      <main className='flex items-center justify-start pt-6 flex-col w-full h-full bg-gray-100'>
        <Container width={96}>
          <h1 className='text-2xl font-semibold my-2 text-gray-900'>
            Verify Phone Number or <br /> Email ID
          </h1>
          <p className='text-sm font-normal text-gray-500 leading-5'>
            Please enter the OTP sent to mobile
            <br />
            number or email ID
          </p>
          <div className='w-full mt-14 flex flex-col items-center justify-center m-0'>
            <Input placeholder='enter OTP' />
            <p className='text-sm text-gray-400 font-medium m-0'>{`03:00`}</p>
            <button className='w-full text-blue-700 text-sm font-semibold flex items-center justify-center mt-2'>
              Resend OTP
            </button>
            {
              <Button bgColor='blue-800' fullWidth size='md' textColor='white' onClick={confirmOTPHandler}>
                Reset Password
              </Button>
            }
          </div>
        </Container>
      </main>
    </>
  );
};

export default ResetPassword;
