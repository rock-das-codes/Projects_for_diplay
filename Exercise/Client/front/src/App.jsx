import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './component/posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Posts/>
    </>
  )
}

export default App
