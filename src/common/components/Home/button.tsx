import { useRouter } from "next/router";
import React from "react";

const Button = ({ style, name, path }: any) => {
  const router = useRouter();
  const handleClick = () => {
    path ? router.push("/offres/offre-20") : router.push("/offres/offre-150");
  };
  return (
    <div className='hover:-translate-y-1'>
      <button
        onClick={() => {
          handleClick();
        }}
        type='submit'
        className={` ${style} text-white bg-pink hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs sm:w-auto px-5 py-2.5 text-center sm:h-[2.6rem] md:h-[2.6rem] lg:text-[0.7rem] lg:w-48 lg:h-[2.6rem] lg:px-0 xl:text-lg xl:w-60 xl:h-[3.3rem] xLL:text-xl xLL:w-72`}
      >
        {name}{" "}
      </button>
    </div>
  );
};

export default Button;
