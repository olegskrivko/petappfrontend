import React, { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { TOMTOM_API } from '../../middleware/config';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { renderToStaticMarkup } from 'react-dom/server';

import CustomAlert from '../alert/CustomAlert';

const TomTomMap = ({ onLocationChange }) => {
  const mapElement = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [solutionMessage, setSolutionMessage] = useState(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = tt.map({
      key: TOMTOM_API, // Replace with your TomTom API key
      container: mapElement.current,
      center: [24.105078, 56.946285], // Initial map center [longitude, latitude]
      zoom: 6, // Initial zoom level
    });

    map.current.addControl(new tt.NavigationControl());

    const iconElement = document.createElement('div');
    const iconMarkup = renderToStaticMarkup(
      <LocationOnIcon style={{ color: '#D30A0A', fontSize: '2rem' }} />,
    );
    iconElement.innerHTML = iconMarkup;

    // Add a marker to the map
    marker.current = new tt.Marker({
      element: iconElement,
      draggable: true,
    })
      .setLngLat([24.105078, 56.946285])
      .addTo(map.current);

    // Get user's current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        if (map.current) {
          marker.current.setLngLat([longitude, latitude]);
          map.current.setCenter([longitude, latitude]);
        }
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setErrorMessage('Geolocation Permission Denied');
            setSolutionMessage(
              'Please enable GPS and allow location access in your browser settings.',
            );
            break;
          case error.POSITION_UNAVAILABLE:
            setErrorMessage('Location Information Unavailable');
            setSolutionMessage("Please check your device's location settings or try again later.");
            break;
          case error.TIMEOUT:
            setErrorMessage('Geolocation Request Timed Out');
            setSolutionMessage('Please ensure your device has a stable connection and try again.');
            break;
          case error.UNKNOWN_ERROR:
            setErrorMessage('Unknown Error Occurred');
            setSolutionMessage(
              'An unknown error occurred while retrieving your location. Please try again.',
            );
            break;
          default:
            setErrorMessage('An Error Occurred');
            setSolutionMessage('An unexpected error occurred. Please try again.');
        }
        // Fallback to hardcoded initial value
        const initialLngLat = [24.105078, 56.946285];
        if (map.current) {
          marker.current.setLngLat(initialLngLat);
          map.current.setCenter(initialLngLat);
        }
      },
    );
    // Handle marker drag end event to update coordinates
    marker.current.on('dragend', () => {
      const lngLat = marker.current.getLngLat();
      console.log(`Longitude: ${lngLat.lng}, Latitude: ${lngLat.lat}`);
      const coords = { lat: lngLat.lat, lng: lngLat.lng };
      onLocationChange(coords);
    });

    // Add click event listener to the map to place the marker
    map.current.on('click', (event) => {
      const { lng, lat } = event.lngLat;
      marker.current.setLngLat([lng, lat]);
      console.log(`Marker placed at Longitude: ${lng}, Latitude: ${lat}`);
      const coords = { lat: event.lngLat.lat, lng: event.lngLat.lng };
      onLocationChange(coords);
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
      <div ref={mapElement} style={{ height: '500px', width: '100%' }} />
    </div>
  );
};

export default TomTomMap;
