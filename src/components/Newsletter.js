import React,{ useState} from 'react';  

export default function Newsletter() {

 const [placeholderHide, setPlaceholderHide ] = useState(false);

 const addClassEmail = () =>{
  setPlaceholderHide(true);
 }

 const removeClassEmail = () =>{
  setPlaceholderHide(false);
 }

  return (
    <>
    
    <div className='twl-container-2xl '>
     <div className='twl-container twl-mx-auto twl-py-8'>
        <div className="twl-grid-cols-3 twl-bg-newsLetterPattern twl-bg-no-repeat twl-mx-auto twl-py-40 twl-px-4 twl-bg-cover max-[769px]:twl-bg-center max-[769px]:twl-py-12">
                
                <div className='subscribe-box '>
                   <div className='twl-uppercase twl-text-white twl-font-bold twl-text-3xl twl-mb-5'>
                      get update from anywhere
                   </div>
                   <p className='twl-text-white twl-mb-12'>Bearing Void gathering light light his eavening unto dont afraid.</p>
                    <div className='twl-mx-auto twl-w-6/12 max-[769px]:twl-w-full'>
                        <form className='twl-grid-cols-3 twl-grid twl-gap-2 max-[769px]:twl-grid-cols-1 max-[769px]:twl-twl-gap-0'>
                          <div className='input-control twl-col-span-2'>
                            <input type="email" id="emailaddress"  placeholder={placeholderHide ? '' :'Email Address'} className={`twl-bg-transparent twl-text-white twl-border-solid twl-border twl-border-white twl-rounded-md twl-w-full twl-py-4 twl-px-4 twl-outline-none `} onFocus={addClassEmail} onBlur={removeClassEmail} />
                          </div>
                          <div className='input-control'>
                            <button type='button' className='twl-text-black twl-text-sm twl-bg-white twl-rounded-md twl-w-full twl-py-4 twl-px-3 twl-uppercase twl-font-semibold twl-border-solid twl-border-2 twl-border-black max-[769px]:twl-w-40'>Get Started</button>
                          </div>
                        </form>
                    </div>
                </div>

        </div>
     </div>
    </div>
    
    </>
  )
}
