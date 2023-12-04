import React from 'react'

function Consultations() {
  return (
    <div className="flex-col overflow-hidden relative flex min-h-[380px] justify-center mt-20 items-center px-16 py-12 max-md:px-5">
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aaf89fe098da2a9bc8ed0694f6cb5dc71f3266a41377d88f292bf1376f0afb8f?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf89fe098da2a9bc8ed0694f6cb5dc71f3266a41377d88f292bf1376f0afb8f?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf89fe098da2a9bc8ed0694f6cb5dc71f3266a41377d88f292bf1376f0afb8f?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf89fe098da2a9bc8ed0694f6cb5dc71f3266a41377d88f292bf1376f0afb8f?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf89fe098da2a9bc8ed0694f6cb5dc71f3266a41377d88f292bf1376f0afb8f?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf89fe098da2a9bc8ed0694f6cb5dc71f3266a41377d88f292bf1376f0afb8f?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf89fe098da2a9bc8ed0694f6cb5dc71f3266a41377d88f292bf1376f0afb8f?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf89fe098da2a9bc8ed0694f6cb5dc71f3266a41377d88f292bf1376f0afb8f?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
      className="absolute h-full w-full object-cover object-center inset-0"
    />
    <div className="relative w-full max-w-[1131px] mt-24 mb-14 max-md:max-w-full max-md:my-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[72%] max-md:w-full max-md:ml-0">
          <div className="text-white text-5xl font-bold leading-[63px] relative max-md:max-w-full max-md:mt-10">
            Get Free Consultations! We’re Ready to Work Together
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
          <div className="text-white text-2xl font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-orange-600 relative w-full my-auto px-7 py-7 rounded-sm max-md:mt-10 max-md:px-5">
            <a href="https://fintex-react.vercel.app/team" target="_blank">
              Get Free Consultations
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Consultations