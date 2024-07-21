// import React, { useEffect, useRef } from 'react';
// import { MapContainer, Marker, TileLayer, Popup, useMap } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { renderToStaticMarkup } from 'react-dom/server';
// import PropTypes from 'prop-types';
// import PetsIcon from '@mui/icons-material/Pets';
// import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
// // Function to create a custom icon with a specified color
// const createCustomIcon = (color) =>
//   new L.DivIcon({
//     html: renderToStaticMarkup(<LocationOnIcon style={{ fontSize: 40, color }} />),
//     className: 'custom-div-icon',
//     iconSize: [40, 47],
//     iconAnchor: [20, 47],
//     popupAnchor: [0, -47],
//   });

// const createCustomMainIcon = (color) =>
//   new L.DivIcon({
//     html: renderToStaticMarkup(<PetsIcon style={{ fontSize: 40, color }} />),
//     className: 'custom-div-icon',
//     iconSize: [40, 47],
//     iconAnchor: [20, 47],
//     popupAnchor: [0, -47],
//   });

// const createCustomAddNewIcon = (color) =>
//   new L.DivIcon({
//     html: renderToStaticMarkup(<AddLocationAltIcon style={{ fontSize: 40, color }} />),
//     className: 'custom-div-icon',
//     iconSize: [40, 47],
//     iconAnchor: [20, 47],
//     popupAnchor: [0, -47],
//   });

// const MapWrapper = ({ onMapLoad }) => {
//   const map = useMap();
//   useEffect(() => {
//     onMapLoad(map);
//   }, [map, onMapLoad]);

//   return null;
// };

// function LeafletPetDetailsMap({
//   pet,
//   markerPosition,
//   onMapLoad,
//   setMarkerPosition,
//   handleZoomMap,
//   onAddLocation,
// }) {
//   const mainIcon = createCustomMainIcon('#0077B6');
//   const historyIcon = createCustomIcon('#0077B6');
//   const newMarkerIcon = createCustomAddNewIcon('#7F00FF');

//   // setMarkerPosition
//   //409180
//   //40916C
//   return (
//     <MapContainer
//       style={{ height: '500px', position: 'relative' }}
//       center={[pet.location.coordinates[1], pet.location.coordinates[0]]}
//       zoom={14}
//       scrollWheelZoom={true}
//     >
//       <TileLayer
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />

//       <Marker
//         key={pet._id}
//         position={[pet.location.coordinates[1], pet.location.coordinates[0]]}
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

//       {pet.locationHistory &&
//         pet.locationHistory.map((location, index) => (
//           <Marker
//             key={`history-${index}`}
//             position={[location.location.coordinates[1], location.location.coordinates[0]]}
//             icon={historyIcon}
//           >
//             <Popup offset={[0, 5]}>{/* Additional content for history marker */}</Popup>
//           </Marker>
//         ))}

//       {markerPosition && (
//         <Marker
//           position={markerPosition}
//           icon={newMarkerIcon}
//           draggable={true}
//           eventHandlers={{
//             dragend: (e) => {
//               const marker = e.target;
//               const newPosition = [marker.getLatLng().lat, marker.getLatLng().lng];
//               setMarkerPosition(newPosition); // Update marker position in parent component
//             },
//           }}
//         >
//           <Popup offset={[0, 5]}>
//             <div style={{ textAlign: 'center' }}>
//               <p>New Location Marker</p>
//             </div>
//           </Popup>
//         </Marker>
//       )}

//       {/* Pass the map instance to the parent component */}
//       <MapWrapper onMapLoad={onMapLoad} />
//     </MapContainer>
//   );
// }

// LeafletPetDetailsMap.propTypes = {
//   pet: PropTypes.object.isRequired,
//   markerPosition: PropTypes.object,
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
import PetsIcon from '@mui/icons-material/Pets';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import moment from 'moment';

import { useTranslation } from 'react-i18next';
const createCustomIcon = (color) =>
  new L.DivIcon({
    html: renderToStaticMarkup(<LocationOnIcon style={{ fontSize: 40, color }} />),
    className: 'custom-div-icon',
    iconSize: [40, 47],
    iconAnchor: [20, 47],
    popupAnchor: [0, -47],
  });

const createCustomMainIcon = (color) =>
  new L.DivIcon({
    html: renderToStaticMarkup(<PetsIcon style={{ fontSize: 40, color }} />),
    className: 'custom-div-icon',
    iconSize: [40, 47],
    iconAnchor: [20, 47],
    popupAnchor: [0, -47],
  });

const createCustomAddNewIcon = (color) =>
  new L.DivIcon({
    html: renderToStaticMarkup(<AddLocationAltIcon style={{ fontSize: 40, color }} />),
    className: 'custom-div-icon',
    iconSize: [40, 47],
    iconAnchor: [20, 47],
    popupAnchor: [0, -47],
  });

const MapWrapper = ({ onMapLoad, zoomPosition, handleZoomMap }) => {
  const map = useMap();
  useEffect(() => {
    onMapLoad(map);
  }, [map, onMapLoad]);

  return null;
};

function LeafletPetDetailsMap({
  pet,
  markerPosition,
  onMapLoad,
  setMarkerPosition,
  zoomPosition,
  handleZoomMap,
  onAddLocation,
}) {
  const mainIcon = createCustomMainIcon('#0077B6');
  const historyIcon = createCustomIcon('#0077B6');
  const newMarkerIcon = createCustomAddNewIcon('#7F00FF');
  const mapRef = useRef();

  const onMapLoadHandler = (mapInstance) => {
    mapRef.current = mapInstance;
    if (onMapLoad) {
      onMapLoad(mapInstance);
    }
  };
  const { t } = useTranslation();
  useEffect(() => {
    if (mapRef.current && zoomPosition && zoomPosition.coordinates) {
      mapRef.current.setView([zoomPosition.coordinates[1], zoomPosition.coordinates[0]], 14);
      console.log('Panning to:', zoomPosition.coordinates);
    }
  }, [zoomPosition]);

  // Component to update the map center and zoom level
  // const MapUpdater = ({ zoomPosition }) => {
  //   const map = useMap();

  //   useEffect(() => {
  //     if (zoomPosition) {
  //       console.log('zoomPosition', zoomPosition);
  //       map.setView(zoomPosition, 9); // Zoom to pet's location with a zoom level of 15
  //     }
  //   }, [zoomPosition, map]);

  //   return null;
  // };

  return (
    <MapContainer
      style={{ height: '500px', position: 'relative' }}
      center={[pet.location.coordinates[1], pet.location.coordinates[0]]}
      zoom={14}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <MapUpdater centerCoords={zoomPosition} /> */}
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
                {t('mapIconLabel.added')} {moment(location.date).fromNow()}
                {/* <img
                  src={pet.comments.image}
                  alt={pet.comments._id}
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    border: '3px solid white',
                    objectFit: 'cover',
                  }}
                /> */}
              </div>
              {/* <div style={{ textAlign: 'center' }}>
              
                <img
                  src={pet.comments.image}
                  alt={pet.comments._id}
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    border: '3px solid white',
                    objectFit: 'cover',
                  }}
                />
              </div> */}
            </Popup>
          </Marker>
        ))}

      {markerPosition && (
        <Marker
          position={markerPosition}
          icon={newMarkerIcon}
          draggable={true}
          eventHandlers={{
            dragend: (e) => {
              const marker = e.target;
              const newPosition = [marker.getLatLng().lat, marker.getLatLng().lng];
              setMarkerPosition(newPosition); // Update marker position in parent component
            },
          }}
        >
          <Popup offset={[0, 5]}>
            <div style={{ textAlign: 'center' }}>
              <p>New Location Marker</p>
            </div>
          </Popup>
        </Marker>
      )}

      <MapWrapper onMapLoad={onMapLoadHandler} />
    </MapContainer>
  );
}

LeafletPetDetailsMap.propTypes = {
  pet: PropTypes.object.isRequired,
  markerPosition: PropTypes.array,
  onMapLoad: PropTypes.func,
  setMarkerPosition: PropTypes.func.isRequired,
  handleZoomMap: PropTypes.func.isRequired,
  onAddLocation: PropTypes.func.isRequired,
};

export default LeafletPetDetailsMap;
