import Image from 'next/image'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
      return (
            <div className='flex min-h-screen'>
                  <section className='lg:flex hidden justify-center items-center w-1/2 xl:w-2/5 p-10 bg-brand-100 '>
                        <div className='flex flex-col justify-center max-h-[800px] max-w-[500px] space-y-12'>
                              <Image
                                    src='/logo.svg'
                                    alt='Logo'
                                    width={223}
                                    height={80}
                                    className='h-auto'
                                    placeholder='blur'
                                    blurDataURL='@@'
                              />
                              <div className='space-y-5 text-white'>
                                    <h1 className='h1'>
                                          Manage your digital presence with ease and efficiency with Store Box.
                                    </h1>
                                    <p className='body-1'>
                                          Store Box is a digital asset management platform that allows you to store, manage, and share your digital assets with ease and efficiency.
                                    </p>
                              </div>
                              <Image
                                    src='/assets/images/files.png'
                                    alt='files'
                                    width={342}
                                    height={342}
                                    className='h-auto transition-all hover:scale-105 hover:-rotate-2'
                                    placeholder='blur'
                                    blurDataURL='@@'
                              />
                        </div>
                  </section>
                  <section className='flex flex-1 flex-col lg:justify-center items-center bg-white p-4  py-10 lg:p-10 lg:py-0 ' >
                        <div className='mb-16 lg:hidden'>
                              <Image
                                    src='/assets/images/files.png'
                                    alt='files'
                                    width={223}
                                    height={80}
                                    className='h-auto w-[200px] lg:w-[250px]'
                                    placeholder='blur'
                                    blurDataURL='@@'
                              />
                        </div>
                        {
                              children
                        }
                  </section>
            </div>
      )
}

export default layout