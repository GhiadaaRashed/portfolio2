import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Webdetails from './components/Webdetails/Webdetails'
function App() {
  return (
    <div  class="scroll-smooth font-mono p-0 m-0 box-border bg-slate-50">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Webdetails/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
