import React, { useEffect, useState } from 'react';

export default function Div({ style, className, children }) {
  const [clsName, setClsName] = useState('');
  useEffect(() => {
    setClsName(className);
  }, [className, style]);
  return (
    <div {...style} className={`border shadow rounded-md ${clsName}`}>
      {children}
    </div>
  );
}
