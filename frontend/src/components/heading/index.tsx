// src/components/HeadingSeparator.tsx

import React from 'react';

interface HeadingSeparatorProps {
  title: string;
}

const HeadingSeparator: React.FC<HeadingSeparatorProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center my-16">
      <div className="flex-grow h-7 bg-gradient-to-r from-[#764095] to-transparent animate-pulse"></div>
    
      <span className="flex-shrink flex-row flex items-center md:text-5xl xl:text-5xl text-4xl font-bold text-[#764095] tracking-wider">
      <img className='w-20' src='/images/shap.png' />
        {title}
      </span>

          <div className="flex-grow h-7 bg-gradient-to-l from-[#764095] to-transparent animate-pulse"></div>
    </div>
  );
};

export default HeadingSeparator;
