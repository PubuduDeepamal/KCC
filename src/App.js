
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Header1 from './Components/Heder/Header1'
import Home from './pages/Home'
import About from './pages/About'
import Booking from './pages/Booking'
import Contacut from './pages/Contacut'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
     <Header1/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/booking' element = {<Booking/>}/>
        <Route path='/contacut' element = {<Contacut/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;