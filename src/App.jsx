import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Newsapp from './components/Newsapp'
import './Style.css'
import Login from './components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Newsapp></Newsapp> */}
      <Login ></Login>
    </>
  )
}

export default App
