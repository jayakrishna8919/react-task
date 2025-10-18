import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topnavbar from './components/Topnavbar'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
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
