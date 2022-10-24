import React, { memo, useEffect, useState } from 'react';

function Container({ m, p, w, h, children }) {
  const [customStyle, setSetCustomStyle] = useState('');
  useEffect(() => {
    setSetCustomStyle(
      () =>
        `bg-white m-${Number(m ?? 0)} rounded-md p-${Number(
          p ?? 0
        )} border w-${Number(w ?? 0)} h-${Number(h ?? 0)}`
    );
  }, [m, p, w, h]);

  return (
    <div className={'bg-white rounded-md shadow p-2 m-2 border w-1/2'}>
      {children}
    </div>
  );
}
export default memo(Container);
