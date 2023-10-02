import React from 'react'
import Newsletter from '../components/Newsletter';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";

export default function Footer() {
  return (
     <>
     <div className='footer twl-mx-auto twl-py-16 twl-px-4 max-[769px]:twl-px-4'>
             <Newsletter />

             <div className='twl-mx-auto twl-py-8 twl-px-4'>
                <div className='logo twl-inline-block twl-w-full twl-mb-7'>
                  <Link to="/" className='twl-text-purpel twl-text-2xl twl-font-rubik'> DProject </Link>
                </div>
                <div className=' twl-w-full twl-mb-7'>
                    <Link to="/" className='twl-font-rubik twl-text-lg twl-text-black twl-font-medium twl-uppercase'> Follow Me </Link>
                </div>
                <div className='twl-w-64 twl-mb-7 twl-columns-4 twl-mx-auto twl-font-rubik'>

                <Link to="/" className='twl-font-rubik twl-text-lg twl-text-lightgray hover:twl-text-lightpurpel twl-font-md twl-uppercase'> <FaFacebookF /> </Link>
                <Link to="/" className='twl-font-rubik twl-text-lg twl-text-lightgray hover:twl-text-lightpurpel twl-font-md twl-uppercase'> <FaTwitter /> </Link>
                <Link to="/" className='twl-font-rubik twl-text-lg twl-text-lightgray hover:twl-text-lightpurpel twl-font-md twl-uppercase'> <FaDribbble /> </Link>
                <Link to="/" className='twl-font-rubik twl-text-lg twl-text-lightgray hover:twl-text-lightpurpel twl-font-md twl-uppercase'> <FaBehance /> </Link>
                </div>

                <div className='twl-flex twl-w-64 twl-mb-7 twl-mx-auto twl-font-sans twl-text-lightgray'>Copyright ©2023 All rights reserved</div>
                
             </div>
             
     </div>
     
     </>
  )
}
