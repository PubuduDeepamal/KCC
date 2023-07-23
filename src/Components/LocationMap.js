
import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import '../Css/LocationMap.css';

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
        <LoadScript googleMapsApiKey="6MV27JRP+PQ">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
            <Marker position={center} />
        </GoogleMap>
        </LoadScript>
    </main>

  );
};

export default GoogleMapComponent;
