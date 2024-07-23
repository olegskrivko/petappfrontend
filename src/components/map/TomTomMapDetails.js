import React, { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { TOMTOM_API } from '../../middleware/config';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { renderToStaticMarkup } from 'react-dom/server';

import CustomAlert from '../alert/CustomAlert';

const TomTomMapDetails = ({ pet, location, onAddLocation, onRemoveLocation }) => {
  const [markerPosition, setMarkerPosition] = useState('hello test');
  console.log('petpetpetpet', pet);
  const mapElement = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [solutionMessage, setSolutionMessage] = useState(null);

  const addedMarker = useRef(null); // Ref to keep track of the added marker
  useEffect(() => {
    // Ensure the map is initialized
    if (!map.current) {
      return;
    }

    // Create a new iconElement for the marker
    const iconElement = document.createElement('div');
    const iconMarkups = renderToStaticMarkup(
      <LocationOnIcon style={{ color: '#006FB9', fontSize: '2rem' }} />,
    );
    iconElement.innerHTML = iconMarkups;

    // Remove the previous marker if it exists
    if (addedMarker.current) {
      addedMarker.current.remove();
    }

    // Get the center of the map
    const center = map.current.getCenter();

    // Add a new marker to the map at the center
    addedMarker.current = new tt.Marker({
      element: iconElement,
      draggable: true,
    })
      .setLngLat([center.lng, center.lat]) // [longitude, latitude]
      .addTo(map.current);

    // Add an event listener to the marker's dragend event
    addedMarker.current.on('dragend', () => {
      // Get the marker's new position
      const newPosition = addedMarker.current.getLngLat();
      console.log('newPosition', newPosition);
      // Update the marker position
      // setMarkerPosition(newPosition);

      // Update the location in the parent component
      onAddLocation(newPosition);
      // if (location) {
      //   onAddLocation(newPosition);
      // }
    });

    console.log('location correct', center.lng, center.lat);
  }, [map.current]); // Run this effect whenever location changes, // Run this effect whenever map.current or addLocationClicked changes

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = tt.map({
      key: TOMTOM_API, // Replace with your TomTom API key
      container: mapElement.current,
      center: [pet.location.coordinates[0], pet.location.coordinates[1]], // Initial map center [longitude, latitude]
      zoom: 10, // Initial zoom level
    });

    map.current.addControl(new tt.NavigationControl());

    const iconElement = document.createElement('div');
    const iconMarkups = renderToStaticMarkup(
      <LocationOnIcon style={{ color: '#800080', fontSize: '2rem' }} />,
    );
    iconElement.innerHTML = iconMarkups;

    const iconMarkup = renderToStaticMarkup(
      <LocationOnIcon style={{ color: '#D30A0A', fontSize: '2rem' }} />,
    );

    iconElement.innerHTML = iconMarkup;
    // Add a marker to the map
    marker.current = new tt.Marker({
      element: iconElement,
      draggable: false,
    })
      .setLngLat([pet.location.coordinates[0], pet.location.coordinates[1]])
      .addTo(map.current);

    // Add a marker for each location in locations
    pet.locationHistory.forEach((location) => {
      if (location.location && Array.isArray(location.location.coordinates)) {
        // Create a new iconElement for each marker
        const iconElement = document.createElement('div');
        iconElement.innerHTML = iconMarkups;

        const marker = new tt.Marker({ element: iconElement, draggable: false })
          .setLngLat([location.location.coordinates[1], location.location.coordinates[0]]) // [longitude, latitude]
          .addTo(map.current);
      }
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div>
      {errorMessage && (
        <CustomAlert errorMessage={errorMessage} solutionMessage={solutionMessage}></CustomAlert>
      )}
      <div ref={mapElement} style={{ height: '400px', width: '100%' }} />
    </div>
  );
};

export default TomTomMapDetails;
