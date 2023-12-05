import React from 'react'

function Agency() {
  return (
    <div className="bg-zinc-100 flex flex-col items-center pt-12 px-16 max-md:px-5">
    <div className="flex w-full max-w-[1144px] items-center gap-3.5 mt-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
      <div className="flex grow basis-[0%] flex-col my-auto items-start max-md:max-w-full">
        <div className="flex gap-1.5 items-start">
          <div className="bg-red-500 flex w-[3px] shrink-0 h-[21px] flex-col" />
          <div className="text-black text-2xl grow whitespace-nowrap">
            Ninad Creative Agency
          </div>
        </div>
        <div className="text-red-500 text-6xl font-semibold leading-[84px] self-stretch mt-6 max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
          <span className="text-neutral-900">Creative </span>
          <span className="text-red-500">Mind </span>
          <span className="text-neutral-900">
            With
            <br />
            Creative People
          </span>
        </div>
        <div className="text-zinc-500 text-lg leading-8 self-stretch mt-8 max-md:max-w-full">
          It is a long established fact that a reader will be distracted by
          the readable content of a page when at its layout.
        </div>
        <div className="justify-center items-stretch rounded bg-red-500 flex gap-4 mt-9 pl-8 pr-9 py-4 max-md:px-5">
          <div className="text-white text-base font-medium leading-7 grow whitespace-nowrap">
            Read-More
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/61d02bc2657debaffd600bf92fed416edffcce532a3064fbb528481c2457160d?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
            className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cfefb40fd842526c286ef254a4c8f45af5752ce4f3a6e6c20e84ec5f89e8ca1b?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfefb40fd842526c286ef254a4c8f45af5752ce4f3a6e6c20e84ec5f89e8ca1b?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfefb40fd842526c286ef254a4c8f45af5752ce4f3a6e6c20e84ec5f89e8ca1b?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfefb40fd842526c286ef254a4c8f45af5752ce4f3a6e6c20e84ec5f89e8ca1b?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfefb40fd842526c286ef254a4c8f45af5752ce4f3a6e6c20e84ec5f89e8ca1b?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfefb40fd842526c286ef254a4c8f45af5752ce4f3a6e6c20e84ec5f89e8ca1b?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfefb40fd842526c286ef254a4c8f45af5752ce4f3a6e6c20e84ec5f89e8ca1b?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfefb40fd842526c286ef254a4c8f45af5752ce4f3a6e6c20e84ec5f89e8ca1b?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
        className="aspect-[1.53] object-contain object-center w-[69px] overflow-hidden shrink-0 max-w-full mt-[531px] self-end max-md:mt-10"
      />
    </div>
  </div>
    
  )
}

export default Agency