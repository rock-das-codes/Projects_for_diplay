import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import White from '../public/white'
import Logo from '../public/logo'
import Hamburger from '../public/hamburger'

function App() {
  

  return (
    <>
    {/* first section  */}
     <div className='bg-black text-white h-screen w-full'>
      <Logo/>
      <Hamburger/>
      <div className="relative top-[45%]">
      <White/>
      </div>
     </div>
     
    </>
  )
}

export default App
