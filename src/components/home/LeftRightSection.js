import React from 'react'
import leftSectionImage from '../../asset/about-us.png'

export default function LeftRightSection() {
  return (
    <div  id="about" className='twl-container-2xl twl-mb-32 '>
    <div className='leftright_content twl-gap-64 max-[768px]:twl-gap-0 twl-max-w-screen-xl twl-mx-auto twl-container twl-columns-2 max-[768px]:twl-columns-1 twl-justify-between twl-items-center twl-grid twl-grid-cols-2 max-[768px]:twl-grid-cols-1 twl-pr-16 max-[768px]:twl-pr-none max-[768px]:twl-px-4'>
      
    <div className=' twl-text-left twl-flex max-[768px]:twl-hidden'>
    <img src={leftSectionImage} alt="banner left content" className=' '/>
        </div>

      <div className='twl-text-left  twl-flex twl-flex-col'>
           <h2 className='twl-items-center twl-text-5xl twl-leading-10 twl-font-rubik twl-font-bold twl-w-full twl-flex  twl-uppercase twl-mb-4 max-[768px]:twl-text-5xl max-[768px]:twl-py-2'>Where <br/>does it come<br/> from?</h2>

           <p className='twl-text-base twl-font-sans twl-font-xs max-[768px]:twl-text-lg twl-leading-6 twl-w-full twl-mb-4 twl-text-ptagcolor'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin</p>
           <p className='twl-text-base twl-font-sans twl-font-xs max-[768px]:twl-text-lg twl-leading-6 twl-w-full twl-mb-4 twl-text-ptagcolor'> literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,</p>
           <p className='twl-text-base twl-font-sans twl-font-xs max-[768px]:twl-text-lg twl-leading-6 twl-w-full twl-mb-4 twl-text-ptagcolor'> from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
         
           <div className='twl-flex twl-py-2 twl-columns-3 twl-gap-8 max-[768px]:twl-gap-0 twl-mt-3'>
                 <button className='twl-rounded-md twl-py-3 twl-px-6 twl-bg-purpel twl-text-white twl-text-xl max-[768px]:twl-text-2xl max-[768px]:twl-mx-auto'> Download CV</button>
             </div>
      </div>
    

    </div>
    </div>
  )
}
