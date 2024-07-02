///////////////////////////////////////////////////////////
// AWESOME ICONS CLUSTER MAP START
///////////////////////////////////////////////////////////

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
///////////////////////////////////////////////////////////
// AWESOME ICONS CLUSTER MAP END
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// REACT MUI ICONS START
///////////////////////////////////////////////////////////
// import React, { useEffect, useRef, useState } from 'react';
// import tt from '@tomtom-international/web-sdk-maps';
// import '@tomtom-international/web-sdk-maps/dist/maps.css';
// import { TOMTOM_API } from '../../middleware/config';
// import { renderToStaticMarkup } from 'react-dom/server';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// const TomTomMap = ({ pets }) => {
//   const mapElement = useRef(null);
//   const map = useRef(null);
//   const markersOnTheMap = useRef({});

//   useEffect(() => {
//     if (!mapElement.current) return;

//     map.current = tt.map({
//       key: TOMTOM_API,
//       container: mapElement.current,
//       center: [24.105078, 56.946285], // Example initial center
//       zoom: 6, // Example initial zoom level
//     });

//     map.current.addControl(new tt.FullscreenControl());
//     map.current.addControl(new tt.NavigationControl());

//     return () => {
//       if (map.current) {
//         map.current.remove();
//         map.current = null;
//       }
//     }; // Cleanup on unmount
//   }, []);

//   useEffect(() => {
//     if (!map.current || !pets.length) return;

//     // Clear existing markers
//     Object.values(markersOnTheMap.current).forEach((marker) => marker.remove());
//     markersOnTheMap.current = {};

//     // Add new markers for each pet
//     pets.forEach((pet) => {
//       const { _id, location, initialStatus, category } = pet;

//       const { coordinates } = location;

//       const iconElement = document.createElement('div');
//       const iconMarkups = renderToStaticMarkup(
//         <LocationOnIcon style={{ color: '#800080', fontSize: '2rem' }} />,
//       );
//       iconElement.innerHTML = iconMarkups;

//       if (coordinates && coordinates.length === 2) {
//         const marker = new tt.Marker({ element: iconElement })
//           .setLngLat(coordinates)
//           .addTo(map.current)
//           .setPopup(
//             new tt.Popup({ offset: 30, closeButton: false }).setHTML(
//               `<div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden;">
//                         <a href='/pets/${pet._id}'>
//                           <div style="width: 120px; height: 120px; border-radius: 50%;  border: 3px solid white;
//                           background-image: url(${pet.mainImage});
//                           background-size: cover;
//                           background-position: center;">
//                           </div>
//                         </a>
//                       </div>`,
//             ),
//           );

//         markersOnTheMap.current[_id] = marker;
//       }
//     });
//   }, [pets]);

//   return <div ref={mapElement} style={{ width: '100%', height: '500px' }} />;
// };

// export default TomTomMap;
///////////////////////////////////////////////////////////
// REACT MUI ICONS END
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// CUSTOM ICONS START
///////////////////////////////////////////////////////////
// import React, { useEffect, useRef, useState } from 'react';
// import tt from '@tomtom-international/web-sdk-maps';
// import '@tomtom-international/web-sdk-maps/dist/maps.css';
// import { TOMTOM_API } from '../../middleware/config';
// import { renderToStaticMarkup } from 'react-dom/server';
// import LocationOnIcon from '@mui/icons-material/LocationOn'; // Import MUI icon
// import iconDog from '../../images/dog.png';
// import iconCat from '../../images/cat.png';
// import iconPaw from '../../images/paw.png';

// const TomTomMap = ({ pets, onUserLocationChange }) => {
//   const mapElement = useRef(null);
//   const map = useRef(null);
//   const markersOnTheMap = useRef({});
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [solutionMessage, setSolutionMessage] = useState(null);

//   const addedMarker = useRef(null);

//   // Function to get icon URL based on pet category
//   const getIconForCategory = (category) => {
//     switch (category) {
//       case '1':
//         return iconDog; // Replace with actual path for category 1
//       case '2':
//         return iconCat; // Replace with actual path for category 2
//       default:
//         return iconPaw; // Replace with actual default icon path
//     }
//   };

//   useEffect(() => {
//     // if (!mapElement.current) return;
//     if (!mapElement.current || !pets.length) return;

//     // Initialize the map
//     map.current = tt.map({
//       key: TOMTOM_API,
//       container: mapElement.current,
//       center: [24.105078, 56.946285], // Example initial center
//       zoom: 6, // Example initial zoom level
//     });

//     // Add controls to the map
//     map.current.addControl(new tt.FullscreenControl());
//     map.current.addControl(new tt.NavigationControl());

//     // Add Geolocation control to the map
//     const geolocateControl = new tt.GeolocateControl({
//       positionOptions: {
//         enableHighAccuracy: true,
//       },
//       showAccuracyCircle: false,
//       trackUserLocation: true,
//     });

//     map.current.addControl(geolocateControl);

//     // Event listener for when the user's position is found
//     geolocateControl.on('geolocate', (e) => {
//       const coords = e.coords;
//       const { latitude, longitude } = coords;
//       onUserLocationChange({ latitude, longitude });
//     });

//     // Clear existing markers
//     Object.values(markersOnTheMap.current).forEach((marker) => marker.remove());
//     markersOnTheMap.current = {};

//     // Add new markers for each pet
//     pets.forEach((pet) => {
//       const { _id, location, mainImage, category } = pet;
//       const { coordinates } = location;

//       const iconUrl = getIconForCategory(category);

//       const iconElement = document.createElement('div');
//       const iconMarkups = renderToStaticMarkup(
//         <img
//           src={iconUrl}
//           alt={`Category ${category}`}
//           style={{ width: '30px', height: '30px' }}
//         />,
//       );
//       iconElement.innerHTML = iconMarkups;

//       if (coordinates && coordinates.length === 2) {
//         const marker = new tt.Marker({ element: iconElement })
//           .setLngLat(coordinates)
//           .addTo(map.current)
//           .setPopup(
//             new tt.Popup({ offset: 30, closeButton: false }).setHTML(
//               `<div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden;">
//                  <a href='/pets/${_id}'>
//                    <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid white;
//                      background-image: url(${mainImage});
//                      background-size: cover;
//                      background-position: center;">
//                    </div>
//                  </a>
//                </div>`,
//             ),
//           );

//         markersOnTheMap.current[_id] = marker;
//       }
//     });

//     return () => {
//       if (map.current) {
//         map.current.remove();
//         map.current = null;
//       }
//     }; // Cleanup on unmount
//   }, [pets]);

//   // useEffect(() => {
//   //   if (!mapElement.current) return;

//   //   map.current = tt.map({
//   //     key: TOMTOM_API,
//   //     container: mapElement.current,
//   //     center: [24.105078, 56.946285], // Example initial center
//   //     zoom: 6, // Example initial zoom level
//   //   });

//   //   map.current.addControl(new tt.FullscreenControl());
//   //   map.current.addControl(new tt.NavigationControl());

//   //   return () => {
//   //     if (map.current) {
//   //       map.current.remove();
//   //       map.current = null;
//   //     }
//   //   }; // Cleanup on unmount
//   // }, []);

//   // useEffect(() => {
//   //   if (!map.current || !pets.length) return;

//   //   // Clear existing markers
//   //   Object.values(markersOnTheMap.current).forEach((marker) => marker.remove());
//   //   markersOnTheMap.current = {};

//   //   // Add new markers for each pet
//   //   pets.forEach((pet) => {
//   //     const { _id, location, mainImage, category } = pet;
//   //     const { coordinates } = location;

//   //     const iconUrl = getIconForCategory(category);

//   //     const iconElement = document.createElement('div');
//   //     const iconMarkups = renderToStaticMarkup(
//   //       <img
//   //         src={iconUrl}
//   //         alt={`Category ${category}`}
//   //         style={{ width: '30px', height: '30px' }}
//   //       />,
//   //     );
//   //     iconElement.innerHTML = iconMarkups;

//   //     if (coordinates && coordinates.length === 2) {
//   //       const marker = new tt.Marker({ element: iconElement })
//   //         .setLngLat(coordinates)
//   //         .addTo(map.current)
//   //         .setPopup(
//   //           new tt.Popup({ offset: 30, closeButton: false }).setHTML(
//   //             `<div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden;">
//   //               <a href='/pets/${_id}'>
//   //                 <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid white;
//   //                   background-image: url(${mainImage});
//   //                   background-size: cover;
//   //                   background-position: center;">
//   //                 </div>
//   //               </a>
//   //             </div>`,
//   //           ),
//   //         );

//   //       markersOnTheMap.current[_id] = marker;
//   //     }
//   //   });
//   // }, [pets]);

//   return <div ref={mapElement} style={{ width: '100%', height: '500px' }} />;
// };

// export default TomTomMap;
///////////////////////////////////////////////////////////
// CUSTOM ICONS END
///////////////////////////////////////////////////////////
import React, { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { TOMTOM_API } from '../../middleware/config';
import { renderToStaticMarkup } from 'react-dom/server';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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

    // Create an array of features for clustering
    const features = pets.map((pet) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [pet.location.coordinates[0], pet.location.coordinates[1]],
      },
      properties: pet,
    }));

    // Add clustering source
    map.current.addSource('cluster-source', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: features,
      },
      cluster: true,
      clusterMaxZoom: 14, // Max zoom to cluster points on the map
      clusterRadius: 50, // Radius of each cluster when clustering points
    });

    // Add clustering layer
    map.current.addLayer({
      id: 'clusters',
      type: 'circle',
      source: 'cluster-source',
      filter: ['has', 'point_count'],
      paint: {
        'circle-color': ['step', ['get', 'point_count'], '#EC619F', 4, '#008D8D', 7, '#004B7F'],
        'circle-radius': ['step', ['get', 'point_count'], 15, 4, 20, 7, 25],
        'circle-stroke-width': 1,
        'circle-stroke-color': 'white',
        'circle-stroke-opacity': 1,
      },
    });

    // Add cluster count text layer
    map.current.addLayer({
      id: 'cluster-count',
      type: 'symbol',
      source: 'cluster-source',
      filter: ['has', 'point_count'],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-size': 16,
      },
      paint: {
        'text-color': 'white',
      },
    });

    // Add individual markers for non-clustered points
    features.forEach((feature) => {
      const { _id, location, mainImage } = feature.properties;
      const { coordinates } = feature.geometry;

      const iconElement = document.createElement('div');
      const iconMarkups = renderToStaticMarkup(
        <LocationOnIcon style={{ color: '#800080', fontSize: '2rem' }} />,
      );
      iconElement.innerHTML = iconMarkups;

      if (coordinates && coordinates.length === 2) {
        const marker = new tt.Marker({ element: iconElement })
          .setLngLat(coordinates)
          .addTo(map.current)
          .setPopup(
            new tt.Popup({ offset: 30, closeButton: false }).setHTML(
              `<div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden;">
                 <a href='/pets/${_id}'>
                   <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid white;
                     background-image: url(${mainImage});
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

    return () => {
      map.current.removeSource('cluster-source');
      map.current.removeLayer('clusters');
      map.current.removeLayer('cluster-count');

      // Clear existing markers
      Object.values(markersOnTheMap.current).forEach((marker) => marker.remove());
      markersOnTheMap.current = {};
    };
  }, [pets]);

  return <div ref={mapElement} style={{ width: '100%', height: '500px' }} />;
};

export default TomTomMap;
