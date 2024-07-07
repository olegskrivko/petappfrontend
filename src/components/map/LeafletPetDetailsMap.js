// import React from 'react';
// import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { renderToStaticMarkup } from 'react-dom/server';

// // Custom icon for markers
// const customIcon = new L.DivIcon({
//   html: renderToStaticMarkup(<LocationOnIcon style={{ fontSize: 40, color: '#7F00FF' }} />),
//   className: 'custom-div-icon',
//   iconSize: [40, 47],
//   iconAnchor: [20, 47],
//   popupAnchor: [0, -47],
// });

// function LeafletPetDetailsMap({ pet, onAddLocation, onRemoveLocation }) {
//   return (
//     <div>
//       <MapContainer
//         style={{ height: '500px' }}
//         center={[pet.location.coordinates[1], pet.location.coordinates[0]]} // Center the map on the pet's location
//         zoom={7}
//         scrollWheelZoom={true}
//       >
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {/* Render a single marker for the pet */}
//         <Marker
//           key={pet._id}
//           position={[pet.location.coordinates[1], pet.location.coordinates[0]]} // Leaflet takes [latitude, longitude]
//           icon={customIcon}
//         >
//           <Popup offset={[0, 5]}>
//             <div style={{ textAlign: 'center' }}>
//               <a href={`/pets/${pet._id}`}>
//                 <img
//                   src={pet.mainImage}
//                   alt={pet._id}
//                   style={{
//                     width: '120px',
//                     height: '120px',
//                     borderRadius: '50%',
//                     border: '3px solid white',
//                     objectFit: 'cover',
//                   }}
//                 />
//               </a>
//             </div>
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// }

// export default LeafletPetDetailsMap;
// import React, { useState, useEffect } from 'react';

// import { MapContainer, Marker, TileLayer, Popup, useMap } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { renderToStaticMarkup } from 'react-dom/server';
// import PetsIcon from '@mui/icons-material/Pets';
// import PropTypes from 'prop-types';
// // Function to create a custom icon with a specified color
// const createCustomIcon = (color) =>
//   new L.DivIcon({
//     html: renderToStaticMarkup(<LocationOnIcon style={{ fontSize: 40, color }} />),
//     className: 'custom-div-icon',
//     iconSize: [40, 47],
//     iconAnchor: [20, 47],
//     popupAnchor: [0, -47],
//   });

// const MapCenterUpdater = ({ onAddLocation }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (onAddLocation) {
//       const center = map.getCenter();
//       onAddLocation(center);
//     }
//   }, [map, onAddLocation]);

//   return null;
// };

// MapCenterUpdater.propTypes = {
//   onAddLocation: PropTypes.func.isRequired,
// };

// function LeafletPetDetailsMap({ pet, onAddLocation, onRemoveLocation }) {
//   const mainIcon = createCustomIcon('#7F00FF'); // Main pet icon color
//   const historyIcon = createCustomIcon('#FF0000'); // History marker color
//   const newMarkerIcon = createCustomIcon('#00FF00'); // New marker color
//   const [newMarkerPosition, setNewMarkerPosition] = useState(null);

//   const handleAddLocation = (center) => {
//     setNewMarkerPosition([center.lat, center.lng]);

//     onAddLocation(center);
//   };

//   return (
//     <div>
//       <MapContainer
//         style={{ height: '500px' }}
//         center={[pet.location.coordinates[1], pet.location.coordinates[0]]} // Center the map on the pet's location
//         zoom={7}
//         scrollWheelZoom={true}
//       >
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {/* Render the main marker for the pet */}
//         <Marker
//           key={pet._id}
//           position={[pet.location.coordinates[1], pet.location.coordinates[0]]} // Leaflet takes [latitude, longitude]
//           icon={mainIcon}
//         >
//           <Popup offset={[0, 5]}>
//             <div style={{ textAlign: 'center' }}>
//               <a href={`/pets/${pet._id}`}>
//                 <img
//                   src={pet.mainImage}
//                   alt={pet._id}
//                   style={{
//                     width: '120px',
//                     height: '120px',
//                     borderRadius: '50%',
//                     border: '3px solid white',
//                     objectFit: 'cover',
//                   }}
//                 />
//               </a>
//             </div>
//           </Popup>
//         </Marker>
//         {/* Render markers for the location history */}

//         {pet.locationHistory &&
//           pet.locationHistory.map((location, index) => (
//             <Marker
//               key={`history-${index}`}
//               position={[location.location.coordinates[0], location.location.coordinates[1]]} // Leaflet takes [latitude, longitude]
//               icon={historyIcon}
//             >
//               <Popup offset={[0, 5]}>
//                 {/* <div style={{ textAlign: 'center' }}>
//                   <p>Previous Location</p>
//                 </div> */}
//               </Popup>
//             </Marker>
//           ))}
//         {/* Render the new marker if markerPosition is provided */}
//         {newMarkerPosition && (
//           <Marker position={newMarkerPosition} icon={newMarkerIcon}>
//             <Popup offset={[0, 5]}>
//               <div style={{ textAlign: 'center' }}>
//                 <p>New Location</p>
//               </div>
//             </Popup>
//           </Marker>
//         )}
//       </MapContainer>
//     </div>
//   );
// }

// export default LeafletPetDetailsMap;
// import React, { useState } from 'react';
// import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { renderToStaticMarkup } from 'react-dom/server';
// import PropTypes from 'prop-types';
// import AddMarkerButton from './AddMarkerButton'; // Import AddMarkerButton component

// // Function to create a custom icon with a specified color
// const createCustomIcon = (color) =>
//   new L.DivIcon({
//     html: renderToStaticMarkup(<LocationOnIcon style={{ fontSize: 40, color }} />),
//     className: 'custom-div-icon',
//     iconSize: [40, 47],
//     iconAnchor: [20, 47],
//     popupAnchor: [0, -47],
//   });

// // Component to display Leaflet map with markers
// function LeafletPetDetailsMap({ pet, onAddLocation }) {
//   const mainIcon = createCustomIcon('#7F00FF'); // Main pet icon color
//   const historyIcon = createCustomIcon('#FF0000'); // History marker color
//   const newMarkerIcon = createCustomIcon('#00FF00'); // New marker color
//   const [newMarkerPosition, setNewMarkerPosition] = useState(null);

//   const handleAddLocation = (center) => {
//     setNewMarkerPosition([center.lat, center.lng]);
//   };

//   return (
//     <MapContainer
//       style={{ height: '500px', position: 'relative' }}
//       center={[pet.location.coordinates[1], pet.location.coordinates[0]]} // Center the map on the pet's location
//       zoom={7}
//       scrollWheelZoom={true}
//     >
//       <TileLayer
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />

//       {/* Render the main marker for the pet */}
//       <Marker
//         key={pet._id}
//         position={[pet.location.coordinates[1], pet.location.coordinates[0]]} // Leaflet takes [latitude, longitude]
//         icon={mainIcon}
//       >
//         <Popup offset={[0, 5]}>
//           <div style={{ textAlign: 'center' }}>
//             <a href={`/pets/${pet._id}`}>
//               <img
//                 src={pet.mainImage}
//                 alt={pet._id}
//                 style={{
//                   width: '120px',
//                   height: '120px',
//                   borderRadius: '50%',
//                   border: '3px solid white',
//                   objectFit: 'cover',
//                 }}
//               />
//             </a>
//           </div>
//         </Popup>
//       </Marker>

//       {/* Render markers for the location history */}
//       {pet.locationHistory &&
//         pet.locationHistory.map((location, index) => (
//           <Marker
//             key={`history-${index}`}
//             position={[location.location.coordinates[1], location.location.coordinates[0]]} // Leaflet takes [latitude, longitude]
//             icon={historyIcon}
//           >
//             <Popup offset={[0, 5]}>{/* Additional content for history marker */}</Popup>
//           </Marker>
//         ))}

//       {/* Render the new marker if newMarkerPosition is set */}
//       {newMarkerPosition && (
//         <Marker position={newMarkerPosition} icon={newMarkerIcon}>
//           <Popup offset={[0, 5]}>
//             <div style={{ textAlign: 'center' }}>
//               <p>New Location Marker</p>
//             </div>
//           </Popup>
//         </Marker>
//       )}

//     </MapContainer>
//   );
// }

// LeafletPetDetailsMap.propTypes = {
//   pet: PropTypes.object.isRequired,
//   onAddLocation: PropTypes.func.isRequired,
// };

// export default LeafletPetDetailsMap;
import React, { useEffect, useRef } from 'react';
import { MapContainer, Marker, TileLayer, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { renderToStaticMarkup } from 'react-dom/server';
import PropTypes from 'prop-types';

// Function to create a custom icon with a specified color
const createCustomIcon = (color) =>
  new L.DivIcon({
    html: renderToStaticMarkup(<LocationOnIcon style={{ fontSize: 40, color }} />),
    className: 'custom-div-icon',
    iconSize: [40, 47],
    iconAnchor: [20, 47],
    popupAnchor: [0, -47],
  });

const MapWrapper = ({ onMapLoad }) => {
  const map = useMap();
  useEffect(() => {
    onMapLoad(map);
  }, [map, onMapLoad]);

  return null;
};

function LeafletPetDetailsMap({ pet, markerPosition, onMapLoad, onAddLocation }) {
  const mainIcon = createCustomIcon('#7F00FF');
  const historyIcon = createCustomIcon('#FF0000');
  const newMarkerIcon = createCustomIcon('#00FF00');

  return (
    <MapContainer
      style={{ height: '500px', position: 'relative' }}
      center={[pet.location.coordinates[1], pet.location.coordinates[0]]}
      zoom={7}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        key={pet._id}
        position={[pet.location.coordinates[1], pet.location.coordinates[0]]}
        icon={mainIcon}
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

      {pet.locationHistory &&
        pet.locationHistory.map((location, index) => (
          <Marker
            key={`history-${index}`}
            position={[location.location.coordinates[1], location.location.coordinates[0]]}
            icon={historyIcon}
          >
            <Popup offset={[0, 5]}>{/* Additional content for history marker */}</Popup>
          </Marker>
        ))}

      {markerPosition && (
        <Marker position={markerPosition} icon={newMarkerIcon}>
          <Popup offset={[0, 5]}>
            <div style={{ textAlign: 'center' }}>
              <p>New Location Marker</p>
            </div>
          </Popup>
        </Marker>
      )}

      {/* Pass the map instance to the parent component */}
      <MapWrapper onMapLoad={onMapLoad} />
    </MapContainer>
  );
}

LeafletPetDetailsMap.propTypes = {
  pet: PropTypes.object.isRequired,
  markerPosition: PropTypes.object,
  onAddLocation: PropTypes.func.isRequired,
};

export default LeafletPetDetailsMap;
