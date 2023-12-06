
import React from 'react'

function Footer3() {
  return (
    <div className="bg-black flex flex-col justify-center items-center px-16 py-10 max-md:px-5">
      <div className="flex w-[1257px] max-w-full flex-col">
        <div className="self-stretch flex w-full justify-between gap-5 pr-8 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="text-stone-300 text-base font-medium leading-4 tracking-normal grow whitespace-nowrap max-md:max-w-full">
            About Services Pricing plans Privacy Contact us
          </div>
          <div className="self-stretch flex items-stretch justify-between gap-5 max-md:justify-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5d8dc7ef5055066d394f70e4074e0690961d4ba96e41349a80547c29933cb9a?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f11212332f475d0b6ad290f47683da5ca19b7ca0c81af23cfa9581f807219d02?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d49b10eb8c58fbfe4fb2ea8fe04e3eae5505c585fbc0d0da80a5c2b81ad9e0ac?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
          </div>
        </div>
        <div className="bg-cyan-950 self-stretch shrink-0 h-px mt-10 max-md:max-w-full max-md:mt-10" />
        <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-20 pr-2.5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[27%] max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-stretch max-md:mt-10">
                  <div className="text-white text-lg font-medium leading-4 whitespace-nowrap">
                    About
                  </div>
                  <div className="text-stone-300 text-lg font-medium leading-10 mt-9">
                    About Sway
                    <br />
                    Plans & Pricing
                    <br />
                    Services
                    <br />
                    Blog
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch max-md:mt-10">
                  <div className="text-white text-lg font-medium leading-4 whitespace-nowrap">
                    Products
                  </div>
                  <div className="text-stone-300 text-lg font-medium leading-10 mt-9">
                    Primary blocks
                    <br />
                    Content block
                    <br />
                    Infographic blocks
                    <br />
                    Business blocks
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-stretch max-md:mt-10">
                  <div className="text-white text-lg font-medium leading-4 whitespace-nowrap">
                    Resources
                  </div>
                  <div className="text-stone-300 text-lg font-medium leading-10 tracking-tighter mt-9">
                    Support center
                    <br />
                    Documentation
                    <br />
                    Newsletter
                    <br />
                    Chanelog
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[14%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch max-md:mt-10">
                  <div className="text-white text-lg leading-4 tracking-normal whitespace-nowrap">
                    Follow us
                  </div>
                  <div className="text-stone-300 text-lg font-medium leading-10 tracking-tight mt-9">
                    Twitter
                    <br />
                    Dribble
                    <br />
                    Facebook
                    <br />
                    Linkedin
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex basis-[0%] flex-col self-start items-end">
            <div className="text-white text-lg leading-4 tracking-normal whitespace-nowrap">
              Contact
            </div>
            <div className="text-stone-300 text-right text-base leading-6 tracking-normal self-stretch mt-6">
              New York. 112 W
              <br />
              34th St, Manhattan
              <br />
              (1) 212-445-4320
            </div>
          </div>
        </div>
        <div className="bg-cyan-950 self-stretch shrink-0 h-px mt-24 max-md:max-w-full max-md:mt-10" />
        <div className="flex w-[863px] max-w-full justify-between gap-5 ml-3 self-start items-start max-md:flex-wrap">
          <div className="text-stone-300 text-right text-base leading-6 whitespace-nowrap">
            ShawonFarabi Design. All Rights Reserved
          </div>
          <div className="text-white text-base leading-6 self-stretch whitespace-nowrap">
            Terms of Use Privacy Policy
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer3