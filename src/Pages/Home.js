import Hero from '../Components/Home/Hero'
import Homepart1 from '../Components/Home/Homepart1'
import Home2 from '../Components/Home/Home2'
import ParkingRates from '../Components/Home/ParkingRates'
import '../Css/Footer.css';

function Home() {
  return (
    <div>
      <Hero/>
      <Homepart1/>
      <Home2/>
      <ParkingRates/>
    </div>
    
  );
}

export default Home;
