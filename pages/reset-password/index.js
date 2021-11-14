import React from 'react';
import { useRouter } from 'next/router';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import Container from '../../components/ui/container';
import Navbar from '../../components/navbar/navbar';

const ForgotPassword = () => {
  const router = useRouter();
  const ResetPasswordHandler = (e) => {
    e.preventDefault();
    console.log('Submit Handler');
  };
  return (
    <>
      <Navbar />

      <main className='flex items-center justify-start pt-6 flex-col w-full h-full bg-gray-100'>
        <Container width={96}>
          <h1 className='text-2xl font-semibold my-1 text-gray-900'>Reset Password</h1>
          <form className='w-full mt-6'>
            <Input type='email' placeholder='Must be atleast 6 or more Character' label='Create Password' />
            <Input type='email' placeholder='Must be atleast 6 or more Character' label='Confirm Password' />
            <Button bgColor='blue-800' fullWidth size='md' textColor='white' onClick={ResetPasswordHandler}>
              Submit
            </Button>
          </form>
        </Container>
      </main>
    </>
  );
};

export default ForgotPassword;
