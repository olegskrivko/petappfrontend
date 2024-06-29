// import React, { useEffect, useRef, useState } from 'react';
// import tt from '@tomtom-international/web-sdk-maps';
// import '@tomtom-international/web-sdk-maps/dist/maps.css';
// import { TOMTOM_API } from '../../middleware/config';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { renderToStaticMarkup } from 'react-dom/server';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import CustomAlert from '../alert/CustomAlert';

// const TomTomMap = () => {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   const mapElement = useRef(null);
//   const map = useRef(null);

//   useEffect(() => {
//     if (map.current) return; // Initialize map only once

//     map.current = tt.map({
//       key: TOMTOM_API, // Replace with your TomTom API key
//       container: mapElement.current,
//       center: [24.105078, 56.946285], // Initial map center [longitude, latitude]
//       zoom: 6, // Initial zoom level
//     });

//     map.current.addControl(new tt.NavigationControl());

//     return () => {
//       if (map.current) {
//         map.current.remove();
//         map.current = null;
//       }
//     };
//   }, []);

//   return (
//     <div ref={mapElement} style={{ height: isLargeScreen ? '440px' : '250px', width: '100%' }} />
//   );
// };

// export default TomTomMap;
// import React, { useEffect, useRef, useState } from 'react';
// import tt from '@tomtom-international/web-sdk-maps';
// import '@tomtom-international/web-sdk-maps/dist/maps.css';
// import { TOMTOM_API } from '../../middleware/config';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { renderToStaticMarkup } from 'react-dom/server';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import CustomAlert from '../alert/CustomAlert';

// //const pets = { features: [...] }; // Add actual pet data here

// const TomTomClusterMap = ({ pets }) => {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   const mapElement = useRef(null);
//   const map = useRef(null);
//   const markersOnTheMap = useRef({});
//   const eventListenersAdded = useRef(false);

//   useEffect(() => {
//     if (map.current) return; // Initialize map only once

//     map.current = tt.map({
//       key: TOMTOM_API, // Replace with your TomTom API key
//       container: mapElement.current,
//       center: [24.105078, 56.946285], // Initial map center [longitude, latitude]
//       zoom: 6, // Initial zoom level
//     });

//     map.current.addControl(new tt.NavigationControl());
//     map.current.addControl(new tt.FullscreenControl());

//     var southwest = new tt.LngLat(18.059, 52.129);
//     var northeast = new tt.LngLat(30.425, 61.259);
//     var bounds = new tt.LngLatBounds(southwest, northeast);
//     // console.log(pets, 'pets');
//     map.current.setMaxBounds(bounds);

//     map.current.on('load', function () {
//       // Add points and clusters
//       console.log(pets, 'pets');
//       const points = pets.map((point, index) => ({
//         coordinates: [point.location.coordinates[0], point.location.coordinates[1]],
//         //id: point._id,
//         //image: point.mainImage ? point.mainImage : 'images/placeholder.jpg',
//         properties: {
//           id: index,
//           name: point.initialStatus,
//           img: point.mainImage ? point.mainImage : 'images/placeholder.jpg',
//           //petId: point._id,
//           //lostDate: point.lostdate,
//           species: point.category,
//         },
//       }));
//       console.log(points, 'points');
//       const geoJson = {
//         type: 'FeatureCollection',
//         features: points.map((point) => ({
//           type: 'Feature',
//           geometry: {
//             type: 'Point',
//             coordinates: point.coordinates,
//           },
//           properties: point.properties,
//         })),
//       };

//       map.current.addSource('point-source', {
//         type: 'geojson',
//         data: geoJson,
//         cluster: true,
//         clusterMaxZoom: 14,
//         clusterRadius: 50,
//       });

//       map.current.addLayer({
//         id: 'clusters',
//         type: 'circle',
//         source: 'point-source',
//         filter: ['has', 'point_count'],
//         paint: {
//           'circle-color': ['step', ['get', 'point_count'], '#EC619F', 4, '#008D8D', 7, '#004B7F'],
//           'circle-radius': ['step', ['get', 'point_count'], 15, 4, 20, 7, 25],
//           'circle-stroke-width': 1,
//           'circle-stroke-color': 'white',
//           'circle-stroke-opacity': 1,
//         },
//       });

//       map.current.addLayer({
//         id: 'cluster-count',
//         type: 'symbol',
//         source: 'point-source',
//         filter: ['has', 'point_count'],
//         layout: {
//           'text-field': '{point_count_abbreviated}',
//           'text-size': 16,
//         },
//         paint: {
//           'text-color': 'white',
//         },
//       });

//       // const refreshMarkers = () => {
//       //   Object.keys(markersOnTheMap.current).forEach((id) => {
//       //     markersOnTheMap.current[id].remove();
//       //     delete markersOnTheMap.current[id];
//       //   });

//       //   map.current.querySourceFeatures('point-source').forEach((feature) => {
//       //     if (feature.properties && !feature.properties.cluster) {
//       //       const id = parseInt(feature.properties.id, 10);
//       //       if (!markersOnTheMap.current[id]) {
//       //         const markerElement = document.createElement('div');
//       //         markerElement.className = 'marker';

//       //         const markerContentElement = document.createElement('div');
//       //         markerContentElement.className = 'marker-content';
//       //         markerContentElement.style.backgroundColor = '#FF0000';
//       //         markerElement.appendChild(markerContentElement);

//       //         const iconElement = document.createElement('div');
//       //         if (feature.properties.species === 'Dog') {
//       //           iconElement.className = 'marker-icon';
//       //           iconElement.style.backgroundImage = 'url(images/icons/dog.png)';
//       //         } else if (feature.properties.species === 'Cat') {
//       //           iconElement.className = 'marker-icon';
//       //           iconElement.style.backgroundImage = 'url(images/icons/cat.png)';
//       //         } else {
//       //           iconElement.className = 'marker-icon';
//       //           iconElement.style.backgroundImage = 'url(images/icons/paw.png)';
//       //         }
//       //         markerContentElement.appendChild(iconElement);

//       //         const newMarker = new tt.Marker({
//       //           element: markerElement,
//       //           anchor: 'bottom',
//       //           draggable: false,
//       //           color: '#FF0000',
//       //         }).setLngLat(feature.geometry.coordinates);

//       //         newMarker.addTo(map.current);
//       //         newMarker.setPopup(
//       //           new tt.Popup({ offset: 30, closeButton: false }).setHTML(
//       //             `<div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden;">
//       //               <a href='/pets/{feature.properties.petId}'>
//       //                 <div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden; border: 3px solid white;
//       //                 background-image: url({feature.properties.img});
//       //                 background-size: cover;
//       //                 background-position: center;">
//       //                 </div>
//       //               </a>
//       //             </div>`,
//       //           ),
//       //         );

//       //         markersOnTheMap.current[id] = newMarker;
//       //       }
//       //     }
//       //   });
//       // };

//       // map.current.on('data', (e) => {
//       //   if (e.sourceId !== 'point-source' || !map.current.getSource('point-source').loaded()) {
//       //     return;
//       //   }

//       //   refreshMarkers();

//       //   if (!eventListenersAdded.current) {
//       //     map.current.on('move', refreshMarkers);
//       //     map.current.on('moveend', refreshMarkers);
//       //     eventListenersAdded.current = true;
//       //   }
//       // });

//       // map.current.on('click', 'clusters', (e) => {
//       //   const features = map.current.queryRenderedFeatures(e.point, { layers: ['clusters'] });
//       //   const clusterId = features[0].properties.cluster_id;
//       //   map.current.getSource('point-source').getClusterExpansionZoom(clusterId, (err, zoom) => {
//       //     if (err) {
//       //       return;
//       //     }

//       //     map.current.easeTo({
//       //       center: features[0].geometry.coordinates,
//       //       zoom: zoom + 0.5,
//       //     });
//       //   });
//       // });

//       // map.current.on('mouseenter', 'clusters', () => {
//       //   map.current.getCanvas().style.cursor = 'pointer';
//       // });

//       // map.current.on('mouseleave', 'clusters', () => {
//       //   map.current.getCanvas().style.cursor = '';
//       // });

//       if ('geolocation' in navigator) {
//         navigator.geolocation.getCurrentPosition((position) => {
//           const userLat = position.coords.latitude;
//           const userLng = position.coords.longitude;
//           const size = 200;

//           const locationPoint = {
//             width: size,
//             height: size,
//             data: new Uint8Array(size * size * 4),
//             onAdd: function () {
//               const canvas = document.createElement('canvas');
//               canvas.width = this.width;
//               canvas.height = this.height;
//               this.context = canvas.getContext('2d');
//             },
//             render: function () {
//               const duration = 1100;
//               const t = (performance.now() % duration) / duration;

//               const radius = 18 + 2 * this.easeInOutSine(t);
//               const outerRadius = 80 * this.easeInOutSine(t) + radius;
//               const context = this.context;

//               context.clearRect(0, 0, this.width, this.height);
//               context.beginPath();
//               context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
//               context.fillStyle = 'rgba(0, 145, 255,' + this.easeInOutSine(1 - t) + ')';
//               context.fill();

//               context.beginPath();
//               context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
//               context.fillStyle = 'rgba(0, 145, 255, 1)';
//               context.strokeStyle = 'white';
//               context.lineWidth = 3 + this.easeInOutSine(1 - t);
//               context.fill();
//               context.stroke();

//               this.data = context.getImageData(0, 0, this.width, this.height).data;
//               map.current.triggerRepaint();
//               return true;
//             },
//             easeInOutSine: function (x) {
//               return -(Math.cos(Math.PI * x) - 1) / 2;
//             },
//           };

//           map.current.addImage('pulsing-dot', locationPoint, { pixelRatio: 2 });

//           map.current.addSource('points', {
//             type: 'geojson',
//             data: {
//               type: 'FeatureCollection',
//               features: [
//                 {
//                   type: 'Feature',
//                   geometry: {
//                     type: 'Point',
//                     coordinates: [userLng, userLat],
//                   },
//                 },
//               ],
//             },
//           });

//           map.current.addLayer({
//             id: 'points',
//             type: 'symbol',
//             source: 'points',
//             layout: {
//               'icon-image': 'pulsing-dot',
//             },
//           });
//         });
//       }
//     });

//     return () => {
//       if (map.current) {
//         map.current.remove();
//         map.current = null;
//       }
//     };
//   }, []);

//   return (
//     <div ref={mapElement} style={{ height: isLargeScreen ? '440px' : '250px', width: '100%' }} />
//   );
// };

// export default TomTomClusterMap;
// import React, { useEffect, useRef, useState } from 'react';
// import tt from '@tomtom-international/web-sdk-maps';
// import '@tomtom-international/web-sdk-maps/dist/maps.css';
// import { TOMTOM_API } from '../../middleware/config';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { renderToStaticMarkup } from 'react-dom/server';
// import dogIcon from '../../images/dog.png';

// // import myImage from '../public/myImage.png';
// import CustomAlert from '../alert/CustomAlert';

// const TomTomClusterMap = ({ pets }) => {
//   // const theme = useTheme();
//   // const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
//   // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   const mapElement = useRef(null);
//   const map = useRef(null);
//   const markersOnTheMap = useRef({});
//   const eventListenersAdded = useRef(false);

//   useEffect(() => {
//     if (map.current) return; // Initialize map only once

//     map.current = tt.map({
//       key: TOMTOM_API,
//       container: mapElement.current,
//       center: [24.105078, 56.946285],
//       zoom: 6,
//     });

//     map.current.addControl(new tt.NavigationControl());
//     map.current.addControl(new tt.FullscreenControl());

//     const southwest = new tt.LngLat(18.059, 52.129);
//     const northeast = new tt.LngLat(30.425, 61.259);
//     const bounds = new tt.LngLatBounds(southwest, northeast);

//     map.current.setMaxBounds(bounds);

//     map.current.on('load', function () {
//       const points = pets.map((point, index) => ({
//         coordinates: [point.location.coordinates[0], point.location.coordinates[1]],
//         properties: {
//           id: point._id,
//           name: point.initialStatus,
//           img: point.mainImage ? point.mainImage : 'images/placeholder.jpg',
//           species: point.category,
//           petId: point._id,
//         },
//       }));

//       const geoJson = {
//         type: 'FeatureCollection',
//         features: points.map((point) => ({
//           type: 'Feature',
//           geometry: {
//             type: 'Point',
//             coordinates: point.coordinates,
//           },
//           properties: point.properties,
//         })),
//       };

//       if (map.current.getSource('point-source')) {
//         map.current.getSource('point-source').setData(geoJson);
//       } else {
//         map.current.addSource('point-source', {
//           type: 'geojson',
//           data: geoJson,
//           cluster: true,
//           clusterMaxZoom: 14,
//           clusterRadius: 50,
//         });

//         map.current.addLayer({
//           id: 'clusters',
//           type: 'circle',
//           source: 'point-source',
//           filter: ['has', 'point_count'],
//           paint: {
//             'circle-color': ['step', ['get', 'point_count'], '#EC619F', 4, '#008D8D', 7, '#004B7F'],
//             'circle-radius': ['step', ['get', 'point_count'], 15, 4, 20, 7, 25],
//             'circle-stroke-width': 1,
//             'circle-stroke-color': 'white',
//             'circle-stroke-opacity': 1,
//           },
//         });

//         map.current.addLayer({
//           id: 'cluster-count',
//           type: 'symbol',
//           source: 'point-source',
//           filter: ['has', 'point_count'],
//           layout: {
//             'text-field': '{point_count_abbreviated}',
//             'text-size': 16,
//           },
//           paint: {
//             'text-color': 'white',
//           },
//         });

//         const refreshMarkers = () => {
//           Object.keys(markersOnTheMap.current).forEach((id) => {
//             markersOnTheMap.current[id].remove();
//             delete markersOnTheMap.current[id];
//           });

//           map.current.querySourceFeatures('point-source').forEach((feature) => {
//             console.log(feature, 'feature');
//             if (feature.properties && !feature.properties.cluster) {
//               const id = parseInt(feature.properties.id, 10);
//               if (!markersOnTheMap.current[id]) {
//                 const markerElement = document.createElement('div');
//                 markerElement.className = 'marker';

//                 const markerContentElement = document.createElement('div');
//                 markerContentElement.className = 'marker-content';
//                 markerContentElement.style.backgroundColor = '#FF0000';
//                 markerElement.appendChild(markerContentElement);

//                 const iconElement = document.createElement('div');

//                 // new code
//                 // iconElement.className = 'marker-icon';
//                 // iconElement.style.width = '30px';
//                 // iconElement.style.height = '30px';
//                 // iconElement.style.backgroundColor = 'white';
//                 // iconElement.style.borderRadius = '50%';
//                 // iconElement.style.backgroundSize = 'cover';
//                 // iconElement.style.backgroundPosition = 'center';
//                 // iconElement.style.backgroundRepeat = 'no-repeat';
//                 // // iconElement.style.backgroundImage = `url(${dogImg})`;
//                 // iconElement.style.zIndex = '3';
//                 // end new code
//                 if (feature.properties.species === '0') {
//                   iconElement.className = 'marker-icon';
//                   iconElement.style.backgroundImage = 'url(images/dog.png)';
//                 } else if (feature.properties.species === '1') {
//                   iconElement.className = 'marker-icon';
//                   iconElement.style.backgroundImage = 'url(images/cat.png)';
//                 } else {
//                   iconElement.className = 'marker-icon';
//                   iconElement.style.backgroundImage = 'url(images/paw.png)';
//                 }
//                 markerContentElement.appendChild(iconElement);

//                 const newMarker = new tt.Marker({
//                   element: markerElement,
//                   anchor: 'bottom',
//                   draggable: false,
//                   color: '#FF0000',
//                 }).setLngLat(feature.geometry.coordinates);

//                 newMarker.addTo(map.current);
//                 newMarker.setPopup(
//                   new tt.Popup({ offset: 30, closeButton: false }).setHTML(
//                     `<div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden;">
//                       <a href='/pets/${feature.properties.petId}'>
//                         <div style="width: 120px; height: 120px;
//                         background-image: url(${feature.properties.img});
//                         background-size: cover;
//                         background-position: center;">
//                         </div>
//                       </a>
//                     </div>`,
//                   ),
//                 );

//                 markersOnTheMap.current[id] = newMarker;
//               }
//             }
//           });
//         };

//         map.current.on('data', (e) => {
//           if (e.sourceId !== 'point-source' || !map.current.getSource('point-source').loaded()) {
//             return;
//           }

//           refreshMarkers();

//           if (!eventListenersAdded.current) {
//             map.current.on('move', refreshMarkers);
//             map.current.on('moveend', refreshMarkers);
//             eventListenersAdded.current = true;
//           }
//         });

//         map.current.on('click', 'clusters', (e) => {
//           const features = map.current.queryRenderedFeatures(e.point, { layers: ['clusters'] });
//           const clusterId = features[0].properties.cluster_id;
//           map.current.getSource('point-source').getClusterExpansionZoom(clusterId, (err, zoom) => {
//             if (err) {
//               return;
//             }

//             map.current.easeTo({
//               center: features[0].geometry.coordinates,
//               zoom: zoom + 0.5,
//             });
//           });
//         });

//         map.current.on('mouseenter', 'clusters', () => {
//           map.current.getCanvas().style.cursor = 'pointer';
//         });

//         map.current.on('mouseleave', 'clusters', () => {
//           map.current.getCanvas().style.cursor = '';
//         });

//         if ('geolocation' in navigator) {
//           navigator.geolocation.getCurrentPosition((position) => {
//             const userLat = position.coords.latitude;
//             const userLng = position.coords.longitude;
//             const size = 200;

//             const locationPoint = {
//               width: size,
//               height: size,
//               data: new Uint8Array(size * size * 4),
//               onAdd: function () {
//                 const canvas = document.createElement('canvas');
//                 canvas.width = this.width;
//                 canvas.height = this.height;
//                 this.context = canvas.getContext('2d');
//               },
//               render: function () {
//                 const duration = 1100;
//                 const t = (performance.now() % duration) / duration;

//                 const radius = 18 + 2 * this.easeInOutSine(t);
//                 const outerRadius = 80 * this.easeInOutSine(t) + radius;
//                 const context = this.context;

//                 context.clearRect(0, 0, this.width, this.height);
//                 context.beginPath();
//                 context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
//                 context.fillStyle = 'rgba(0, 145, 255,' + this.easeInOutSine(1 - t) + ')';
//                 context.fill();

//                 context.beginPath();
//                 context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
//                 context.fillStyle = 'rgba(0, 145, 255, 1)';
//                 context.strokeStyle = 'white';
//                 context.lineWidth = 3 + this.easeInOutSine(1 - t);
//                 context.fill();
//                 context.stroke();

//                 this.data = context.getImageData(0, 0, this.width, this.height).data;
//                 map.current.triggerRepaint();
//                 return true;
//               },
//               easeInOutSine: function (x) {
//                 return -(Math.cos(Math.PI * x) - 1) / 2;
//               },
//             };

//             map.current.addImage('pulsing-dot', locationPoint, { pixelRatio: 2 });

//             map.current.addSource('points', {
//               type: 'geojson',
//               data: {
//                 type: 'FeatureCollection',
//                 features: [
//                   {
//                     type: 'Feature',
//                     geometry: {
//                       type: 'Point',
//                       coordinates: [userLng, userLat],
//                     },
//                   },
//                 ],
//               },
//             });

//             map.current.addLayer({
//               id: 'points',
//               type: 'symbol',
//               source: 'points',
//               layout: {
//                 'icon-image': 'pulsing-dot',
//               },
//             });
//           });
//         }
//       }
//     });

//     return () => {
//       if (map.current) {
//         map.current.remove();
//         map.current = null;
//       }
//     };
//   }, [pets]);

//   return <div ref={mapElement} style={{ height: '440px', width: '100%' }}></div>;
// };

// export default TomTomClusterMap;

import React, { useEffect, useRef } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { TOMTOM_API } from '../../middleware/config';
import { renderToStaticMarkup } from 'react-dom/server';
// import PetsIcon from '@mui/icons-material/Pets'; // Proper icon imports
// import CatIcon from '@mui/icons-material/Pets';
// import PawIcon from '@mui/icons-material/Pets';
import PetsIcon from '@mui/icons-material/Pets';
// import PetsIcon from '@mui/icons-material/AddLocationAlt';
import CatIcon from '@mui/icons-material/LocationOff';
import PawIcon from '@mui/icons-material/LocationOn';

const TomTomClusterMap = ({ pets }) => {
  const mapElement = useRef(null);
  const map = useRef(null);
  const markersOnTheMap = useRef({});
  const eventListenersAdded = useRef(false); // Define eventListenersAdded

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = tt.map({
      key: TOMTOM_API,
      container: mapElement.current,
      center: [24.105078, 56.946285],
      zoom: 6,
    });

    map.current.addControl(new tt.NavigationControl());
    map.current.addControl(new tt.FullscreenControl());

    const southwest = new tt.LngLat(18.059, 52.129);
    const northeast = new tt.LngLat(30.425, 61.259);
    const bounds = new tt.LngLatBounds(southwest, northeast);
    map.current.setMaxBounds(bounds);

    map.current.on('load', function () {
      const points = pets.map((point, index) => ({
        coordinates: [point.location.coordinates[0], point.location.coordinates[1]],
        properties: {
          // petId: point._id,
          id: point._id,
          name: point.initialStatus,
          img: point.mainImage ? point.mainImage : 'images/placeholder.jpg',
          species: point.category,
        },
      }));

      const geoJson = {
        type: 'FeatureCollection',
        features: points.map((point) => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: point.coordinates,
          },
          properties: point.properties,
        })),
      };

      map.current.on('style.load', () => {
        if (map.current.getSource('point-source')) {
          map.current.getSource('point-source').setData(geoJson);
        } else {
          map.current.addSource('point-source', {
            type: 'geojson',
            data: geoJson,
            cluster: true,
            clusterMaxZoom: 14,
            clusterRadius: 50,
          });

          map.current.addLayer({
            id: 'clusters',
            type: 'circle',
            source: 'point-source',
            filter: ['has', 'point_count'],
            paint: {
              'circle-color': [
                'step',
                ['get', 'point_count'],
                '#EC619F',
                4,
                '#008D8D',
                7,
                '#004B7F',
              ],
              'circle-radius': ['step', ['get', 'point_count'], 15, 4, 20, 7, 25],
              'circle-stroke-width': 1,
              'circle-stroke-color': 'white',
              'circle-stroke-opacity': 1,
            },
          });

          map.current.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'point-source',
            filter: ['has', 'point_count'],
            layout: {
              'text-field': '{point_count_abbreviated}',
              'text-size': 16,
            },
            paint: {
              'text-color': 'white',
            },
          });

          const refreshMarkers = () => {
            Object.keys(markersOnTheMap.current).forEach((id) => {
              markersOnTheMap.current[id].remove();
              delete markersOnTheMap.current[id];
            });

            map.current.querySourceFeatures('point-source').forEach((feature) => {
              if (feature.properties && !feature.properties.cluster) {
                const id = parseInt(feature.properties.id, 10);
                if (!markersOnTheMap.current[id]) {
                  const markerElement = document.createElement('div');
                  markerElement.className = 'marker';

                  const markerContentElement = document.createElement('div');
                  markerContentElement.className = 'marker-content';
                  markerContentElement.style.backgroundColor = '#FF0000';
                  markerElement.appendChild(markerContentElement);

                  let iconClass;
                  switch (feature.properties.species) {
                    case '1':
                      iconClass = 'fa-dog';
                      break;
                    case '2':
                      iconClass = 'fa-cat';
                      break;
                    default:
                      iconClass = 'fa-paw';
                      break;
                  }

                  // const iconMarkup = renderToStaticMarkup(
                  //   <IconComponent style={{ fontSize: '30px', color: '#000' }} />,
                  // );
                  // const iconElement = document.createElement('div');
                  // iconElement.innerHTML = iconMarkup;
                  // markerContentElement.appendChild(iconElement);
                  // Create the Font Awesome icon element
                  const iconElement = document.createElement('i');
                  iconElement.className = `fas ${iconClass}`;
                  iconElement.style.fontSize = '30px';
                  iconElement.style.color = '#000';
                  markerContentElement.appendChild(iconElement);

                  const newMarker = new tt.Marker({
                    element: markerElement,
                    anchor: 'bottom',
                    draggable: false,
                    color: '#FF0000',
                  }).setLngLat(feature.geometry.coordinates);

                  newMarker.addTo(map.current);
                  newMarker.setPopup(
                    new tt.Popup({ offset: 30, closeButton: false }).setHTML(
                      `<div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden;">
                        <a href='/pets/${feature.properties.id}'>
                          <div style="width: 120px; height: 120px; border-radius: 50%;  border: 3px solid white; 
                          background-image: url(${feature.properties.img});
                          background-size: cover;
                          background-position: center;">
                          </div>
                        </a>
                      </div>`,
                    ),
                  );

                  markersOnTheMap.current[id] = newMarker;
                }
              }
            });
          };

          map.current.on('data', (e) => {
            if (e.sourceId !== 'point-source' || !map.current.getSource('point-source').loaded()) {
              return;
            }

            refreshMarkers();

            if (!eventListenersAdded.current) {
              map.current.on('move', refreshMarkers);
              map.current.on('moveend', refreshMarkers);
              eventListenersAdded.current = true;
            }
          });

          map.current.on('click', 'clusters', (e) => {
            const features = map.current.queryRenderedFeatures(e.point, { layers: ['clusters'] });
            const clusterId = features[0].properties.cluster_id;
            map.current
              .getSource('point-source')
              .getClusterExpansionZoom(clusterId, (err, zoom) => {
                if (err) {
                  return;
                }

                map.current.easeTo({
                  center: features[0].geometry.coordinates,
                  zoom: zoom + 0.5,
                });
              });
          });

          map.current.on('mouseenter', 'clusters', () => {
            map.current.getCanvas().style.cursor = 'pointer';
          });

          map.current.on('mouseleave', 'clusters', () => {
            map.current.getCanvas().style.cursor = '';
          });

          // if ('geolocation' in navigator) {
          //   navigator.geolocation.getCurrentPosition((position) => {
          //     const userLat = position.coords.latitude;
          //     const userLng = position.coords.longitude;
          //     const size = 200;

          //     const locationPoint = {
          //       width: size,
          //       height: size,
          //       data: new Uint8Array(size * size * 4),
          //       onAdd: function () {
          //         const canvas = document.createElement('canvas');
          //         canvas.width = this.width;
          //         canvas.height = this.height;
          //         this.context = canvas.getContext('2d');
          //       },
          //       render: function () {
          //         const duration = 1100;
          //         const t = (performance.now() % duration) / duration;

          //         const radius = 18 + 2 * this.easeInOutSine(t);
          //         const outerRadius = 80 * this.easeInOutSine(t) + radius;
          //         const context = this.context;

          //         context.clearRect(0, 0, this.width, this.height);
          //         context.beginPath();
          //         context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
          //         context.fillStyle = 'rgba(0, 145, 255,' + this.easeInOutSine(1 - t) + ')';
          //         context.fill();

          //         context.beginPath();
          //         context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          //         context.fillStyle = 'rgba(0, 145, 255, 1)';
          //         context.strokeStyle = 'white';
          //         context.lineWidth = 3 + this.easeInOutSine(1 - t);
          //         context.fill();
          //         context.stroke();

          //         this.data = context.getImageData(0, 0, this.width, this.height).data;
          //         map.current.triggerRepaint();
          //         return true;
          //       },
          //       easeInOutSine: function (x) {
          //         return -(Math.cos(Math.PI * x) - 1) / 2;
          //       },
          //     };

          //     map.current.addImage('pulsing-dot', locationPoint, { pixelRatio: 2 });

          //     map.current.addSource('points', {
          //       type: 'geojson',
          //       data: {
          //         type: 'FeatureCollection',
          //         features: [
          //           {
          //             type: 'Feature',
          //             geometry: {
          //               type: 'Point',
          //               coordinates: [userLng, userLat],
          //             },
          //           },
          //         ],
          //       },
          //     });

          //     map.current.addLayer({
          //       id: 'points',
          //       type: 'symbol',
          //       source: 'points',
          //       layout: {
          //         'icon-image': 'pulsing-dot',
          //       },
          //     });
          //   });
          // }
        }
      });
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [pets]);

  return <div ref={mapElement} style={{ height: '440px', width: '100%' }}></div>;
};

export default TomTomClusterMap;
