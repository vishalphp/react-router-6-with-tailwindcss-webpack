import React, { useEffect, useState } from 'react'; 
import seoImage from '../../asset/seo.PNG';
import designImage from '../../asset/design.PNG';
import devlopImage from '../../asset/development.PNG'; 
import {BsPlus} from 'react-icons/bs';


export default function Portfolio() {

    const [categoryState, setCategoryState] = useState('');

const portfolioArr = [
    { id:1, name: 'minimal design', category: 'Animated', image: designImage},
    { id:2, name: 'maximal design', category: 'Animated', image: designImage},
    { id:3, name: 'minimal development', category: 'Development', image: devlopImage},
    { id:4, name: 'maximal development', category: 'Development', image: devlopImage},
    { id:5, name: 'minimal seo', category: 'Seo', image: seoImage},
    { id:6, name: 'minimal design', category: 'Animated', image: designImage},
    { id:7, name: 'minimal seo', category: 'Seo', image: seoImage},
    { id:8, name: 'minimal design', category: 'Animated', image: designImage},
    { id:9, name: 'minimal design', category: 'Animated', image: designImage},
    { id:10, name: 'maximal development', category: 'Development', image: devlopImage},
    { id:11, name: 'minimal seo', category: 'Seo', image: seoImage},
    { id:12, name: 'minimal development', category: 'Development', image: devlopImage},
    { id:13, name: 'minimal design', category: 'Animated', image: designImage},
    { id:14, name: 'minimal design', category: 'Animated', image: designImage},
    { id:15, name: 'minimal development', category: 'Development', image: devlopImage},
];
const categories = portfolioArr.map(item => item.category);
const uniqueCategories = [...new Set(categories)];

useEffect(()=>{
   //.values() 
    const [first] = uniqueCategories;
    setCategoryState(first);
},[uniqueCategories.length]);

const filterCategoryPortfolio = (e) =>{
   // console.log(e.target.dataset.category);
   setCategoryState(e.target.dataset.category);
   
}
//filter by category update
const categorySetPortfolio = portfolioArr.filter((cat) => categoryState.length ? cat.category ===  categoryState : cat);

    return (
     <>
     <div id="portfolio" className='twl-container-2xl twl-mb-8 max-[768px]:twl-px-4'>
     <div className='twl-max-w-screen-xl twl-mx-auto twl-container twl-w-full twl-justify-between twl-grid'>
     <h2 className="twl-text-left twl-flex twl-text-5xl max-[768px]:twl-text-5xl twl-font-bold twl-text-black twl-font-rubik twl-mx-auto twl-mb-20 twl-uppercase twl-w-full">
      quality work
      <br/>
      Recently done project 
     </h2>

    <div className={`listtab twl-justify-between twl-items-center twl-grid twl-grid-cols-${uniqueCategories.length} twl-gap-1`} >
    { 
     
        uniqueCategories.map((category, index) => 
        <><div key={index} className='categorytabs twl-text-base twl-font-normal twl-text-ptagcolor twl-text-left twl-cursor-pointer hover:twl-text-lightpurpel'><div data-category={category} onClick={filterCategoryPortfolio} className={`${categoryState === category ? 'active twl-text-purpel twl-font-semibold':''}`} > {category}</div></div></>)   
        }
    </div>
    </div>
     <div className='twl-max-w-screen-xl twl-mx-auto twl-columns-3 max-[768px]:twl-columns-1 twl-justify-between twl-items-center twl-grid twl-grid-cols-3 max-[768px]:twl-grid-cols-1 twl-gap-6 max-[768px]:twl-gap-0 twl-mt-8'>
     {
        categorySetPortfolio.map(prof => <><div className='loopwraper twl-mb-20 max-[768px]:twl-mb-8 twl-cursor-pointer' key={prof.id}><div className='image twl-mb-10 group twl-relative'><img src={prof.image} alt={`portfolio-${prof.id}`} /><div className='twl-text-9xl twl-text-white twl-absolute twl-bottom-0 twl-right-0 twl-left-0 twl-top-0 twl-w-full twl-bg-purpel twl-flex twl-flex-col twl-bg-fixed twl-justify-center twl-items-center twl-opacity-0 hover:twl-h-full hover:twl-opacity-75  twl-transition ease-out-in twl-delay-150 hover:twl-translate-y-1 hover:twl-scale-10 twl-duration-300'><BsPlus /></div></div><div className='portfname twl-mb-1 twl-text-left twl-text-lg twl-font-sans twl-font-semibold twl-uppercase'>{prof.name}</div><div className='category twl-mb-3 twl-text-left twl-text-base twl-font-sans twl-font-normal twl-capitalize'>{prof.category}, portfolio</div></div></>)
     }
     </div>
     </div>  
     </>
  )
}
