import React from 'react';

const Input = ({ label, placeholder, type }) => {
  return (
    <div className='py-1'>
      <p className='text-gray-900 text-sm font-medium'>{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        className='border-2 w-full border-gray-200 py-2 px-4 my-2 text-sm rounded-md outline-none focus:border-gray-400 hover:border-gray-400 placeholder-gray-300'
      />
    </div>
  );
};

export default Input;
