import Hero from '../Components/Home/Hero'
import Homepart1 from '../Components/Home/Homepart1'
import Home2 from '../Components/Home/Home2'
import Home3 from '../Components/Home/Home3'
import ParkingRates from '../Components/Home/ParkingRates'
import Header1 from '../Components/Heder/Header1'
import '../Css/Footer.css';

function Home() {
  return (
    <div>
      <Header1/>
      <Hero/>
      <Homepart1/>
      <Home2/>
      <Home3/>
      <ParkingRates/>
    </div>
    
  );
}

export default Home;
