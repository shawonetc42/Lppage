import React from 'react'

function Contactus() {
  return (
    <div className="bg-violet-500 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
    <div className="flex w-[819px] max-w-full flex-col items-stretch mt-20 mb-14 max-md:my-10">
      <div className="text-white text-base leading-4 text-center max-md:max-w-full">
        WE CUSTOM BUILD WEBSITES TO MAKE YOUR BRAND STAND OUT FROM THE NOISE
        <br />
      </div>
      <div className="text-white text-center text-5xl font-semibold leading-[59px] w-[903px] mt-11 mx-auto max-md:max-w-full max-md:mt-10">
        We start by listening and let that shape our design process, with our clients as partners
      </div>
      <a href='/' className="text-black text-center text-lg font-medium leading-7 whitespace-nowrap justify-center items-stretch
       bg-white self-center mt-12 px-9 py-5 rounded-md max-md:mt-10 max-md:px-5">
        Contact Us
      </a>
    </div>
  </div>
  )
}

export default Contactus