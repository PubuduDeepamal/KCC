// // App.js
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
//   const R = 6371; // Radius of the earth in km
//   const dLat = deg2rad(lat2 - lat1);
//   const dLon = deg2rad(lon2 - lon1);
//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   const distance = R * c; // Distance in km
//   return distance;
// }

// function deg2rad(deg) {
//   return deg * (Math.PI / 180);
// }

// function App() {
//   const [userLocation, setUserLocation] = useState(null);
//   const kandyLocation = { latitude: 7.2906, longitude: 80.6337 }; // Kandy, Sri Lanka

//   useEffect(() => {
//     // Get user's current location
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       },
//       (error) => console.error(error),
//       { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
//     );
//   }, []);

//   const calculateDistance = () => {
//     if (userLocation) {
//       const distance = getDistanceFromLatLonInKm(
//         userLocation.latitude,
//         userLocation.longitude,
//         kandyLocation.latitude,
//         kandyLocation.longitude
//       );
//       return distance.toFixed(2); // Round to two decimal places
//     }
//     return 'N/A';
//   };

//   return (
//     <div className="App">
//       <h1>Distance Calculator</h1>
//       <div className="location-info">
//         <h2>Your Current Location:</h2>
//         {userLocation ? (
//           <p>
//             Latitude: {userLocation.latitude}, Longitude: {userLocation.longitude}
//           </p>
//         ) : (
//           <p>Loading...</p>
//         )}

//         <h2>Fixed Location (Kandy, Sri Lanka):</h2>
//         <p>
//           Latitude: {kandyLocation.latitude}, Longitude: {kandyLocation.longitude}
//         </p>

//         <h2>Distance:</h2>
//         <p>{calculateDistance()} km</p>
//       </div>
//     </div>
//   );
// }

// export default App;
