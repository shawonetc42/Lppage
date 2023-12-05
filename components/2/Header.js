import React from 'react'

function Header2() {
  return (
    <div className="items-center bg-white flex flex-col justify-center px-16 py-5 max-md:px-5">
      <div className="items-stretch flex w-full max-w-[1170px] justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/334d038b8368063814f9261b3a984ddee6b9190f05d2c236653f60cc67332bcf?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="aspect-[5.35] object-contain object-center w-[139px] fill-red-500 overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
        <div className="items-stretch self-center flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <a  href='/' className="text-black text-center text-base leading-4 whitespace-nowrap">
            Home
          </a>
          <a href='/' className="text-black text-center text-base leading-4">
            About Us
          </a>
          <a href='/' className="text-black text-center text-base leading-4">
            Services
          </a>
          <a href='/' className="text-black text-center text-base leading-4">
            Project
          </a>
          <a href='/' className="text-black text-center text-base leading-4 whitespace-nowrap">
            Contact Us
          </a>
        </div>
        <a href='/' className="text-white text-center text-xl font-semibold leading-6 whitespace-nowrap items-stretch bg-neutral-900 justify-center px-7 py-4 rounded-md max-md:px-5">
          Get Started
        </a>
      </div>
    </div>
  )
}

export default Header2