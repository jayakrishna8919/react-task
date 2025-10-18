import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topnavbar from './Topnavbar'
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
    <Topnavbar/>
    <Navbar/>
    <Banner/>
    <Footer/>
    </div>
  )
}

export default App
