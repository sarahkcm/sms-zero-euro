import React from "react";
import Button from "../Home/button";

const Formulaire = ({ exist }: any) => {
  return (
    <div className='flex flex-col'>
      <div className='p-4'>
        <p className='text-center text-blue text-md'>
          Veuillez remplir ce formulaire ci-dessous
        </p>
      </div>
      <form
        id='RDV'
        className='p-4 lg:pl-32 lg:pr-32 xl:pl-32 xl:pr-32 xl:pt-10 xl:pb-10'
      >
        <div className='grid sm:grid-cols-2 sm:gap-x-6'>
          <div className=' mb-6 w-full group'>
            <input
              type='text'
              name='first_name'
              id='first_name'
              className='block py-2.5 px-0 w-full bg-gray/70  border border-darkGray  text-blue text-sm pl-4 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder='Nom'
              required
            />
          </div>
          <div className=' mb-6 w-full group'>
            <input
              type='text'
              name='last_name'
              id='last_name'
              className='block py-2.5 px-0 w-full bg-gray/70  border border-darkGray  text-blue text-sm pl-4 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder='Prénom'
              required
            />
          </div>
          <div className=' mb-6 w-full group'>
            <input
              type='email'
              name='email'
              id='email'
              className='block py-2.5 px-0 w-full bg-gray/70  border border-darkGray  text-blue text-sm pl-4 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder='Email'
              required
            />
          </div>
          <div className=' mb-6 w-full group'>
            <input
              type='number'
              pattern='[0-9]{11}'
              name='phone'
              id='phone'
              className='block py-2.5 px-0 w-full bg-gray/70  border border-darkGray  text-blue text-sm pl-4 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder='Téléphone'
              required
            />
          </div>
        </div>
        <div className=' mb-6 w-full group'>
          <input
            type='number'
            className='block py-2.5 px-0 w-full bg-gray/70  border border-darkGray  text-blue text-sm pl-4 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder='Code Postal'
            name='code_postal'
            required
          />
        </div>
        <div className=' mb-6 w-full group'>
          <input
            type='text'
            name='matricule'
            id='matricule'
            className='block py-2.5 px-0 w-full bg-gray/70  border border-darkGray  text-blue text-sm pl-4 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder="Numéro d'immatriculation"
            required
          />
        </div>
        <div className='grid sm:grid-cols-2 sm:gap-6'>
          <div className=' mb-6 w-full group'>
            <input
              type='text'
              name='car_model'
              id='car_model'
              className='block py-2.5 px-0 w-full bg-gray/70  border border-darkGray  text-blue text-sm pl-4 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder='Modèle du véhicule'
              required
            />
          </div>
          <div className=' mb-6 w-full group'>
            <input
              type='text'
              name='brand_car'
              id='brand_car'
              className='block py-2.5 px-0 w-full bg-gray/70  border border-darkGray  text-blue text-sm pl-4 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder='Marque du véhicule'
              required
            />
          </div>
        </div>
        <div className='grid grid-flow-row place-items-center space-y-4  sm:place-items-start'>
          <div className='grid grid-flow-row place-items-start space-y-4'>
            <div className='grid grid-flow-col place-items-start space-x-4'>
              <input checked type='checkbox' className='rounded-md' />
              <p className='text-sm text-start'>
                J'ai lu et j'accepte{" "}
                {exist ? (
                  <a href="/conditions-offre-20" className='text-pink underline cursor-pointer'>
                    les conditions de l’offre parrainage 20€ ZR PARE-BRISE
                  </a>
                ) : (
                  <a className='text-pink underline cursor-pointer'>
                    la politique de confidentialité
                  </a>
                )}
              </p>
            </div>
            {exist && (
              <div className='grid grid-flow-col place-items-start space-x-4'>
                <input required type='checkbox' className='rounded-md' />
                <p className='text-sm'>
                  J'ai lu et j'accepte{" "}
                    <span className='text-pink underline cursor-pointer'>
                      la politique de confidentialité
                    </span>
                </p>
              </div>
            )}
          </div>

          <div className='sm:hidden block'>
            <Button
              path={false}
              style={"px-8 py-4 text-center"}
              name={"Envoyer"}
            />
          </div>
        </div>
      </form>
      <div className='sm:block hidden mx-auto py-4'>
        <Button
          path={false}
          style={"px-8 py-4 text-center sm:text-lg"}
          name={"Envoyer"}
        />
      </div>
    </div>
  );
};

export default Formulaire;
