import React from 'react';
import bannerContentRight from '../../asset/banner_content_right.png'
import './banner.css';

export default function BannerSection() {
  return (
    <>
    <div className='twl-container-2xl twl-bg-bannerBackgroundTransparent twl-bg-cover twl-bg-no-repeat twl-mb-32'>
      <div className='banner_content twl-max-w-screen-xl twl-mx-auto twl-container twl-columns-3 twl-justify-between twl-uppercase twl-items-center twl-grid twl-grid-cols-3 max-[768px]:twl-pt-32 max-[768px]:twl-px-4'>
        
        <div className='twl-col-span-2 twl-text-left  twl-flex twl-flex-col max-[768px]:twl-col-span-3'>
             <h3 className='twl-items-center twl-text-4xl twl-font-rubik twl-font-semibold afterline  twl-w-full twl-flex '>Hello</h3>
             <h1 className='twl-text-7xl twl-font-rubik twl-font-semibold twl-w-full max-[768px]:twl-text-5xl max-[768px]:twl-py-2'>I am Developer</h1>
             <p className='twl-text-3xl twl-font-rubik twl-font-semibold twl-w-full max-[768px]:twl-text-xl'>Senior ReactJs Developer</p>
             <div className='twl-flex twl-py-2 twl-columns-3 twl-gap-8 twl-mt-3 max-[768px]:twl-hidden'>
                   <button className='twl-rounded-md twl-py-3 twl-px-6 twl-bg-purpel twl-text-white twl-text-xl'> Hire Me</button>
                   <button className='twl-rounded-md twl-py-3 twl-px-6 twl-bg-white twl-border-purpel twl-border-2 twl-text-xl twl-text-purpel'>Contact Us</button>
             </div>
        </div>
        <div className=' twl-text-left twl-flex max-[768px]:twl-hidden'>
           <img src={bannerContentRight} alt="banner right content" className='twl-pt-36'/>
        </div>

      </div>
      </div>
    </>
  )
}
