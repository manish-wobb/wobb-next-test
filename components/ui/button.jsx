import React from 'react';
import classNames from 'classnames';

const Button = ({ bgColor, textColor, size, fullWidth, children, rounded, bold, onClick, m0 }) => {
  return (
    <button
      className={classNames(
        `py-3 mt-4 px-5 bg-${bgColor} text-${textColor} text-lg hover:bg-${bgColor.split('-')[0]}-${
          Number(bgColor.split('-')[1]) + 100
        }  transition-all delay-75 focus:bg-${bgColor}`,
        {
          'text-sm': size === 'sm',
          'text-base': size === 'md',
          'text-lg': size === 'lg',
          'text-xl': size === 'xl',
          'font-semibold': !!bold,
          'font-medium': !bold,
          'rounded-md': !!rounded,
          'rounded-sm': !rounded,
          'w-full': !!fullWidth,
          'mt-4': !m0,
          'mt-0': !!m0,
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
