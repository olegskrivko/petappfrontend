// import React, { useEffect, useRef } from 'react';
// import tt from '@tomtom-international/web-sdk-maps';
// import '@tomtom-international/web-sdk-maps/dist/maps.css';
// import { TOMTOM_API } from '../../middleware/config';
// import { renderToStaticMarkup } from 'react-dom/server';

// import PetsIcon from '@mui/icons-material/Pets';
// import AddLocationAlt from '@mui/icons-material/AddLocationAlt';
// import LocationOff from '@mui/icons-material/LocationOff';
// import LocationOn from '@mui/icons-material/LocationOn';

// const TomTomClusterMap = ({ pets }) => {
//   const mapElement = useRef(null); // Reference to the map container
//   const map = useRef(null); // Reference to the TomTom map instance
//   const markersOnTheMap = useRef({});
//   const eventListenersAdded = useRef(false); // Track if event listeners have been added

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
//           // petId: point._id,
//           id: point._id,
//           name: point.initialStatus,
//           img: point.mainImage ? point.mainImage : 'images/placeholder.jpg',
//           species: point.category,
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

//       map.current.on('style.load', () => {
//         if (map.current.getSource('point-source')) {
//           map.current.getSource('point-source').setData(geoJson);
//         } else {
//           map.current.addSource('point-source', {
//             type: 'geojson',
//             data: geoJson,
//             cluster: true,
//             clusterMaxZoom: 14,
//             clusterRadius: 50,
//           });

//           map.current.addLayer({
//             id: 'clusters',
//             type: 'circle',
//             source: 'point-source',
//             filter: ['has', 'point_count'],
//             paint: {
//               'circle-color': [
//                 'step',
//                 ['get', 'point_count'],
//                 '#EC619F',
//                 4,
//                 '#008D8D',
//                 7,
//                 '#004B7F',
//               ],
//               'circle-radius': ['step', ['get', 'point_count'], 15, 4, 20, 7, 25],
//               'circle-stroke-width': 1,
//               'circle-stroke-color': 'white',
//               'circle-stroke-opacity': 1,
//             },
//           });

//           map.current.addLayer({
//             id: 'cluster-count',
//             type: 'symbol',
//             source: 'point-source',
//             filter: ['has', 'point_count'],
//             layout: {
//               'text-field': '{point_count_abbreviated}',
//               'text-size': 16,
//             },
//             paint: {
//               'text-color': 'white',
//             },
//           });

//           const refreshMarkers = () => {
//             Object.keys(markersOnTheMap.current).forEach((id) => {
//               markersOnTheMap.current[id].remove();
//               delete markersOnTheMap.current[id];
//             });

//             map.current.querySourceFeatures('point-source').forEach((feature) => {
//               if (feature.properties && !feature.properties.cluster) {
//                 const id = parseInt(feature.properties.id, 10);
//                 if (!markersOnTheMap.current[id]) {
//                   const markerElement = document.createElement('div');
//                   markerElement.className = 'marker';

//                   const markerContentElement = document.createElement('div');
//                   markerContentElement.className = 'marker-content';
//                   markerContentElement.style.backgroundColor = '#FF0000';
//                   markerElement.appendChild(markerContentElement);

//                   let iconClass;
//                   switch (feature.properties.species) {
//                     case '1':
//                       iconClass = 'fa-dog';
//                       break;
//                     case '2':
//                       iconClass = 'fa-cat';
//                       break;
//                     default:
//                       iconClass = 'fa-paw';
//                       break;
//                   }

//                   // const iconMarkup = renderToStaticMarkup(
//                   //   <IconComponent style={{ fontSize: '30px', color: '#000' }} />,
//                   // );
//                   // const iconElement = document.createElement('div');
//                   // iconElement.innerHTML = iconMarkup;
//                   // markerContentElement.appendChild(iconElement);
//                   // Create the Font Awesome icon element
//                   const iconElement = document.createElement('i');
//                   iconElement.className = `fas ${iconClass}`;
//                   iconElement.style.fontSize = '30px';
//                   iconElement.style.color = '#000';
//                   markerContentElement.appendChild(iconElement);

//                   const newMarker = new tt.Marker({
//                     element: markerElement,
//                     anchor: 'bottom',
//                     draggable: false,
//                     color: '#FF0000',
//                   }).setLngLat(feature.geometry.coordinates);

//                   newMarker.addTo(map.current);
//                   newMarker.setPopup(
//                     new tt.Popup({ offset: 30, closeButton: false }).setHTML(
//                       `<div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden;">
//                         <a href='/pets/${feature.properties.id}'>
//                           <div style="width: 120px; height: 120px; border-radius: 50%;  border: 3px solid white;
//                           background-image: url(${feature.properties.img});
//                           background-size: cover;
//                           background-position: center;">
//                           </div>
//                         </a>
//                       </div>`,
//                     ),
//                   );

//                   markersOnTheMap.current[id] = newMarker;
//                 }
//               }
//             });
//           };

//           map.current.on('data', (e) => {
//             if (e.sourceId !== 'point-source' || !map.current.getSource('point-source').loaded()) {
//               return;
//             }

//             refreshMarkers();

//             if (!eventListenersAdded.current) {
//               map.current.on('move', refreshMarkers);
//               map.current.on('moveend', refreshMarkers);
//               eventListenersAdded.current = true;
//             }
//           });

//           map.current.on('click', 'clusters', (e) => {
//             const features = map.current.queryRenderedFeatures(e.point, { layers: ['clusters'] });
//             const clusterId = features[0].properties.cluster_id;
//             map.current
//               .getSource('point-source')
//               .getClusterExpansionZoom(clusterId, (err, zoom) => {
//                 if (err) {
//                   return;
//                 }

//                 map.current.easeTo({
//                   center: features[0].geometry.coordinates,
//                   zoom: zoom + 0.5,
//                 });
//               });
//           });

//           map.current.on('mouseenter', 'clusters', () => {
//             map.current.getCanvas().style.cursor = 'pointer';
//           });

//           map.current.on('mouseleave', 'clusters', () => {
//             map.current.getCanvas().style.cursor = '';
//           });

//           if ('geolocation' in navigator) {
//             navigator.geolocation.getCurrentPosition((position) => {
//               const userLat = position.coords.latitude;
//               const userLng = position.coords.longitude;
//               const size = 200;

//               const locationPoint = {
//                 width: size,
//                 height: size,
//                 data: new Uint8Array(size * size * 4),
//                 onAdd: function () {
//                   const canvas = document.createElement('canvas');
//                   canvas.width = this.width;
//                   canvas.height = this.height;
//                   this.context = canvas.getContext('2d');
//                 },
//                 render: function () {
//                   const duration = 1100;
//                   const t = (performance.now() % duration) / duration;

//                   const radius = 18 + 2 * this.easeInOutSine(t);
//                   const outerRadius = 80 * this.easeInOutSine(t) + radius;
//                   const context = this.context;

//                   context.clearRect(0, 0, this.width, this.height);
//                   context.beginPath();
//                   context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
//                   context.fillStyle = 'rgba(0, 145, 255,' + this.easeInOutSine(1 - t) + ')';
//                   context.fill();

//                   context.beginPath();
//                   context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
//                   context.fillStyle = 'rgba(0, 145, 255, 1)';
//                   context.strokeStyle = 'white';
//                   context.lineWidth = 3 + this.easeInOutSine(1 - t);
//                   context.fill();
//                   context.stroke();

//                   this.data = context.getImageData(0, 0, this.width, this.height).data;
//                   map.current.triggerRepaint();
//                   return true;
//                 },
//                 easeInOutSine: function (x) {
//                   return -(Math.cos(Math.PI * x) - 1) / 2;
//                 },
//               };

//               map.current.addImage('pulsing-dot', locationPoint, { pixelRatio: 2 });

//               map.current.addSource('points', {
//                 type: 'geojson',
//                 data: {
//                   type: 'FeatureCollection',
//                   features: [
//                     {
//                       type: 'Feature',
//                       geometry: {
//                         type: 'Point',
//                         coordinates: [userLng, userLat],
//                       },
//                     },
//                   ],
//                 },
//               });

//               map.current.addLayer({
//                 id: 'points',
//                 type: 'symbol',
//                 source: 'points',
//                 layout: {
//                   'icon-image': 'pulsing-dot',
//                 },
//               });
//             });
//           }
//         }
//       });
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
// import React, { useEffect, useRef } from 'react';
// import tt from '@tomtom-international/web-sdk-maps';
// import '@tomtom-international/web-sdk-maps/dist/maps.css';
// import { TOMTOM_API } from '../../middleware/config';
// import { renderToStaticMarkup } from 'react-dom/server';

// import PetsIcon from '@mui/icons-material/Pets';
// import AddLocationAlt from '@mui/icons-material/AddLocationAlt';
// import LocationOff from '@mui/icons-material/LocationOff';
// import LocationOn from '@mui/icons-material/LocationOn';

// const TomTomClusterMap = ({ pets }) => {
//   const mapElement = useRef(null); // Reference to the map container
//   const map = useRef(null); // Reference to the TomTom map instance
//   const markersOnTheMap = useRef({});
//   const eventListenersAdded = useRef(false); // Track if event listeners have been added

//   useEffect(() => {
//     if (!map.current) {
//       map.current = tt.map({
//         key: TOMTOM_API,
//         container: mapElement.current,
//         center: [24.105078, 56.946285], // Example initial center
//         zoom: 6, // Example initial zoom level
//       });

//       map.current.addControl(new tt.NavigationControl());
//       map.current.addControl(new tt.FullscreenControl());
//     }

//     return () => {
//       if (map.current) {
//         map.current.remove();
//         map.current = null;
//       }
//     };
//   }, []); // Empty dependency array to run once on mount

//   useEffect(() => {
//     if (map.current && pets && pets.length > 0) {
//       // Clear existing markers
//       Object.keys(markersOnTheMap.current).forEach((id) => {
//         markersOnTheMap.current[id].remove();
//         delete markersOnTheMap.current[id];
//       });

//       // Create new markers
//       pets.forEach((pet) => {
//         const { _id, location } = pet;
//         const marker = new tt.Marker().setLngLat(location.coordinates).addTo(map.current);
//         markersOnTheMap.current[_id] = marker;
//       });
//     }
//   }, [pets]);
//   // useEffect(() => {
//   //   // if (map.current) return; // Initialize map only once

//   //   // map.current = tt.map({
//   //   //   key: TOMTOM_API,
//   //   //   container: mapElement.current,
//   //   //   center: [24.105078, 56.946285],
//   //   //   zoom: 6,
//   //   // });

//   //   // map.current.addControl(new tt.NavigationControl());
//   //   // map.current.addControl(new tt.FullscreenControl());

//   //   // const southwest = new tt.LngLat(18.059, 52.129);
//   //   // const northeast = new tt.LngLat(30.425, 61.259);

//   //   // const bounds = new tt.LngLatBounds(southwest, northeast);
//   //   // map.current.setMaxBounds(bounds);

//   //   // map.current.on('load', function () {
//   //   //   const points = pets.map((point, index) => ({
//   //   //     coordinates: [point.location.coordinates[0], point.location.coordinates[1]],
//   //   //     properties: {
//   //   //       // petId: point._id,
//   //   //       id: point._id,
//   //   //       name: point.initialStatus,
//   //   //       img: point.mainImage ? point.mainImage : 'images/placeholder.jpg',
//   //   //       species: point.category,
//   //   //     },
//   //   //   }));

//   //   //   const geoJson = {
//   //   //     type: 'FeatureCollection',
//   //   //     features: points.map((point) => ({
//   //   //       type: 'Feature',
//   //   //       geometry: {
//   //   //         type: 'Point',
//   //   //         coordinates: point.coordinates,
//   //   //       },
//   //   //       properties: point.properties,
//   //   //     })),
//   //   //   };

//   //   //   map.current.on('style.load', () => {
//   //   //     if (map.current.getSource('point-source')) {
//   //   //       map.current.getSource('point-source').setData(geoJson);
//   //   //     } else {
//   //   //       map.current.addSource('point-source', {
//   //   //         type: 'geojson',
//   //   //         data: geoJson,
//   //   //         cluster: true,
//   //   //         clusterMaxZoom: 14,
//   //   //         clusterRadius: 50,
//   //   //       });

//   //   //       map.current.addLayer({
//   //   //         id: 'clusters',
//   //   //         type: 'circle',
//   //   //         source: 'point-source',
//   //   //         filter: ['has', 'point_count'],
//   //   //         paint: {
//   //   //           'circle-color': [
//   //   //             'step',
//   //   //             ['get', 'point_count'],
//   //   //             '#EC619F',
//   //   //             4,
//   //   //             '#008D8D',
//   //   //             7,
//   //   //             '#004B7F',
//   //   //           ],
//   //   //           'circle-radius': ['step', ['get', 'point_count'], 15, 4, 20, 7, 25],
//   //   //           'circle-stroke-width': 1,
//   //   //           'circle-stroke-color': 'white',
//   //   //           'circle-stroke-opacity': 1,
//   //   //         },
//   //   //       });

//   //   //       map.current.addLayer({
//   //   //         id: 'cluster-count',
//   //   //         type: 'symbol',
//   //   //         source: 'point-source',
//   //   //         filter: ['has', 'point_count'],
//   //   //         layout: {
//   //   //           'text-field': '{point_count_abbreviated}',
//   //   //           'text-size': 16,
//   //   //         },
//   //   //         paint: {
//   //   //           'text-color': 'white',
//   //   //         },
//   //   //       });

//   //   //       const refreshMarkers = () => {
//   //   //         Object.keys(markersOnTheMap.current).forEach((id) => {
//   //   //           markersOnTheMap.current[id].remove();
//   //   //           delete markersOnTheMap.current[id];
//   //   //         });

//   //   //         map.current.querySourceFeatures('point-source').forEach((feature) => {
//   //   //           if (feature.properties && !feature.properties.cluster) {
//   //   //             const id = parseInt(feature.properties.id, 10);
//   //   //             if (!markersOnTheMap.current[id]) {
//   //   //               const markerElement = document.createElement('div');
//   //   //               markerElement.className = 'marker';

//   //   //               const markerContentElement = document.createElement('div');
//   //   //               markerContentElement.className = 'marker-content';
//   //   //               markerContentElement.style.backgroundColor = '#FF0000';
//   //   //               markerElement.appendChild(markerContentElement);

//   //   //               let iconClass;
//   //   //               switch (feature.properties.species) {
//   //   //                 case '1':
//   //   //                   iconClass = 'fa-dog';
//   //   //                   break;
//   //   //                 case '2':
//   //   //                   iconClass = 'fa-cat';
//   //   //                   break;
//   //   //                 default:
//   //   //                   iconClass = 'fa-paw';
//   //   //                   break;
//   //   //               }

//   //   //               // const iconMarkup = renderToStaticMarkup(
//   //   //               //   <IconComponent style={{ fontSize: '30px', color: '#000' }} />,
//   //   //               // );
//   //   //               // const iconElement = document.createElement('div');
//   //   //               // iconElement.innerHTML = iconMarkup;
//   //   //               // markerContentElement.appendChild(iconElement);
//   //   //               // Create the Font Awesome icon element
//   //   //               const iconElement = document.createElement('i');
//   //   //               iconElement.className = `fas ${iconClass}`;
//   //   //               iconElement.style.fontSize = '30px';
//   //   //               iconElement.style.color = '#000';
//   //   //               markerContentElement.appendChild(iconElement);

//   //   //               const newMarker = new tt.Marker({
//   //   //                 element: markerElement,
//   //   //                 anchor: 'bottom',
//   //   //                 draggable: false,
//   //   //                 color: '#FF0000',
//   //   //               }).setLngLat(feature.geometry.coordinates);

//   //   //               newMarker.addTo(map.current);
//   //   //               newMarker.setPopup(
//   //   //                 new tt.Popup({ offset: 30, closeButton: false }).setHTML(
//   //   //                   `<div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden;">
//   //   //                     <a href='/pets/${feature.properties.id}'>
//   //   //                       <div style="width: 120px; height: 120px; border-radius: 50%;  border: 3px solid white;
//   //   //                       background-image: url(${feature.properties.img});
//   //   //                       background-size: cover;
//   //   //                       background-position: center;">
//   //   //                       </div>
//   //   //                     </a>
//   //   //                   </div>`,
//   //   //                 ),
//   //   //               );

//   //   //               markersOnTheMap.current[id] = newMarker;
//   //   //             }
//   //   //           }
//   //   //         });
//   //   //       };

//   //   //       map.current.on('data', (e) => {
//   //   //         if (e.sourceId !== 'point-source' || !map.current.getSource('point-source').loaded()) {
//   //   //           return;
//   //   //         }

//   //   //         refreshMarkers();

//   //   //         if (!eventListenersAdded.current) {
//   //   //           map.current.on('move', refreshMarkers);
//   //   //           map.current.on('moveend', refreshMarkers);
//   //   //           eventListenersAdded.current = true;
//   //   //         }
//   //   //       });

//   //   //       map.current.on('click', 'clusters', (e) => {
//   //   //         const features = map.current.queryRenderedFeatures(e.point, { layers: ['clusters'] });
//   //   //         const clusterId = features[0].properties.cluster_id;
//   //   //         map.current
//   //   //           .getSource('point-source')
//   //   //           .getClusterExpansionZoom(clusterId, (err, zoom) => {
//   //   //             if (err) {
//   //   //               return;
//   //   //             }

//   //   //             map.current.easeTo({
//   //   //               center: features[0].geometry.coordinates,
//   //   //               zoom: zoom + 0.5,
//   //   //             });
//   //   //           });
//   //   //       });

//   //   //       map.current.on('mouseenter', 'clusters', () => {
//   //   //         map.current.getCanvas().style.cursor = 'pointer';
//   //   //       });

//   //   //       map.current.on('mouseleave', 'clusters', () => {
//   //   //         map.current.getCanvas().style.cursor = '';
//   //   //       });

//   //   //       if ('geolocation' in navigator) {
//   //   //         navigator.geolocation.getCurrentPosition((position) => {
//   //   //           const userLat = position.coords.latitude;
//   //   //           const userLng = position.coords.longitude;
//   //   //           const size = 200;

//   //   //           const locationPoint = {
//   //   //             width: size,
//   //   //             height: size,
//   //   //             data: new Uint8Array(size * size * 4),
//   //   //             onAdd: function () {
//   //   //               const canvas = document.createElement('canvas');
//   //   //               canvas.width = this.width;
//   //   //               canvas.height = this.height;
//   //   //               this.context = canvas.getContext('2d');
//   //   //             },
//   //   //             render: function () {
//   //   //               const duration = 1100;
//   //   //               const t = (performance.now() % duration) / duration;

//   //   //               const radius = 18 + 2 * this.easeInOutSine(t);
//   //   //               const outerRadius = 80 * this.easeInOutSine(t) + radius;
//   //   //               const context = this.context;

//   //   //               context.clearRect(0, 0, this.width, this.height);
//   //   //               context.beginPath();
//   //   //               context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
//   //   //               context.fillStyle = 'rgba(0, 145, 255,' + this.easeInOutSine(1 - t) + ')';
//   //   //               context.fill();

//   //   //               context.beginPath();
//   //   //               context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
//   //   //               context.fillStyle = 'rgba(0, 145, 255, 1)';
//   //   //               context.strokeStyle = 'white';
//   //   //               context.lineWidth = 3 + this.easeInOutSine(1 - t);
//   //   //               context.fill();
//   //   //               context.stroke();

//   //   //               this.data = context.getImageData(0, 0, this.width, this.height).data;
//   //   //               map.current.triggerRepaint();
//   //   //               return true;
//   //   //             },
//   //   //             easeInOutSine: function (x) {
//   //   //               return -(Math.cos(Math.PI * x) - 1) / 2;
//   //   //             },
//   //   //           };

//   //   //           map.current.addImage('pulsing-dot', locationPoint, { pixelRatio: 2 });

//   //   //           map.current.addSource('points', {
//   //   //             type: 'geojson',
//   //   //             data: {
//   //   //               type: 'FeatureCollection',
//   //   //               features: [
//   //   //                 {
//   //   //                   type: 'Feature',
//   //   //                   geometry: {
//   //   //                     type: 'Point',
//   //   //                     coordinates: [userLng, userLat],
//   //   //                   },
//   //   //                 },
//   //   //               ],
//   //   //             },
//   //   //           });

//   //   //           map.current.addLayer({
//   //   //             id: 'points',
//   //   //             type: 'symbol',
//   //   //             source: 'points',
//   //   //             layout: {
//   //   //               'icon-image': 'pulsing-dot',
//   //   //             },
//   //   //           });
//   //   //         });
//   //   //       }
//   //   //     }
//   //   //   });
//   //   // });

//   //   return () => {
//   //     if (map.current) {
//   //       map.current.remove();
//   //       map.current = null;
//   //     }
//   //   };
//   // }, [pets]);

//   return <div ref={mapElement} style={{ height: '440px', width: '100%' }}></div>;
// };

// export default TomTomClusterMap;
// import React, { useEffect, useRef } from 'react';
// import tt from '@tomtom-international/web-sdk-maps';
// import '@tomtom-international/web-sdk-maps/dist/maps.css';
// import { TOMTOM_API } from '../../middleware/config';
// const TomTomClusterMap = ({ pets }) => {
//   const mapElement = useRef(null);
//   const map = useRef(null);
//   const markersOnTheMap = useRef({});

//   useEffect(() => {
//     if (!map.current) {
//       map.current = tt.map({
//         key: TOMTOM_API,
//         container: mapElement.current,
//         center: [24.105078, 56.946285], // Example initial center
//         zoom: 6, // Example initial zoom level
//       });

//       map.current.addControl(new tt.NavigationControl());
//       map.current.addControl(new tt.FullscreenControl());

//       const southwest = new tt.LngLat(18.059, 52.129);
//       const northeast = new tt.LngLat(30.425, 61.259);
//       const bounds = new tt.LngLatBounds(southwest, northeast);
//       map.current.setMaxBounds(bounds);

//       map.current.on('style.load', function () {
//         const points = pets.map((pet) => ({
//           type: 'Feature',
//           geometry: {
//             type: 'Point',
//             coordinates: pet.location.coordinates,
//           },
//           properties: {
//             id: pet._id,
//             name: pet.initialStatus,
//             img: pet.mainImage || 'images/placeholder.jpg',
//             species: pet.category,
//           },
//         }));

//         const geoJson = {
//           type: 'FeatureCollection',
//           features: points,
//         };

//         map.current.addSource('points', {
//           type: 'geojson',
//           data: geoJson,
//           cluster: true,
//           clusterMaxZoom: 14,
//           clusterRadius: 50,
//         });

//         map.current.addLayer({
//           id: 'clusters',
//           type: 'circle',
//           source: 'points',
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
//           source: 'points',
//           filter: ['has', 'point_count'],
//           layout: {
//             'text-field': '{point_count_abbreviated}',
//             'text-size': 16,
//           },
//           paint: {
//             'text-color': 'white',
//           },
//         });

//         map.current.addLayer({
//           id: 'unclustered-point',
//           type: 'circle',
//           source: 'points',
//           filter: ['!', ['has', 'point_count']],
//           paint: {
//             'circle-color': '#FF0000',
//             'circle-radius': 10,
//             'circle-stroke-width': 1,
//             'circle-stroke-color': 'white',
//           },
//         });

//         map.current.on('click', 'unclustered-point', (e) => {
//           const coordinates = e.features[0].geometry.coordinates.slice();
//           const { id, name, img, species } = e.features[0].properties;

//           const tooltipHtml = `
//             <div>
//               <img src="${img}" alt="${name}" style="width: 100px; height: 100px;"/>
//               <p>Name: ${name}</p>
//               <p>Species: ${species}</p>
//             </div>
//           `;

//           new tt.Popup().setLngLat(coordinates).setHTML(tooltipHtml).addTo(map.current);
//         });

//         map.current.on('click', 'clusters', (e) => {
//           const features = map.current.queryRenderedFeatures(e.point, { layers: ['clusters'] });
//           const clusterId = features[0].properties.cluster_id;
//           map.current.getSource('points').getClusterExpansionZoom(clusterId, (err, zoom) => {
//             if (err) return;

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
//       });
//     }

//     return () => {
//       if (map.current) {
//         map.current.remove();
//         map.current = null;
//       }
//     };
//   }, [pets]);

//   return <div ref={mapElement} style={{ height: '400px', width: '100%' }} />;
// };
// import React, { useEffect, useRef, useState } from 'react';
// import tt from '@tomtom-international/web-sdk-maps';
// import '@tomtom-international/web-sdk-maps/dist/maps.css';
// import { TOMTOM_API } from '../../middleware/config';

// const TomTomClusterMap = ({ pets }) => {
//   const mapElement = useRef(null);
//   const map = useRef(null);
//   const markersOnTheMap = useRef({});
//   const [styleLoaded, setStyleLoaded] = useState(false);
//   const eventListenersAdded = useRef(false);

//   useEffect(() => {
//     if (!mapElement.current) return; // Ensure map container is available

//     map.current = tt.map({
//       key: TOMTOM_API,
//       container: mapElement.current,
//       center: [-0.128666, 51.505814], // Example initial center
//       zoom: 10, // Example initial zoom level
//     });

//     map.current.addControl(new tt.FullscreenControl());
//     map.current.addControl(new tt.NavigationControl());

//     map.current.on('load', () => {
//       setStyleLoaded(true);
//     });

//     return () => {
//       if (map.current) {
//         map.current.remove();
//         map.current = null;
//       }
//     }; // Cleanup on unmount
//   }, []);

//   useEffect(() => {
//     if (!styleLoaded || !map.current) return;

//     const geoJson = {
//       type: 'FeatureCollection',
//       features: pets.map((pet) => ({
//         type: 'Feature',
//         geometry: {
//           type: 'Point',
//           coordinates: pet.location.coordinates,
//         },
//         properties: {
//           id: pet._id,
//           name: pet.initialStatus,
//           img: pet.mainImage || 'images/placeholder.jpg',
//           species: pet.category,
//         },
//       })),
//     };

//     if (map.current.getSource('points')) {
//       map.current.getSource('points').setData(geoJson);
//     } else {
//       map.current.addSource('points', {
//         type: 'geojson',
//         data: geoJson,
//         cluster: true,
//         clusterMaxZoom: 14,
//         clusterRadius: 50,
//       });

//       map.current.addLayer({
//         id: 'clusters',
//         type: 'circle',
//         source: 'points',
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
//         source: 'points',
//         filter: ['has', 'point_count'],
//         layout: {
//           'text-field': '{point_count_abbreviated}',
//           'text-size': 16,
//         },
//         paint: {
//           'text-color': 'white',
//         },
//       });

//       map.current.addLayer({
//         id: 'unclustered-point',
//         type: 'circle',
//         source: 'points',
//         filter: ['!', ['has', 'point_count']],
//         paint: {
//           'circle-color': '#FF0000',
//           'circle-radius': 10,
//           'circle-stroke-width': 1,
//           'circle-stroke-color': 'white',
//         },
//       });

//       const refreshMarkers = () => {
//         Object.keys(markersOnTheMap.current).forEach((id) => {
//           markersOnTheMap.current[id].remove();
//           delete markersOnTheMap.current[id];
//         });

//         map.current.querySourceFeatures('points').forEach((feature) => {
//           if (feature.properties && !feature.properties.cluster) {
//             const id = parseInt(feature.properties.id, 10);
//             if (!markersOnTheMap.current[id]) {
//               const newMarker = new tt.Marker()
//                 .setLngLat(feature.geometry.coordinates)
//                 .addTo(map.current)
//                 .setPopup(new tt.Popup({ offset: 30 }).setText(feature.properties.name));
//               markersOnTheMap.current[id] = newMarker;
//             }
//           }
//         });
//       };

//       map.current.on('data', (e) => {
//         if (e.sourceId !== 'points' || !map.current.getSource('points').loaded()) {
//           return;
//         }

//         refreshMarkers();

//         if (!eventListenersAdded.current) {
//           map.current.on('move', refreshMarkers);
//           map.current.on('moveend', refreshMarkers);
//           eventListenersAdded.current = true;
//         }
//       });

//       map.current.on('click', 'clusters', (e) => {
//         const features = map.current.queryRenderedFeatures(e.point, { layers: ['clusters'] });
//         const clusterId = features[0].properties.cluster_id;
//         map.current.getSource('points').getClusterExpansionZoom(clusterId, (err, zoom) => {
//           if (err) {
//             return;
//           }

//           map.current.easeTo({
//             center: features[0].geometry.coordinates,
//             zoom: zoom + 0.5,
//           });
//         });
//       });

//       map.current.on('mouseenter', 'clusters', () => {
//         map.current.getCanvas().style.cursor = 'pointer';
//       });

//       map.current.on('mouseleave', 'clusters', () => {
//         map.current.getCanvas().style.cursor = '';
//       });
//     }
//   }, [styleLoaded, pets]);

//   return <div ref={mapElement} style={{ width: '100%', height: '500px' }} />;
// };

// export default TomTomClusterMap;
import React, { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { TOMTOM_API } from '../../middleware/config';

const TomTomMap = ({ pets }) => {
  const mapElement = useRef(null);
  const map = useRef(null);
  const markersOnTheMap = useRef({});

  useEffect(() => {
    if (!mapElement.current) return;

    map.current = tt.map({
      key: TOMTOM_API,
      container: mapElement.current,
      center: [24.105078, 56.946285], // Example initial center
      zoom: 6, // Example initial zoom level
    });

    map.current.addControl(new tt.FullscreenControl());
    map.current.addControl(new tt.NavigationControl());

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    }; // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (!map.current || !pets.length) return;

    // Clear existing markers
    Object.values(markersOnTheMap.current).forEach((marker) => marker.remove());
    markersOnTheMap.current = {};

    // Add new markers for each pet
    pets.forEach((pet) => {
      const { _id, location, initialStatus } = pet;
      const { coordinates } = location;

      if (coordinates && coordinates.length === 2) {
        const marker = new tt.Marker()
          .setLngLat(coordinates)
          .addTo(map.current)
          .setPopup(
            new tt.Popup({ offset: 30, closeButton: false }).setHTML(
              `<div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden;">
                        <a href='/pets/${pet._id}'>
                          <div style="width: 120px; height: 120px; border-radius: 50%;  border: 3px solid white;
                          background-image: url(${pet.mainImage});
                          background-size: cover;
                          background-position: center;">
                          </div>
                        </a>
                      </div>`,
            ),
          );

        markersOnTheMap.current[_id] = marker;
      }
    });
  }, [pets]);

  return <div ref={mapElement} style={{ width: '100%', height: '500px' }} />;
};

export default TomTomMap;
