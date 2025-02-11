import React from 'react';

const Quote = () => {
  return (
    <div className='text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white'>
      Connecting students with career opportunities. Our comprehensive platform 
      <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>
      {' '}"prepares and guides"
      </span>
      <span className='bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold'>
        {' '} students towards success 
      </span>
      {' '}by offering 
      <span className='bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold'>
        {' '}tailored training and placement support. 
      </span>
    </div>
  );
};

export default Quote;
