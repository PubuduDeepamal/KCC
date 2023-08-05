
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Locatin from './pages/Locatin';
import Contacut from './pages/Contacut';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashBord from './pages/Admin/AdminDashBord';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Locatin' element={<Locatin />} />
        <Route path='/contacut' element={<Contacut />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/AdminDashBord' element={<AdminDashBord/>} />
      </Routes>
    </>
  );
}

export default App;
