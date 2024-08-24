import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import White from '../public/white'
import Logo from '../public/logo'
import Hamburger from '../public/hamburger'
import Sectiontwo from '../public/Sectiontwo'

function App() {
  

  return (
    <>
    {/* first section  */}
     <div className='bg-black text-white  h-screen max-w-full'>
      <div className='flex pt-8 px-4 justify-between  w-full'>
      <Logo/>
      <div  className='absolute hidden md:inline  text-white text-xl top-[10%] left-[70%]'> <div className='inline mx-8 hover:text-green-500'>Share prescription</div>
      <div className='inline hover:text-green-500'>Compare medicines</div></div>
      <Hamburger/>
      </div>
      <div className=' absolute top-[30%] md:w-1/2 md:block md:left-[10%] md:top-[35%]  w-full flex flex-col justify-center items-center absolute'>
      <div className='text-2xl text-white xs:text-3xl'>Save Tons of money</div>
      <div className='text-white  text-sm xs:text-xl'>By compairing medicines</div>
      <button className='bg-[#2BD2B4] px-8 mt-2 py-2 rounded text-white xs:mt-4 xs:text-xl'>Join now</button>
      </div>
      <div className="relative md:top-[23%] md:overflow-x-hidden w-full top-[45%] xs:top-[58%]">
      <White/> 
      <div className="bg-black text-xl px-4 py-6 md:w-1/3 md:py-16 md:left-[60%] md:bg-[#162022] md:top-[5%] w-5/6 ml-8 flex flex-col justify-center items-center absolute top-[40%] h-auto rounded-3xl "> Search for medicine/illness 
      <div className='flex items-start  mt-4 w-full'><input type='text' placeholder='Search..' className="bg-[#314E57] mb-4 ml-4 w-[85%] text-sm py-2 px-2"/>
      <button className="search"><img className='w-[50%]' src='https://img.icons8.com/?size=100&id=132&format=png&color=FFFFFF'/></button></div></div>
      </div>
     </div>
     {/* {2nd secton} */}
     <Sectiontwo/>
    </>
  )
}

export default App
