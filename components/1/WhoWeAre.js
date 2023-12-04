import React from 'react'

function WhoWeAre() {
  return (
    <div className="w-[1080px] h-[668px] mx-auto mt-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/10dd7a67ca15bb1eacab35197545bf3b1d0e03424d86289f3addb1169070257e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/10dd7a67ca15bb1eacab35197545bf3b1d0e03424d86289f3addb1169070257e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10dd7a67ca15bb1eacab35197545bf3b1d0e03424d86289f3addb1169070257e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/10dd7a67ca15bb1eacab35197545bf3b1d0e03424d86289f3addb1169070257e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/10dd7a67ca15bb1eacab35197545bf3b1d0e03424d86289f3addb1169070257e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10dd7a67ca15bb1eacab35197545bf3b1d0e03424d86289f3addb1169070257e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/10dd7a67ca15bb1eacab35197545bf3b1d0e03424d86289f3addb1169070257e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/10dd7a67ca15bb1eacab35197545bf3b1d0e03424d86289f3addb1169070257e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
            className="aspect-[0.98] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
          />
        </div>
        <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-stretch flex flex-col my-auto px-5 py-px max-md:max-w-full max-md:mt-10">
            <div className="text-orange-600 text-xl font-medium leading-5 tracking-[4.2px] whitespace-nowrap max-md:max-w-full">
              Who We Are
            </div>
            <div className="text-slate-900 text-5xl font-semibold leading-[67px] mt-8 max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
              Have A Project In Mind? Let’s Get To Work.
            </div>
            <div className="text-zinc-500 text-base leading-7 mt-14 max-md:max-w-full max-md:mt-10">
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium totam rem apereaque abillo
              inventore veritatis quasi architecto beatae
            </div>
            <div className="text-neutral-400 text-lg font-medium leading-5 mt-11 max-md:max-w-full max-md:mt-10">
              <ul>
                <li>Business Planning, Strategy</li>
              </ul>
            </div>
            <div className="text-neutral-400 text-lg font-medium leading-5 whitespace-nowrap mt-8 max-md:max-w-full">
              2. Financial Projections And Analysis
            </div>
            <div className="text-neutral-400 text-lg font-medium leading-5 whitespace-nowrap mt-8 max-md:max-w-full">
              3.International Business Opportunities
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre