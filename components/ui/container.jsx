import classNames from 'classnames';
import React from 'react';

const Container = ({ children, width,  }) => {
  return (
    <div
      className={classNames(
        `bg-white w-${width} py-5 px-10 flex justify-start flex-col  items-start border-2 border-gray-200 shadow-sm`
      )}
    >
      {children}
    </div>
  );
};

export default Container;
