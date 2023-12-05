import React from 'react'

function Footer() {
  return (
    <div className="bg-neutral-900 flex flex-col justify-center items-center px-16 py-12 max-md:px-5 mt-10">
    <div className="flex w-full max-w-[1171px] flex-col items-stretch mt-6 mb-6 max-md:max-w-full">
      <div className="flex items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <div className="text-white text-4xl font-bold leading-10 grow whitespace-nowrap my-auto">
          WD
        </div>
        <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
          <div className="text-white text-opacity-50 text-base leading-8 tracking-[3px] uppercase whitespace-nowrap">
            Menu
          </div>
          <div className="text-white text-base leading-8 mt-9">
            About
            <br />
            Portfolio
            <br />
            Blog
            <br />
            Contact
          </div>
        </div>
        <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
          <div className="text-white text-opacity-50 text-base leading-8 tracking-[3px] uppercase whitespace-nowrap">
            Service
          </div>
          <div className="text-white text-base leading-8 mt-9">
            User Experience
            <br />
            User Interface
            <br />
            Logotype
            <br />
            See More
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0500da33d388133b225b9a81e25df19cf03b319cc99453828df3dd88bf7faf29?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="aspect-[3.48] object-contain object-center w-40 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="flex w-full items-stretch justify-between gap-5 mt-32 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="text-white text-opacity-50 text-base leading-8 grow whitespace-nowrap">
          Copyright © 2023 ShawonFarabi. All Rights Reserved.
        </div>
        <div className="flex justify-between gap-5 self-start items-start">
          <div className="text-white text-right text-base leading-8 whitespace-nowrap">
            Terms of Use
          </div>
          <div className="text-white text-right text-base leading-8 self-stretch whitespace-nowrap">
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer