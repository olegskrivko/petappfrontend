import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { renderToStaticMarkup } from 'react-dom/server';
import WaterIcon from '@mui/icons-material/Water';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ForestIcon from '@mui/icons-material/Forest';

// Sample data for demonstration
const parksData = [
  { id: 1, name: 'City Park', coordinates: [56.946285, 24.008] },
  { id: 2, name: 'Central Park', coordinates: [56.9471, 24.1444] },
  { id: 3, name: 'Forest Park', coordinates: [56.962, 24.108] },
];

const publicWaterData = [
  { id: 1, name: 'Lake One', coordinates: [56.946, 24.105] },
  { id: 2, name: 'River Two', coordinates: [56.918, 24.115] },
  { id: 3, name: 'Pond Three', coordinates: [56.983, 24.085] },
];

const drinkingPlacesData = [
  { id: 1, name: 'Dog Cafe', coordinates: [56.9465, 24.1055] },
  { id: 2, name: 'Pet Friendly Bar', coordinates: [56.9485, 24.2155] },
  { id: 3, name: 'Water Station', coordinates: [56.9515, 24.1895] },
];

const createCustomIconForest = (color) =>
  new L.DivIcon({
    html: renderToStaticMarkup(<ForestIcon style={{ fontSize: 40, color }} />),
    className: 'custom-div-icon1',
    iconSize: [40, 47],
    iconAnchor: [20, 47],
    popupAnchor: [0, -47],
  });

const createCustomIconPublicWater = (color) =>
  new L.DivIcon({
    html: renderToStaticMarkup(<WaterIcon style={{ fontSize: 40, color }} />),
    className: 'custom-div-icon2',
    iconSize: [40, 47],
    iconAnchor: [20, 47],
    popupAnchor: [0, -47],
  });

const createCustomIconDrinkingPlace = (color) =>
  new L.DivIcon({
    html: renderToStaticMarkup(<WaterDropIcon style={{ fontSize: 40, color }} />),
    className: 'custom-div-icon3',
    iconSize: [40, 47],
    iconAnchor: [20, 47],
    popupAnchor: [0, -47],
  });

function Markers() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Function to create markers and add them to the map
    const addMarkersToMap = (data, customIcon) => {
      data.forEach((item) => {
        const { coordinates, name } = item;
        const marker = L.marker(coordinates, { icon: customIcon }).addTo(map);
        marker.bindPopup(name);
        console.log(`Added marker: ${name} at ${coordinates}`);
      });
    };

    // Add markers to the map with custom icons
    addMarkersToMap(parksData, createCustomIconForest('green'));
    addMarkersToMap(publicWaterData, createCustomIconPublicWater('blue'));
    addMarkersToMap(drinkingPlacesData, createCustomIconDrinkingPlace('orange'));
  }, [map]);

  return null;
}

function LeafletPetInfrastructureMap() {
  return (
    <MapContainer
      center={[56.946285, 24.105078]} // Example initial center
      zoom={12} // Example initial zoom level
      style={{ width: '100%', height: '500px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Markers />
    </MapContainer>
  );
}

export default LeafletPetInfrastructureMap;

// import React, { useEffect, useRef } from 'react';
// import { MapContainer, TileLayer, LayerGroup, Marker, Popup, LayersControl } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import { renderToStaticMarkup } from 'react-dom/server';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import WaterIcon from '@mui/icons-material/Water';
// import WaterDropIcon from '@mui/icons-material/WaterDrop';
// import ForestIcon from '@mui/icons-material/Forest';
// // Sample data for demonstration
// const parksData = [
//   { id: 1, name: 'City Park', coordinates: [56.946285, 24.008] },
//   { id: 2, name: 'Central Park', coordinates: [56.9471, 24.1444] },
//   { id: 3, name: 'Forest Park', coordinates: [56.962, 24.108] },
// ];

// const publicWaterData = [
//   { id: 1, name: 'Lake One', coordinates: [56.946, 24.105] },
//   { id: 2, name: 'River Two', coordinates: [56.918, 24.115] },
//   { id: 3, name: 'Pond Three', coordinates: [56.983, 24.085] },
// ];

// const drinkingPlacesData = [
//   { id: 1, name: 'Dog Cafe', coordinates: [56.9465, 24.1055] },
//   { id: 2, name: 'Pet Friendly Bar', coordinates: [56.9485, 24.2155] },
//   { id: 3, name: 'Water Station', coordinates: [56.9515, 24.1895] },
// ];

// // Function to create custom icon using Material-UI icon as HTML
// // const createCustomIcon = (color) =>
// //   new L.DivIcon({
// //     html: renderToStaticMarkup(<LocationOnIcon style={{ fontSize: 40, color }} />),
// //     className: 'custom-div-icon',
// //     iconSize: [40, 47],
// //     iconAnchor: [20, 47],
// //     popupAnchor: [0, -47],
// //   });

// const createCustomIconForest = (color) =>
//   new L.DivIcon({
//     html: renderToStaticMarkup(<ForestIcon style={{ fontSize: 40, color }} />),
//     className: 'custom-div-icon1',
//     iconSize: [40, 47],
//     iconAnchor: [20, 47],
//     popupAnchor: [0, -47],
//   });

// const createCustomIconPublicWater = (color) =>
//   new L.DivIcon({
//     html: renderToStaticMarkup(<WaterIcon style={{ fontSize: 40, color }} />),
//     className: 'custom-div-icon2',
//     iconSize: [40, 47],
//     iconAnchor: [20, 47],
//     popupAnchor: [0, -47],
//   });

// const createCustomIconDrinkingPLace = (color) =>
//   new L.DivIcon({
//     html: renderToStaticMarkup(<WaterDropIcon style={{ fontSize: 40, color }} />),
//     className: 'custom-div-icon3',
//     iconSize: [40, 47],
//     iconAnchor: [20, 47],
//     popupAnchor: [0, -47],
//   });

// function LeafletPetInfrastructureMap() {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     const map = mapRef.current;

//     if (!map) return;

//     // Create layer groups for different types of pet infrastructure
//     const parksLayer = new L.LayerGroup();
//     const publicWaterLayer = new L.LayerGroup();
//     const drinkingPlacesLayer = new L.LayerGroup();

//     // Function to create markers and add them to the respective layer
//     const addMarkersToLayer = (layer, data, customIcon) => {
//       data.forEach((item) => {
//         const { coordinates, name } = item;
//         const marker = L.marker(coordinates, { icon: customIcon }).bindPopup(name);
//         layer.addLayer(marker);
//       });
//     };

//     // Add markers to respective layers with custom icons
//     addMarkersToLayer(parksLayer, parksData, createCustomIconForest('green'));
//     addMarkersToLayer(publicWaterLayer, publicWaterData, createCustomIconPublicWater('blue'));
//     addMarkersToLayer(
//       drinkingPlacesLayer,
//       drinkingPlacesData,
//       createCustomIconDrinkingPLace('orange'),
//     );

//     // Add layers to the map
//     parksLayer.addTo(map);
//     publicWaterLayer.addTo(map);
//     drinkingPlacesLayer.addTo(map);

//     // Create control for switching layers
//     const baseLayers = {
//       Parks: parksLayer,
//       'Public Water': publicWaterLayer,
//       'Drinking Places': drinkingPlacesLayer,
//     };

//     L.control.layers(null, baseLayers).addTo(map);

//     return () => {
//       // Clean up layers when component unmounts
//       map.removeLayer(parksLayer);
//       map.removeLayer(publicWaterLayer);
//       map.removeLayer(drinkingPlacesLayer);
//     };
//   }, []);

//   return (
//     <MapContainer
//       ref={mapRef}
//       center={[56.946285, 24.105078]} // Example initial center
//       zoom={12} // Example initial zoom level
//       style={{ width: '100%', height: '500px' }}
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//     </MapContainer>
//   );
// }

// export default LeafletPetInfrastructureMap;

// import React, { useEffect, useRef } from 'react';
// import { MapContainer, TileLayer, LayerGroup, Marker, Popup, LayersControl } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// // Sample data for demonstration
// const parksData = [
//   { id: 1, name: 'City Park', coordinates: [56.946285, 24.105078] },
//   { id: 2, name: 'Central Park', coordinates: [56.9471, 24.1144] },
//   { id: 3, name: 'Forest Park', coordinates: [56.962, 24.068] },
// ];

// const publicWaterData = [
//   { id: 1, name: 'Lake One', coordinates: [56.946, 24.105] },
//   { id: 2, name: 'River Two', coordinates: [56.948, 24.115] },
//   { id: 3, name: 'Pond Three', coordinates: [56.953, 24.085] },
// ];

// const drinkingPlacesData = [
//   { id: 1, name: 'Dog Cafe', coordinates: [56.9465, 24.1055] },
//   { id: 2, name: 'Pet Friendly Bar', coordinates: [56.9485, 24.1155] },
//   { id: 3, name: 'Water Station', coordinates: [56.9515, 24.0895] },
// ];

// // Custom icons for markers
// const parkIcon = new L.Icon({
//   iconUrl: require('./location.svg').default,
//   iconSize: new L.Point(40, 40),
// });

// const waterIcon = new L.Icon({
//   iconUrl: require('./location.svg').default,
//   iconSize: new L.Point(40, 40),
// });

// const drinkingIcon = new L.Icon({
//   iconUrl: require('./location.svg').default,
//   iconSize: new L.Point(40, 40),
// });

// function LeafletPetInfrastructureMap() {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     const map = mapRef.current;

//     if (!map) return;

//     // Create layer groups for different types of pet infrastructure
//     const parksLayer = new L.LayerGroup();
//     const publicWaterLayer = new L.LayerGroup();
//     const drinkingPlacesLayer = new L.LayerGroup();

//     // Function to create markers and add them to the respective layer
//     const addMarkersToLayer = (layer, data, icon) => {
//       data.forEach((item) => {
//         const { coordinates, name } = item;
//         const marker = L.marker(coordinates, { icon }).bindPopup(name);
//         layer.addLayer(marker);
//       });
//     };

//     // Add markers to respective layers with custom icons
//     addMarkersToLayer(parksLayer, parksData, parkIcon);
//     addMarkersToLayer(publicWaterLayer, publicWaterData, waterIcon);
//     addMarkersToLayer(drinkingPlacesLayer, drinkingPlacesData, drinkingIcon);

//     // Add layers to the map
//     parksLayer.addTo(map);
//     publicWaterLayer.addTo(map);
//     drinkingPlacesLayer.addTo(map);

//     // Create control for switching layers
//     const baseLayers = {
//       Parks: parksLayer,
//       'Public Water': publicWaterLayer,
//       'Drinking Places': drinkingPlacesLayer,
//     };

//     L.control.layers(null, baseLayers).addTo(map);

//     return () => {
//       // Clean up layers when component unmounts
//       map.removeLayer(parksLayer);
//       map.removeLayer(publicWaterLayer);
//       map.removeLayer(drinkingPlacesLayer);
//     };
//   }, []);

//   return (
//     <MapContainer
//       ref={mapRef}
//       center={[56.946285, 24.105078]} // Example initial center
//       zoom={12} // Example initial zoom level
//       style={{ width: '100%', height: '500px' }}
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//     </MapContainer>
//   );
// }

// export default LeafletPetInfrastructureMap;
