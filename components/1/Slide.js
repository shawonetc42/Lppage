import React from 'react'

function Slide() {
  return (
    <div className="bg-slate-900 flex justify-between gap-4 pt-7 items-start max-md:flex-wrap max-md:justify-center">
      <div className="flex grow basis-[0%] flex-col mt-32 self-end items-end max-md:max-w-full max-md:mt-10">
        <div className="flex w-[565px] max-w-full flex-col px-5 items-start">
          <div className="text-orange-600 text-6xl font-bold leading-[81px] self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
            <span className="text-white">Our </span>
            <span className="text-orange-600">consultation</span>
            <span className="text-white">
              {" "}
              is always in sync with your strategy
            </span>
          </div>
          <div className="text-zinc-100 text-base leading-7 self-stretch mt-9 max-md:max-w-full">
            Scelerisque dignissim in leo at magna donec mi metus ipsum luctus
            nam elit sociis luctus et aliquam libero.
          </div>
          <div className="text-white text-xl font-bold leading-5 whitespace-nowrap justify-center items-stretch bg-orange-600 mt-7 px-7 py-4 rounded-sm max-md:px-5">
            <a
              href="https://asri.casethemes.net/digital/services/"
              target="_blank"
            >
              Our Services
            </a>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/34870dff457763d8b598b5fddb6d341de37d8d9a9611723b83d9750f15f0ff69?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="aspect-[0.38] object-contain object-center w-[43px] overflow-hidden max-w-full self-start"
        />
      </div>
      <img
        loading="lazy"
        srcSet="1.png"
        className="aspect-[1.08] object-contain object-center w-full overflow-hidden grow basis-[0%] mt-7 self-end max-md:max-w-full"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/34870dff457763d8b598b5fddb6d341de37d8d9a9611723b83d9750f15f0ff69?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
        className="aspect-[0.39] object-contain object-center w-11 overflow-hidden shrink-0 max-w-full"
      />
    </div>
  )
}

export default Slide