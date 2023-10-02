import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
};

const openMenu = ()=>{
  setMobileMenuOpen(!mobileMenuOpen);
}

useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
}, []);
 
 
 
  return (
    <>

    <div id="headerwrapper" className={` ${scrollPosition > 90 ? 'fixednavbox max-[769px]:twl-duration-200 max-[769px]:twl-ease-out' : 'max-[769px]:twl-duration-100 max-[769px]:twl-ease-in' } max-[769px]:twl-px-4 twl-container-2xl twl-font-rubik max-[769px]:twl-bg-black  twl-bg-white [&.fixednavbox]:twl-drop-shadow-xl [&.fixednavbox]:twl-fixed twl-left-0 twl-right-0 twl-z-50`}>
        <div className='twl-mx-auto twl-py-5 twl-grid twl-grid-cols-3 twl-gap-1 twl-container max-w-screen-xl'>

        
    
    <div className='logo twl-columns-155 twl-inline-block twl-columns-1  twl-text-left'>
     <Link to="/" className='twl-text-purpel twl-text-2xl'> DProject </Link>
    </div>

    <div class="max-[769px]:twl-block max-[769px]:twl-order-1 min-[769px]:twl-hidden twl-col-span-2 twl-float-right">
     <button onClick={openMenu} data-collapse-toggle="navbar-sticky" type="button" class="twl-float-right twl-inline-flex twl-items-center twl-p-2 twl-w-10 twl-h-10 twl-justify-center twl-text-sm twl-text-gray-500 twl-rounded-lg min-[769px]:twl-hidden hover:twl-bg-gray-100 focus:twl-outline-none focus:twl-ring-2 focus:twl-ring-gray-200 dark:twl-text-gray-400 dark:hover:twl-bg-gray-700 dark:focus:twl-ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <svg class="twl-w-5 twl-h-5 max-[769px]:twl-text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>

    <div className={` ${mobileMenuOpen ? "max-[769px]:twl-block max-[769px]:twl-duration-200 max-[769px]:twl-ease-out  " : "max-[769px]:twl-hidden max-[769px]:twl-duration-100 max-[769px]:twl-ease-in"} max-[769px]:twl-items-center max-[769px]:twl-justify-between twl-w-full max-[769px]:twl-order-1 max-[769px]:twl-w-full max-[769px]:twl-columns-auto max-[769px]:twl-col-span-3 navi twl-inline-block twl-columns-5 twl-col-span-2 twl-float-right twl-uppercase`}>

    <ul className='max-[769px]:twl-w-full max-[769px]:twl-bg-black max-[769px]:twl-flex-row  max-[769px]:twl-mt-0 max-[769px]:twl-border-0 dark:twl-bg-gray-800 max-[769px]:twl-bg-gray-900 max-[769px]:twl-text-left'>
        <li className='twl-py-2 twl-border-b twl-border-bocolor'>
        <NavLink className={({isActive})=> (isActive ? 'max-[769px]:twl-text-base max-[769px]:twl-font-medium  max-[769px]:twl-text-white active twl-font-semibold [&.active]:twl-text-purpel hover:twl-text-purpel' :'max-[769px]:twl-text-base max-[769px]:twl-font-medium max-[769px]:twl-text-white twl-font-semibold hover:twl-text-purpel')} to="/">Home</NavLink>
        </li>
        <li className='twl-py-2 twl-border-b twl-border-bocolor'>
        <HashLink className='max-[769px]:twl-text-base max-[769px]:twl-font-medium max-[769px]:twl-text-white twl-font-semibold hover:twl-text-purpel' to="/#about">About</HashLink>
        </li>
        <li className='twl-py-2 twl-border-b twl-border-bocolor'>
        <HashLink className='max-[769px]:twl-text-base max-[769px]:twl-font-medium max-[769px]:twl-text-white twl-font-semibold hover:twl-text-purpel' to="/#services">Services</HashLink>
        </li>
        <li className='twl-py-2 twl-border-b twl-border-bocolor'>
        <HashLink className='max-[769px]:twl-text-base max-[769px]:twl-font-medium max-[769px]:twl-text-white twl-font-semibold hover:twl-text-purpel' to="/#portfolio">Portfolio</HashLink>
        </li>
        <li className='twl-py-2'>
        <HashLink className='max-[769px]:twl-text-base max-[769px]:twl-font-medium max-[769px]:twl-text-white twl-font-semibold hover:twl-text-purpel' to="/#contact">Contact</HashLink>
        </li>
     </ul>

    </div>

    </div>
    </div>
    
    </>
  )
}
