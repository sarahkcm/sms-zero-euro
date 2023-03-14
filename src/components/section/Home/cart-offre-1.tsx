import React from "react";
import Button from "../../../common/components/Home/button";
import Title from "../../../common/components/Home/title";
import { WebSiteConfig } from "../../../common/utils/config";

const CartOffre1 = () => {
  return (
    <div className='w-full bg-blue rounded-2xl'>
      <div className='md:grid md:grid-flow-col'>
        <img
          src='/assets/images/offre_20_big.png'
          className='h-full hidden md:block md:w-[100%] md:rounded-2xl md:rounded-r-none'
        />
        <div className='p-8 flex flex-col justify-start items-start md:pl-20 lg:p-14 xl:p-24'>
          <Title
            style={"justify-start items-start"}
            name={WebSiteConfig.offre_1_title}
            styleName={
              "text-lg text-white font-normal text-start tracking-wide md:pb-8 md:text-xl"
            }
            small={"/assets/images/pink_small.png"}
            big={"/assets/images/pink_big.png"}
          />
          <Title
            padding={"pt-4"}
            style={"justify-start items-start"}
            name={WebSiteConfig.offre_1_text}
            styleName={
              "text-lg text-white font-bold text-start tracking-wider uppercase md:text-3xl"
            }
          />
          <div className='md:py-8'>
            <Button
              path={true}
              style={"px-8 py-4 md:text-lg"}
              name={"J'en Profite"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartOffre1;
