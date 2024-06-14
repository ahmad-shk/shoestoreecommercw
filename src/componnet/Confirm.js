import React from 'react';
import { useNavigate } from 'react-router-dom';

function Confirm() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/page2');
  };

  return (
    <div className='h-[100vh] flex flex-col justify-center items-center gap-5'>
      <h1 className='text-white text-[32px]'>Confirm your <br /> Order</h1>
      <button
        onClick={handleConfirm}
        className='footerCardBtn text-white flex mt-[20px] justify-center items-center gap-3 py-3 px-3 bg-[#16a254] rounded-[50px] text-[11px]'
      >
        Confirm
        <img src='./greater than.svg' className='h-[15px] w-[15px] invert' />
      </button>
    </div>
  );
}

export default Confirm;
