import React from "react";



const NavBar = () => {
  return (
    <nav className='p-3 bg-blue'>
      <div className='container flex flex-wrap items-center justify-between mx-auto '>
        <a href='/' className='flex items-center pl-2 pt-3'>
          <img
            src={"/assets/images/logo/euro-nav-logo.png"}
            alt=''
            className='w-[80%]'
          />
        </a>
        <div className='flex flex-row space-x-2'>
          <img
            src='/assets/images/icons/Facebook.png'
            className='w-8 border-2 border-white rounded-full'
          />
          <img
            src='/assets/images/icons/instagram.png'
            className='w-8 border-2 border-white rounded-full'
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
