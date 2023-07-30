
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Header1 from './Components/Heder/Header1'
import Home from './pages/Home'
import About from './pages/About'
import Booking from './pages/Booking'
import Locatin from './pages/Locatin'
import Contacut from './pages/Contacut'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
     <Header1/>
      <Routes>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/Locatin' element = {<Locatin/>}/>
        <Route path='/contacut' element = {<Contacut/>}/>
        <Route path='/booking' element = {<Booking/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;