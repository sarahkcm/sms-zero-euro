import React from "react";
import Title from "../../../common/components/Home/title";
import { WebSiteConfig } from "../../../common/utils/config";

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4 md:pt-6'>
      <Title
        padding={"p-4"}
        style={"justify-center items-center"}
        name={WebSiteConfig.title}
        styleName={
          "text-lg text-blue font-extrabold text-center tracking-tight px-4 md:text-xl"
        }
        small={"/assets/images/blue_small.png"}
        big={"/assets/images/blue_big.png"}
      />
      <img src='/assets/images/offre_20.png' className='w-full md:hidden' />
    </div>
  );
};

export default Hero;
