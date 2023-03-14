import React from "react";

const Title = ({ padding, name, small, big , styleName, style}: any) => {
  return (
    <div className='xLL:pt-14 '>
      <div className={`${padding}`}>
        <div className={`flex flex-col ${style}`}>
          <h3 className={` ${styleName} font-montserrat lg:text-3xl xl:text-5xl xl:pb-8`}>
            {name}
          </h3>
          <img
            src={small}
            alt=''
            className='pt-4 xl:w-6/12 xl:h-1/3 lg:hidden'
          />
          <img src={big} alt='' className='pt-2 hidden lg:block' />
        </div>
      </div>
    </div>
  );
};

export default Title;
