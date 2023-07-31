
import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import '../../Css/LocationMap.css';

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 7.2918,
  lng: 80.63696
};

const GoogleMapComponent = () => {
  return (
    <main id="mapeliment">
        <h1 id="parkingtitle"><b>Parking Location</b></h1>
        <iframe width="100%" height="391" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas"  className="map" src="https://maps.google.com/maps?width=1920&amp;height=391&amp;hl=en&amp;q=Sri%20Wickrama%20Rajasinghe%20Mawatha,%20Kandy%20kandy+(KCC%20Car%20Park)&amp;t=p&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

    </main>

  );
};

export default GoogleMapComponent;
