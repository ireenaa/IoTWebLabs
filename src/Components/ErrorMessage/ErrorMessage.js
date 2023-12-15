import React from 'react';

const ErrorMessageComponent = ({ children }) => {
  return (
    <div className='eroruk' style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
      {children}
    </div>
  );
};

export default ErrorMessageComponent;
