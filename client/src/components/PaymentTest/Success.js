import React from 'react';

const Success = () => {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>SUCCESSFULLY PAYED</h1>
      <button>Successful!</button>
      <p>
        Your order is being prepared. Thanks for choosing my crappy shop lol
      </p>
      <br />
      <p>You will never see your money again haha opfero</p>
    </div>
  );
};

export default Success;
