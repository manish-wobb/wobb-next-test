import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Wobb</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <h1 className='text-6xl font-bold'>
          Welcome to{' '}
          <a className='text-blue-600' href='https://wobb.ai'>
            Wobb!
          </a>
        </h1>
        <div className='flex mt-6'>
          <Link href='/register'>
            <button className=' py-2 px-5 w-28 bg-blue-500 text-white rounded-md font-semibold text-lg ml-4 hover:scale-105 transition-all delay-75 focus:scale-100'>
              Register
            </button>
          </Link>
          <Link href='/login'>
            <button className='py-2 px-5 w-24 bg-blue-500 text-white rounded-md font-semibold text-lg ml-4 hover:scale-105 transition-all delay-75 focus:scale-100'>
              Login
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
