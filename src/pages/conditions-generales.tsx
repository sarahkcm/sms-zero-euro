import React from 'react'
import Title from '../common/components/Home/title'
import Layout from '../common/layout/layout'

const ConditionsGenerales = () => {
  return (
    <Layout>
      <div className='p-4'>
        <Title
          style={"justify-center items-center"}
          name={"Les conditions générales"}
          styleName={
            "text-lg text-blue font-bold text-center tracking-wide md:text-xl"
          }
          small={"/assets/images/blue_small.png"}
          big={"/assets/images/blue_big.png"}
        />
      </div>
    </Layout>
  );
}

export default ConditionsGenerales
