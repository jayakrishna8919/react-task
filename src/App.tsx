
import './App.css'
import Topnavbar from './Topnavbar'
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'
import Newarrivals from './Newarrivals'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
    <Topnavbar/>
    <Navbar/>
    <Banner/>
      <Newarrivals/>
    <Footer/>
    </div>
  )
}

export default App
