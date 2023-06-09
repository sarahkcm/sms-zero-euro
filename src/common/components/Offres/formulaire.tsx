import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { WebSiteConfig } from "../../utils/config";

const Formulaire = ({ exist }: any) => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    exist
      ? emailjs
          .sendForm(
            "service_se1dk3o",
            "template_hkqcyc6",
            form.current || "",
            WebSiteConfig.emailPublicKey
          )
          .then(
            (result) => {
              // console.log(result.text);
              alert("Email sent successfully!");
              form.current?.reset();
            },
            (error) => {
              // console.log(error.text);
              alert("An Error while sending the E-mail, please try later.");
              form.current?.reset();
            }
          )
      : emailjs
          .sendForm(
            "service_se1dk3o",
            "template_p2m7dvj",
            form.current || "",
            WebSiteConfig.emailPublicKey
          )
          .then(
            (result) => {
              // console.log(result.text);
              alert("Email sent successfully!");
              form.current?.reset();
            },
            (error) => {
              // console.log(error.text);
              alert("An Error while sending the E-mail, please try later.");
              form.current?.reset();
            }
          );
  };

  return (
    <div className='flex flex-col'>
      <div className='p-4'>
        <p className='text-center text-blue text-md'>
          Veuillez remplir ce formulaire ci-dessous
        </p>
      </div>
      <form
        ref={form}
        className='p-4 lg:pl-32 lg:pr-32 xl:pl-32 xl:pr-32 xl:pt-10 xl:pb-10'
        onSubmit={sendEmail}
      >
        <div className='grid sm:grid-cols-2 sm:gap-x-6'>
          <div className='mb-6 w-full group'>
            <input
              type='text'
              name='first_name'
              id='first_name'
              className='block py-2.5 px-0 w-full bg-gray/70  border border-darkGray  text-blue text-sm pl-4 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder='Nom'
              required
            />
          </div>
          <div className='mb-6 w-full group'>
            <input
              type='text'
              name='last_name'
              id='last_name'
              className='block py-2.5 px-0 w-full bg-gray/70  border border-darkGray  text-blue text-sm pl-4 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder='Prénom'
              required
            />
          </div>
          <div className='mb-6 w-full group'>
            <input
              type='email'
              name='email'
              id='email'
              className='block py-2.5 px-0 w-full bg-gray/70  border border-darkGray  text-blue text-sm pl-4 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder='Email'
              required
            />
          </div>
          <div className='mb-6 w-full group'>
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
        <div className='mb-6 w-full group'>
          <input
            type='number'
            className='block py-2.5 px-0 w-full bg-gray/70  border border-darkGray  text-blue text-sm pl-4 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder='Code Postal'
            name='code_postal'
            required
          />
        </div>
        <div className='mb-6 w-full group'>
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
          <div className='mb-6 w-full group'>
            <input
              type='text'
              name='car_model'
              id='car_model'
              className='block py-2.5 px-0 w-full bg-gray/70  border border-darkGray  text-blue text-sm pl-4 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder='Modèle du véhicule'
              required
            />
          </div>
          <div className='mb-6 w-full group'>
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
                  <a
                    href='/conditions-offre-20'
                    className='text-pink underline cursor-pointer'
                  >
                    les conditions de l’offre parrainage 20€ ZR PARE-BRISE
                  </a>
                ) : (
                  <a
                    href='/conditions-generales'
                    className='text-pink underline cursor-pointer'
                  >
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
                  <a
                    href='/conditions-generales'
                    className='text-pink underline cursor-pointer'
                  >
                    la politique de confidentialité
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className='hover:-translate-y-1 flex flex-col justify-center items-center'>
          <button
            type='submit'
            className={` px-8 py-4 text-center text-white bg-pink hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs sm:w-auto px-5 py-2.5 text-center`}
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulaire;
