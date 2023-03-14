import React from "react";
import Title from "../../../common/components/Home/title";
import Formulaire from "../../../common/components/Offres/formulaire";

const SecondOffre = () => {
  return (
    <div className=''>
      <div className='px-4 py-4'>
        <Title
          style={"justify-center items-center"}
          name={"Profitez de nos offres maintenant !"}
          styleName={
            "text-lg text-blue font-bold text-center tracking-wide md:text-xl"
          }
          small={"/assets/images/blue_small.png"}
          big={"/assets/images/blue_big.png"}
        />
      </div>
      <Formulaire exist={false} />
    </div>
  );
};

export default SecondOffre;
