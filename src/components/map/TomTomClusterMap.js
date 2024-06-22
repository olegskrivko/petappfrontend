import React, { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { TOMTOM_API } from '../../middleware/config';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { renderToStaticMarkup } from 'react-dom/server';

import CustomAlert from '../alert/CustomAlert';

const TomTomMap = () => {
  const mapElement = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = tt.map({
      key: TOMTOM_API, // Replace with your TomTom API key
      container: mapElement.current,
      center: [24.105078, 56.946285], // Initial map center [longitude, latitude]
      zoom: 6, // Initial zoom level
    });

    map.current.addControl(new tt.NavigationControl());

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return <div ref={mapElement} style={{ height: '500px', width: '100%' }} />;
};

export default TomTomMap;
