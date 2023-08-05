import ContactHero from '../Components/Contact/ContactHero'
import Contactus from '../Components/Contact/Contactus'
import LocationMap from '../Components/Locatin/LocationMap'
import Header1 from '../Components/Heder/Header1'
import '../Css/Footer.css';
import Footer from '../Components/Footer/Footer';

function Contacut() {
  return (
    <div>
        <Header1/>
        <ContactHero/>
        <Contactus/>
        <LocationMap/>
        <Footer />
    </div>
  
  );
}

export default Contacut;
