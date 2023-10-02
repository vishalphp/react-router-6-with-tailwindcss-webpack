import React from 'react'
import './contactus.css'
import ProfileCompanyLogoImage from '../../asset/png-transparent-man.png'
import {FaPhone} from "react-icons/fa6";


export default function ContactUs() {
  return (
    <div id="contact" className='twl-container-2xl twl-mb-32'>
    <div className='leftright_content twl-gap-64 max-[768px]:twl-gap-0 twl-max-w-screen-xl twl-mx-auto twl-container twl-columns-2 max-[768px]:twl-columns-1 twl-justify-between twl-items-center twl-grid twl-grid-cols-2 max-[768px]:twl-grid-cols-1 twl-pr-16 max-[768px]:twl-pr-0'>
      
    <div className=' twl-text-left twl-grid twl-grid-cols-3 max-[768px]:twl-grid-cols-1 twl-gap-5 max-[768px]:twl-gap-0 max-[768px]:twl-mx-auto max-[768px]:twl-w-3/4 max-[768px]:twl-mb-16'>
       <span className='companylogowrap twl-cursor-pointer twl-border twl-border-bordercolor hover:twl-border-transparent hover:twl-shadow-xl twl-mb-3 max-[768px]:twl-mx-auto'><img src={ProfileCompanyLogoImage} alt="company logo warp" className=' '/></span>
       <span className='companylogowrap twl-cursor-pointer twl-border twl-border-bordercolor hover:twl-border-transparent hover:twl-shadow-xl twl-mb-3 max-[768px]:twl-mx-auto'><img src={ProfileCompanyLogoImage} alt="company logo warp" className=' '/></span>
       <span className='companylogowrap twl-cursor-pointer twl-border twl-border-bordercolor hover:twl-border-transparent hover:twl-shadow-xl twl-mb-3 max-[768px]:twl-mx-auto'><img src={ProfileCompanyLogoImage} alt="company logo warp" className=' '/></span>
       <span className='companylogowrap twl-cursor-pointer twl-border twl-border-bordercolor hover:twl-border-transparent hover:twl-shadow-xl twl-mb-3 max-[768px]:twl-mx-auto'><img src={ProfileCompanyLogoImage} alt="company logo warp" className=' '/></span>
       <span className='companylogowrap twl-cursor-pointer twl-border twl-border-bordercolor hover:twl-border-transparent hover:twl-shadow-xl twl-mb-3 max-[768px]:twl-mx-auto'><img src={ProfileCompanyLogoImage} alt="company logo warp" className=' '/></span>
       <span className='companylogowrap twl-cursor-pointer twl-border twl-border-bordercolor hover:twl-border-transparent hover:twl-shadow-xl twl-mb-3 max-[768px]:twl-mx-auto'><img src={ProfileCompanyLogoImage} alt="company logo warp" className=' '/></span>
    </div>

    <div className='twl-text-left  twl-flex twl-flex-col twl-columns-1'>
           <div className='twl-mb-20 max-[768px]:twl-mb-16 twl-relative twl-grid twl-grid-cols-3 max-[768px]:twl-grid-cols-1 twl-columns-2 max-[768px]:twl-columns-1 twl-py-2 twl-mt-3 twl-align-middle twl-text-center'>
              <div className='twl-relative iconbox twl-text-8xl twl-font-rubik twl-font-extrabold twl-text-lightpurpel max-[768px]:twl-mb-12'>
                10
              </div>
              <div className='textbox twl-col-span-2 twl-text-left twltext-black twl-font-sans twl-font-semibold twl-text-xl max-[768px]:twl-mx-auto'>
                 Years <br/>Experience <br/> Working
              </div>
            </div>

            <div className='twl-relative twl-grid twl-grid-cols-3 max-[768px]:twl-grid-cols-1 twl-columns-2 max-[768px]:twl-columns-1 twl-py-2 twl-mt-3 twl-align-middle twl-text-center'>
              <div className='twl-relative twl-text-6xl twl-font-rubik twl-font-extrabold twl-text-black max-[768px]:twl-text-center max-[768px]:twl-mx-auto max-[768px]:twl-mb-12'>
                <FaPhone />
              </div>
              <div className='textbox twl-columns-1 twl-text-left twltext-black twl-font-sans twl-font-normal twl-text-lg max-[768px]:twl-text-center max-[768px]:twl-mx-auto'>
                 <span className='twl-w-full twl-flex twl-flex-col twl-text-lightpurpel'>Call Us Now</span>
                 <span className='twl-w-full twl-flex twl-flex-col twl-font-semibold twl-text-3xl'>(+91)-84xxxxxx45</span>
              </div>
            </div>
    </div>
    

    </div>
    </div>
  )
}
