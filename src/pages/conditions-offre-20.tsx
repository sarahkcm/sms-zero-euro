import React from "react";
import Title from "../common/components/Home/title";
import { ConditionsOffre20Data } from "../common/constants/conditions-offre-20";
import Layout from "../common/layout/layout";

const ConditionsOffre20 = () => {
  return (
    <Layout>
      <div className='p-4'>
        <Title
          style={"justify-center items-center"}
          name={"Les conditions de l’offre parrainage 20€ ZR PARE-BRISE"}
          styleName={
            "text-lg text-blue font-bold text-center tracking-wide md:text-xl"
          }
          small={"/assets/images/blue_small.png"}
          big={"/assets/images/blue_big.png"}
        />
        <ul className="py-2">
          {ConditionsOffre20Data.map(({ id, text }, index) => {
            return (
              <div key={id} className='p-4'>
                <li className="text-sm">
                  {id}. {text}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default ConditionsOffre20;
