import React from "react";
import Button from "../../../common/components/Home/button";
import Title from "../../../common/components/Home/title";
import { WebSiteConfig } from "../../../common/utils/config";

const CartOffre1 = () => {
  return (
    <div className='w-full bg-blue'>
      <div className='p-8 flex flex-col justify-start items-start'>
        <Title
          style={"justify-start items-start"}
          name={WebSiteConfig.offre_1_title}
          styleName={"text-lg text-white font-normal text-start tracking-wide"}
          small={"/assets/images/pink_small.png"}
          big={"/assets/images/pink_big.png"}
        />
        <Title
          padding={"pt-4"}
          style={"justify-start items-start"}
          name={WebSiteConfig.offre_1_text}
          styleName={
            "text-lg text-white font-bold text-start tracking-wider uppercase"
          }
        />
        <Button path={true} style={"px-8 py-4"} name={"J'en Profite"} />
      </div>
    </div>
  );
};

export default CartOffre1;
