import React, { memo } from 'react';

function Circle({ children }) {
  return (
    <div className='flex items-center justify-center rounded-full bg-white shadow border w-24 h-24 '>
      {children}
    </div>
  );
}
export default memo(Circle);
