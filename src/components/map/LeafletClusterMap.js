// import React, { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { renderToStaticMarkup } from 'react-dom/server';

// const LeafletClusterMap = ({ pets }) => {
//   const mapRef = useRef(null);
//   const markers = useRef([]);

//   useEffect(() => {
//     const map = mapRef.current;

//     if (!map) return;

//     // Clear previous markers
//     markers.current.forEach((marker) => map.removeLayer(marker));
//     markers.current = [];

//     // Create markers and cluster group
//     const markersLayer = L.markerClusterGroup();

//     pets.forEach((pet) => {
//       const { _id, location, mainImage } = pet;
//       const { coordinates } = location;

//       if (coordinates && coordinates.length === 2) {
//         const iconElement = document.createElement('div');
//         const iconMarkup = renderToStaticMarkup(
//           <LocationOnIcon style={{ color: '#800080', fontSize: '2rem' }} />,
//         );
//         iconElement.innerHTML = iconMarkup;

//         const marker = L.marker(coordinates, { icon: L.divIcon({ html: iconElement }) }).bindPopup(
//           `<div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden;">
//                <a href='/pets/${_id}'>
//                  <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid white;
//                    background-image: url(${mainImage});
//                    background-size: cover;
//                    background-position: center;">
//                  </div>
//                </a>
//              </div>`,
//         );

//         markersLayer.addLayer(marker);
//         markers.current.push(marker);
//       }
//     });

//     // Add markers layer to the map
//     map.addLayer(markersLayer);

//     return () => {
//       map.removeLayer(markersLayer);
//     };
//   }, [pets]);

//   return (
//     <MapContainer
//       center={[24.105078, 56.946285]} // Example initial center
//       zoom={6} // Example initial zoom level
//       style={{ width: '100%', height: '500px' }}
//       whenCreated={(map) => (mapRef.current = map)}
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//     </MapContainer>
//   );
// };

// export default LeafletClusterMap;
// import React, { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import { MapContainer, TileLayer } from 'react-leaflet';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { renderToStaticMarkup } from 'react-dom/server';

// const LeafletClusterMap = ({ pets }) => {
//   const mapRef = useRef(null);
//   const markers = useRef([]);

//   useEffect(() => {
//     const map = mapRef.current;

//     if (!map) return;

//     console.log('Pets data:', pets);

//     // Clear previous markers
//     markers.current.forEach((marker) => map.removeLayer(marker));
//     markers.current = [];

//     // Create markers and cluster group
//     const markersLayer = L.markerClusterGroup();

//     pets.forEach((pet) => {
//       const { _id, location, mainImage } = pet;
//       const { coordinates } = location;

//       console.log('Pet coordinates:', coordinates);

//       if (coordinates && coordinates.length === 2) {
//         const iconElement = document.createElement('div');
//         const iconMarkup = renderToStaticMarkup(
//           <LocationOnIcon style={{ color: '#800080', fontSize: '2rem' }} />,
//         );
//         iconElement.innerHTML = iconMarkup;

//         const marker = L.marker(coordinates, { icon: L.divIcon({ html: iconElement }) }).bindPopup(
//           `<div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden;">
//                <a href='/pets/${_id}'>
//                  <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid white;
//                    background-image: url(${mainImage});
//                    background-size: cover;
//                    background-position: center;">
//                  </div>
//                </a>
//              </div>`,
//         );

//         markersLayer.addLayer(marker);
//         markers.current.push(marker);
//       }
//     });

//     // Add markers layer to the map
//     map.addLayer(markersLayer);

//     return () => {
//       map.removeLayer(markersLayer);
//     };
//   }, [pets]);

//   return (
//     <MapContainer
//       center={[56.946285, 24.105078]} // Example initial center
//       zoom={7} // Example initial zoom level
//       style={{ width: '100%', height: '500px' }}
//       whenCreated={(map) => (mapRef.current = map)}
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//     </MapContainer>
//   );
// };

// export default LeafletClusterMap;
// import React, { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { renderToStaticMarkup } from 'react-dom/server';

// const LeafletClusterMap = ({ pets }) => {
//   const mapRef = useRef(null);
//   const markers = useRef([]);

//   useEffect(() => {
//     const map = mapRef.current;

//     if (!map || !pets || pets.length === 0) return;

//     console.log('Pets data:', pets);

//     // Clear previous markers
//     markers.current.forEach((marker) => marker.remove());
//     markers.current = [];

//     pets.forEach((pet) => {
//       const { _id, location, mainImage } = pet;
//       const { coordinates } = location;

//       console.log('Pet coordinates:', coordinates);

//       if (coordinates && coordinates.length === 2) {
//         const iconElement = document.createElement('div');
//         const iconMarkup = renderToStaticMarkup(
//           <LocationOnIcon style={{ color: '#800080', fontSize: '2rem' }} />,
//         );
//         iconElement.innerHTML = iconMarkup;

//         const marker = L.marker([coordinates[1], coordinates[0]], {
//           icon: L.divIcon({ html: iconElement }),
//         }).bindPopup(
//           `<div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden;">
//              <a href='/pets/${_id}'>
//                <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid white;
//                  background-image: url(${mainImage});
//                  background-size: cover;
//                  background-position: center;">
//                </div>
//              </a>
//            </div>`,
//         );

//         marker.addTo(map);
//         markers.current.push(marker);
//       }
//     });

//     return () => {
//       markers.current.forEach((marker) => map.removeLayer(marker));
//     };
//   }, [pets]);

//   return (
//     <MapContainer
//       center={[56.946285, 24.105078]} // Example initial center
//       zoom={7} // Example initial zoom level
//       style={{ width: '100%', height: '500px' }}
//       whenCreated={(map) => (mapRef.current = map)}
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//     </MapContainer>
//   );
// };

// export default LeafletClusterMap;
// import React, { useState } from 'react';
// import { MapContainer, Marker, TileLayer } from 'react-leaflet';
// import L from 'leaflet';
// import MarkerClusterGroup from 'react-leaflet-cluster';

// import 'leaflet/dist/leaflet.css';

// // Custom icon for markers
// const customIcon = new L.Icon({
//   iconUrl: require('./location.svg').default,
//   iconSize: new L.Point(40, 47),
// });

// // Function to create custom cluster icons
// const createClusterCustomIcon = function (cluster) {
//   return new L.DivIcon({
//     html: `<span>${cluster.getChildCount()}</span>`,
//     className: 'custom-marker-cluster',
//     iconSize: L.point(33, 33, true),
//   });
// };

// function LeafletClusterMap() {
//   const [dynamicPosition, setDynamicPosition] = useState([41.051687, 28.987261]);

//   return (
//     <div>
//       <h1>Custom Marker Cluster</h1>
//       <button
//         onClick={() => {
//           // Example of changing the dynamic marker position
//           setDynamicPosition([40.051687, 28.987261]);
//         }}
//       >
//         Rerender Marker
//       </button>
//       <MapContainer
//         style={{ height: '500px' }}
//         center={[36.668754, 35.2433]}
//         zoom={4}
//         scrollWheelZoom={true}
//       >
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {/* MarkerClusterGroup for clustering markers */}
//         <MarkerClusterGroup
//           iconCreateFunction={createClusterCustomIcon} // Custom cluster icon function
//           maxClusterRadius={150}
//           spiderfyOnMaxZoom={true}
//           showCoverageOnHover={true}
//         >
//           {/* Individual Markers with custom icons */}
//           <Marker position={[36.668754, 29.104185]} icon={customIcon} />
//           <Marker position={[40.587613, 36.944535]} icon={customIcon} />
//           <Marker position={[40.614681, 43.121517]} icon={customIcon} />
//           <Marker position={[38.357641, 38.328708]} icon={customIcon} />

//           <Marker position={[39.931841, 32.876713]} icon={customIcon} />
//         </MarkerClusterGroup>
//       </MapContainer>
//     </div>
//   );
// }

// export default LeafletClusterMap;
// import React, { useState } from 'react';
// import { MapContainer, Marker, TileLayer } from 'react-leaflet';
// import L from 'leaflet';
// import MarkerClusterGroup from 'react-leaflet-cluster';
// import 'leaflet/dist/leaflet.css';

// // Custom icon for markers
// const customIcon = new L.Icon({
//   iconUrl: require('./location.svg').default,
//   iconSize: new L.Point(40, 47),
// });

// // Function to create custom cluster icons
// const createClusterCustomIcon = function (cluster) {
//   return new L.DivIcon({
//     html: `<span>${cluster.getChildCount()}</span>`,
//     className: 'custom-marker-cluster',
//     iconSize: L.point(33, 33, true),
//   });
// };

// function LeafletClusterMap({ pets }) {
//   // const [dynamicPosition, setDynamicPosition] = useState([41.051687, 28.987261]);

//   return (
//     <div>
//       {/* <h1>Custom Marker Cluster</h1>
//       <button
//         onClick={() => {
//           // Example of changing the dynamic marker position
//           setDynamicPosition([40.051687, 28.987261]);
//         }}
//       >
//         Rerender Marker
//       </button> */}
//       <MapContainer
//         style={{ height: '500px' }}
//         center={[56.946285, 24.105078]}
//         zoom={7}
//         scrollWheelZoom={true}
//       >
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {/* MarkerClusterGroup for clustering markers */}
//         <MarkerClusterGroup
//           iconCreateFunction={createClusterCustomIcon} // Custom cluster icon function
//           maxClusterRadius={150}
//           spiderfyOnMaxZoom={false}
//           showCoverageOnHover={false}
//         >
//           {/* Map through pets to render individual markers */}
//           {pets.map((pet) => (
//             <Marker
//               key={pet._id}
//               position={[pet.location.coordinates[1], pet.location.coordinates[0]]} // Leaflet takes [latitude, longitude]
//               icon={customIcon}
//             />
//           ))}
//         </MarkerClusterGroup>
//       </MapContainer>
//     </div>
//   );
// }

// export default LeafletClusterMap;
// import React, { useState, useEffect } from 'react';
// import { MapContainer, Marker, TileLayer, Popup, useMap } from 'react-leaflet';
// import L from 'leaflet';
// import MarkerClusterGroup from 'react-leaflet-cluster';
// import 'leaflet/dist/leaflet.css';

// // Custom icon for markers
// const customIcon = new L.Icon({
//   iconUrl: require('./location.svg').default,
//   iconSize: new L.Point(40, 47),
// });

// // Function to create custom cluster icons
// const createClusterCustomIcon = function (cluster) {
//   return new L.DivIcon({
//     html: `<span>${cluster.getChildCount()}</span>`,
//     className: 'custom-marker-cluster',
//     iconSize: L.point(33, 33, true),
//   });
// };

// function LeafletClusterMap({ pets, centerCoords }) {
//   const [mapCenter, setMapCenter] = useState(centerCoords || [56.946285, 24.105078]); // Initial center or center based on pet's coordinates
//   console.log('centerCoords', centerCoords);
//   // Hook to update map center when centerCoords prop changes
//   // Hook to update map center when centerCoords prop changes
//   useEffect(() => {
//     setMapCenter(centerCoords || [56.946285, 24.105078]); // Set initial center or center based on new coordinates
//   }, [centerCoords]);

//   // const map = useMap();

//   // const handleClick = () => {
//   //   map.setView(mapCenter, 15); // Zoom to pet's location with a zoom level of 15
//   // };

//   return (
//     <div>
//       <MapContainer style={{ height: '500px' }} center={mapCenter} zoom={7} scrollWheelZoom={true}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {/* MarkerClusterGroup for clustering markers */}
//         <MarkerClusterGroup
//           iconCreateFunction={createClusterCustomIcon} // Custom cluster icon function
//           maxClusterRadius={150}
//           spiderfyOnMaxZoom={false}
//           showCoverageOnHover={false}
//         >
//           {/* Map through pets to render individual markers */}
//           {pets.map((pet) => (
//             <Marker
//               key={pet._id}
//               position={[pet.location.coordinates[1], pet.location.coordinates[0]]} // Leaflet takes [latitude, longitude]
//               icon={customIcon}
//             >
//               <Popup offset={[0, 5]}>
//                 <div style={{ textAlign: 'center' }}>
//                   <a href={`/pets/${pet._id}`}>
//                     <img
//                       src={pet.mainImage}
//                       alt={pet._id}
//                       style={{
//                         width: '120px',
//                         height: '120px',
//                         borderRadius: '50%',
//                         border: '3px solid white',
//                         objectFit: 'cover',
//                       }}
//                     />
//                   </a>
//                 </div>
//               </Popup>
//             </Marker>
//           ))}
//         </MarkerClusterGroup>
//       </MapContainer>
//     </div>
//   );
// }

// LeafletClusterMap.js
import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, Marker, TileLayer, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';

// Custom icon for markers
const customIcon = new L.Icon({
  iconUrl: require('./location.svg').default,
  iconSize: new L.Point(40, 47),
});

// Icon for the user's location
const userLocationIcon = new L.Icon({
  iconUrl: require('./userlocation.svg').default, // Replace with your icon path
  iconSize: new L.Point(44, 44),
});

// Function to create custom cluster icons
const createClusterCustomIcon = function (cluster) {
  return new L.DivIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: L.point(33, 33, true),
  });
};

// Component to update the map center and zoom level
const MapUpdater = ({ centerCoords }) => {
  const map = useMap();

  useEffect(() => {
    if (centerCoords) {
      map.setView(centerCoords, 9); // Zoom to pet's location with a zoom level of 15
    }
  }, [centerCoords, map]);

  return null;
};

function LeafletClusterMap({ pets, centerCoords }) {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      },
      (error) => {
        console.error('Error getting location:', error);
      },
    );
  }, []);
  return (
    <div>
      <MapContainer
        style={{ height: '500px' }}
        center={[56.946285, 24.105078]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapUpdater centerCoords={centerCoords} />
        <MarkerClusterGroup
          iconCreateFunction={createClusterCustomIcon}
          maxClusterRadius={150}
          spiderfyOnMaxZoom={false}
          showCoverageOnHover={false}
        >
          {pets.map((pet) => (
            <Marker
              key={pet._id}
              position={[pet.location.coordinates[1], pet.location.coordinates[0]]}
              icon={customIcon}
            >
              <Popup offset={[0, 5]}>
                <div style={{ textAlign: 'center' }}>
                  <a href={`/pets/${pet._id}`}>
                    <img
                      src={pet.mainImage}
                      alt={pet._id}
                      style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        border: '3px solid white',
                        objectFit: 'cover',
                      }}
                    />
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
        {userLocation && (
          <Marker position={userLocation} icon={userLocationIcon}>
            <Popup offset={[0, 5]}>
              <div
                style={{
                  textAlign: 'center',
                  backgroundColor: 'slategray',
                  padding: '0.4rem 0.6rem',
                  borderRadius: '1rem',
                  color: 'white',
                  fontWeight: '500',
                }}
              >
                Your current location
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default LeafletClusterMap;
