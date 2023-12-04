import React from 'react'

function Footer() {
  return (
    <div className="bg-slate-900 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
    <div className="flex w-[980px] max-w-full justify-between gap-5 mt-9 mb-7 items-start max-md:flex-wrap max-md:justify-center max-sm:w-[1002px]">
      <div className="flex grow basis-[0%] flex-col items-start">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ed5461011667c94547cbc6e98aa9bdd137ae67bc42df3bef7e2e575aa9068e26?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed5461011667c94547cbc6e98aa9bdd137ae67bc42df3bef7e2e575aa9068e26?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed5461011667c94547cbc6e98aa9bdd137ae67bc42df3bef7e2e575aa9068e26?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed5461011667c94547cbc6e98aa9bdd137ae67bc42df3bef7e2e575aa9068e26?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed5461011667c94547cbc6e98aa9bdd137ae67bc42df3bef7e2e575aa9068e26?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed5461011667c94547cbc6e98aa9bdd137ae67bc42df3bef7e2e575aa9068e26?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed5461011667c94547cbc6e98aa9bdd137ae67bc42df3bef7e2e575aa9068e26?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed5461011667c94547cbc6e98aa9bdd137ae67bc42df3bef7e2e575aa9068e26?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="aspect-[1.71] object-contain object-center w-[89px] overflow-hidden max-w-full"
        />
        <div className="text-white text-xl leading-9 self-stretch mt-9">
          2021 Award winning Vaccination and Lorem ipsum dolor sit amet
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7d0466721dd0504c1b826bd087ffec3808fe5b11634d519f89eedff3f1a0e92?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="aspect-[6.04] object-contain object-center w-[302px] overflow-hidden self-center mt-12 max-md:mt-10"
        />
      </div>
      <div className="flex basis-[0%] flex-col items-stretch">
        <div className="text-white text-xl font-bold leading-9 whitespace-nowrap">
          Location
        </div>
        <div className="text-white text-lg leading-8 whitespace-nowrap mt-12 max-md:mt-10">
          America
        </div>
        <div className="text-white text-lg leading-8 whitespace-nowrap mt-11 max-md:mt-10">
          Asia
        </div>
        <div className="text-white text-lg leading-8 whitespace-nowrap mt-11 max-md:mt-10">
          Europe
        </div>
        <div className="text-white text-lg leading-8 whitespace-nowrap mt-10">
          Africa
        </div>
      </div>
      <div className="self-stretch flex basis-[0%] flex-col items-stretch">
        <div className="text-white text-xl font-bold leading-9 whitespace-nowrap">
          Contact
        </div>
        <div className="text-white text-lg leading-8 whitespace-nowrap mt-12 max-md:mt-10">
          About Me
        </div>
        <div className="text-white text-lg leading-8 whitespace-nowrap mt-11 max-md:mt-10">
          Teams
        </div>
        <div className="text-white text-lg leading-8 whitespace-nowrap mt-11 max-md:mt-10">
          Profile
        </div>
        <div className="text-white text-lg leading-8 whitespace-nowrap mt-11 max-md:mt-10">
          FAQ
        </div>
      </div>
      <div className="self-stretch flex basis-[0%] flex-col items-stretch">
        <div className="text-white text-xl font-bold leading-9 whitespace-nowrap">
          Legals
        </div>
        <div className="text-white text-lg leading-8 whitespace-nowrap mt-12 max-md:mt-10">
          Privacy
        </div>
        <div className="text-white text-lg leading-8 whitespace-nowrap mt-10">
          Disclaimer
        </div>
        <div className="text-white text-lg leading-8 whitespace-nowrap mt-11 max-md:mt-10">
          Terms
        </div>
        <div className="text-white text-lg leading-8 whitespace-nowrap mt-11 max-md:mt-10">
          Company
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer