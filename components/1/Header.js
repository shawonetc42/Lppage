import React from 'react'

function Header() {
  return (
    <div className="items-center bg-white flex flex-col justify-center px-16 py-6 max-md:px-5">
      <div className="flex w-full max-w-[1176px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/776fd738e222b1761ca2ce5bab083fa86e968426f24d3364d18d1484c7edd01d?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/776fd738e222b1761ca2ce5bab083fa86e968426f24d3364d18d1484c7edd01d?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/776fd738e222b1761ca2ce5bab083fa86e968426f24d3364d18d1484c7edd01d?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/776fd738e222b1761ca2ce5bab083fa86e968426f24d3364d18d1484c7edd01d?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/776fd738e222b1761ca2ce5bab083fa86e968426f24d3364d18d1484c7edd01d?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/776fd738e222b1761ca2ce5bab083fa86e968426f24d3364d18d1484c7edd01d?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/776fd738e222b1761ca2ce5bab083fa86e968426f24d3364d18d1484c7edd01d?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/776fd738e222b1761ca2ce5bab083fa86e968426f24d3364d18d1484c7edd01d?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="aspect-[1.69] object-contain object-center w-[88px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="self-center flex items-start justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="text-orange-600 text-base font-semibold underline self-stretch whitespace-nowrap">
            Home
          </div>
          <div className="text-black text-base self-start">About</div>
          <div className="text-black text-base self-start">Services</div>
          <div className="text-black text-base self-start">Resources</div>
          <div className="text-black text-base whitespace-nowrap self-start">
            Projects
          </div>
        </div>
        <div className="text-white text-sm font-bold leading-4 whitespace-nowrap items-stretch bg-orange-600 self-center justify-center my-auto px-4 py-3.5 rounded-md">
          Contact us today
        </div>
      </div>
    </div>
  )
}

export default Header