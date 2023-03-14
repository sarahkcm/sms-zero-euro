import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue max-w-[100%] xl:max-w-full'>
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 xl:px-0'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 xl:grid-cols-3'>
          <div className='xl:flex xl:justify-start'>
            <img
              src={"/assets/images/logo/euro-footer-logo.png"}
              className='mr-5 h-16 w-36 sm:h-16'
              alt='logo'
            />
          </div>
          <div className='grid grid-cols-1 gap-0 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-2 lg:space-x-10 xl:space-x-28'>
            <div>
              <p className='font-medium text-white xl:text-xl'>
                Nos interventions
              </p>
              <nav className='flex flex-col mt-4 space-y-2 text-sm text-gray-500'>
                <a className='hover:opacity-75 text-white xl:text-lg'>
                  {" "}
                  Remplacement pare-brise{" "}
                </a>
                <a className='hover:opacity-75 text-white xl:text-lg'>
                  {" "}
                  Réparation d’impact{" "}
                </a>
                <a className='hover:opacity-75 text-white xl:text-lg'>
                  {" "}
                  Vitres latérales{" "}
                </a>
                <a className='hover:opacity-75 text-white xl:text-lg'>
                  {" "}
                  Lunette arrière{" "}
                </a>
                <a className='hover:opacity-75 text-white xl:text-lg'>
                  {" "}
                  Rétroviseurs{" "}
                </a>
                <a className='hover:opacity-75 text-white xl:text-lg'>
                  {" "}
                  Phares{" "}
                </a>
              </nav>
            </div>
            <div className='flex mt-8 pb-4 text-gray-600 sm:-mt-1 lg:mt-0'>
              <div className='flex flex-col lg:flex-none lg:space-y-6 xl:flex-none'>
                <p className='font-medium text-white xl:text-xl'>Suivez-nous</p>
                <div className='flex flex-row space-x-4 mt-4 '>
                  <div>
                    <a>
                      <img
                        src={"/assets/images/icons/Facebook.png"}
                        alt=''
                        className='w-8 h-8'
                      />
                    </a>
                  </div>
                  <div>
                    <a>
                      <img
                        src={"/assets/images/icons/instagram.png"}
                        alt=''
                        className='w-8 h-8'
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
