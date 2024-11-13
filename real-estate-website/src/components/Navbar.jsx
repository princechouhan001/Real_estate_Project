import React from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between item-center py-4 px-6 md:px20 lg:px32 bg-transparent'>
        <img src={assets.logo} alt="" />
        <ul>
            <a href="#Header" className='cursor-pointer hover:text-grey-400'>Home</a>
            <a href="#Header" className='cursor-pointer hover:text-grey-400'>About</a>
            <a href="#Header" className='cursor-pointer hover:text-grey-400'>Projects</a>
            <a href="#Header" className='cursor-pointer hover:text-grey-400'>Testiomonials</a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Signup</button>
      </div>
    </div>
  )
}

export default Navbar
