
import Header1 from '../Components/Heder/Header1'
import Hero from '../Components/Home/Hero'
import Homepart1 from '../Components/Home/Homepart1'
import ParkingRates from '../Components/Home/ParkingRates'
import Footer from '../Components/Footer/Footer'
import '../Css/Footer.css';

function Home() {
  return (
    <div>
      <Header1/>
      <Hero/>
      <Homepart1/>
      <ParkingRates/>
      <Footer/>
    </div>
    
  );
}

export default Home;
