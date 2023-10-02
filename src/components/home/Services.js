import React from 'react'
import S1 from '../../asset/s1.png'
import S2 from '../../asset/s2.png'
import S3 from '../../asset/s3.png'
import S4 from '../../asset/s4.png'

export default function Services() {
  return (
    <>
    <div id="services" className='twl-container-2xl twl-mb-32 max-[768px]:twl-mb-16'>
      <div className='leftright_content twl-max-w-screen-xl twl-mx-auto twl-container twl-w-full twl-justify-between twl-items-center twl-grid grid-cols-none twl-grid-cols-1'>
         
         <h1 className="twl-text-center twl-flex twl-text-5xl twl-font-bold twl-text-black twl-font-rubik twl-mx-auto twl-mb-6">SERVICES</h1>
         <p className="twl-w-1/2 max-[768px]:twl-w-4/5 twl-mx-auto twl-flex twl-text-lg twl-text-black twl-font-sans twl-font-normal">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

      </div>
      <div className='leftright_content twl-max-w-screen-xl twl-mx-auto twl-container twl-w-full twl-columns-4 max-[768px]:twl-columns-1 twl-justify-between twl-items-center twl-grid twl-grid-cols-4 max-[768px]:twl-grid-cols-1 twl-gap-6 max-[768px]:twl-gap-0 twl-mt-8'>
         
      <span className='twl-cursor-pointer hover:twl-shadow-2xl twl-mb-3 twl-py-5 twl-px-5'><img src={S1} alt="company logo warp" className='twl-mx-auto '/>
      <div className='twl-mx-auto twl-grid twl-text-lg twl-text-black twl-font-semibold twl-font-sans twl-uppercase twl-text-center twl-mt-6 twl-mb-6 twl-w-full'>Web Development</div>
      <p className="twl-mx-auto twl-flex twl-text-lg twl-text-black twl-font-sans twl-font-normal">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      
      </span>
      
      <span className='twl-cursor-pointer hover:twl-shadow-2xl twl-mb-3 twl-py-5 twl-px-5'><img src={S2} alt="company logo warp" className='twl-mx-auto '/>
      <div className='twl-mx-auto twl-grid twl-text-lg twl-text-black twl-font-semibold twl-font-sans twl-uppercase twl-text-center twl-mt-6 twl-mb-6 twl-w-full'>UI/UX Development</div>
      <p className="twl-mx-auto twl-flex twl-text-lg twl-text-black twl-font-sans twl-font-normal">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </span>

      <span className='twl-cursor-pointer hover:twl-shadow-2xl twl-mb-3 twl-py-5 twl-px-5'><img src={S3} alt="company logo warp" className='twl-mx-auto '/>
      <div className='twl-mx-auto twl-grid twl-text-lg twl-text-black twl-font-semibold twl-font-sans twl-uppercase twl-text-center twl-mt-6 twl-mb-6 twl-w-full'>Web Design</div>
      <p className="twl-mx-auto twl-flex twl-text-lg twl-text-black twl-font-sans twl-font-normal">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </span>

      <span className='twl-cursor-pointer hover:twl-shadow-2xl twl-mb-3 twl-py-5 twl-px-5'><img src={S4} alt="company logo warp" className='twl-mx-auto '/>
      <div className='twl-mx-auto twl-text-lg twl-text-black twl-font-semibold twl-font-sans twl-uppercase twl-text-center twl-mt-6 twl-mb-6 twl-grid'>SEO Optimization</div>
      <p className="twl-mx-auto twl-flex twl-text-lg twl-text-black twl-font-sans twl-font-normal">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </span>
          

      </div>
      </div>
    </>
  )
}
