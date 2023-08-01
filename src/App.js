
import {BrowserRouter as Link, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Booking from './pages/Booking'
import Locatin from './pages/Locatin'
import Contacut from './pages/Contacut'
import AdminLogin from './pages/Admin/AdminLogin'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/Locatin' element = {<Locatin/>}/>
        <Route path='/contacut' element = {<Contacut/>}/>
        <Route path='/booking' element = {<Booking/>}/>
        <Route path='/AdminLogin' element = {<AdminLogin/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;