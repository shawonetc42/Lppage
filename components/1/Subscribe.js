import React from 'react'

function Subscribe() {
  return (
    <div className="flex flex-col items-center">
    <div className="flex-col overflow-hidden relative flex min-h-[327px] w-full max-w-[1264px] justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0d46f715162bdd21a2ac444020b30d92599566c6583fd80a6b26c1ec4f5dc72?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <div className="relative flex w-[796px] max-w-full justify-between gap-5 my-9 items-start max-md:flex-wrap max-md:justify-center">
        <div className="flex grow basis-[0%] flex-col items-stretch mt-2.5 max-md:max-w-full">
          <div className="text-black text-3xl font-semibold leading-10 max-md:max-w-full">
            Subscribe to Our Newsletter For Weekly Article Update.
          </div>
          <div className="text-black text-sm leading-6 mt-8 max-md:max-w-full">
            Passages of lorem ipsum available, but the majority have suffered
            alteration, by injected words.
          </div>
        </div>
        <div className="bg-black self-stretch w-px shrink-0 h-[159px]" />
        <div className="text-white text-2xl font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-orange-600 self-center my-auto pl-7 pr-9 py-4 rounded-sm max-md:px-5">
          Get Started
        </div>
      </div>
    </div>
  </div>
  )
}

export default Subscribe