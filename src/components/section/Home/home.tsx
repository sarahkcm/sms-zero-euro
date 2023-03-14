import React from "react";
import Footer from "../../../common/layout/footer";
import CartOffre1 from "./cart-offre-1";
import CartOffre2 from "./cart-offre-2";
import Hero from "./hero";

const HomeComponent = () => {
  return (
    <div>
      <Hero />
      <div className='px-4 py-8'>
        <CartOffre1 />
      </div>
      <div className='px-4 pb-8'>
        <img src='/assets/images/offre_150.png' />
      </div>
      <div className='px-4 pb-8'>
        <CartOffre2 />
      </div>
    </div>
  );
};

export default HomeComponent;
