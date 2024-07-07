import React from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '@mui/material';

// Function to create a custom icon with a specified color
const createCustomIcon = (color) =>
  new L.DivIcon({
    html: renderToStaticMarkup(<LocationOnIcon style={{ fontSize: 40, color }} />),
    className: 'custom-div-icon',
    iconSize: [40, 47],
    iconAnchor: [20, 47],
    popupAnchor: [0, -47],
  });

// Component for adding a marker on map click
const AddMarkerButton = ({ onAddLocation }) => {
  const map = useMap();
  const newMarkerIcon = createCustomIcon('#00FF00'); // New marker color

  const handleAddMarker = () => {
    const center = map.getCenter();
    onAddLocation(center);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleAddMarker}
      style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1000 }}
    >
      Add Marker at Center
    </Button>
  );
};

export default AddMarkerButton;
