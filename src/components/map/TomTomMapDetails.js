import React, { useEffect, useRef, useState } from "react";
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import { TOMTOM_API } from "../../middleware/config";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { renderToStaticMarkup } from "react-dom/server";

import CustomAlert from "../alert/CustomAlert";

const TomTomMapDetails = ({
  pet,
  location,
  onAddLocation,
  onRemoveLocation,
}) => {
  const [markerPosition, setMarkerPosition] = useState("hello test");
  console.log("petpetpetpet", pet);
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
    const iconElement = document.createElement("div");
    const iconMarkups = renderToStaticMarkup(
      <LocationOnIcon style={{ color: "#006FB9", fontSize: "2rem" }} />
    );
    iconElement.innerHTML = iconMarkups;

    // Remove the previous marker if it exists
    if (addedMarker.current) {
      addedMarker.current.remove();
    }
    // Remove the previous marker if it exists
    // if (addedMarker.current) {
    //   addedMarker.current.remove();
    //   addedMarker.current = null;
    //   map.current.render(); // Force a re-render of the map
    // }

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
    addedMarker.current.on("dragend", () => {
      // Get the marker's new position
      const newPosition = addedMarker.current.getLngLat();
      console.log("newPosition", newPosition);
      // Update the marker position
      // setMarkerPosition(newPosition);

      // Update the location in the parent component
      onAddLocation(newPosition);
      // if (location) {
      //   onAddLocation(newPosition);
      // }
    });

    // Only update the location in the parent component if it has changed
    // if (location.lat !== center.lat || location.lng !== center.lng) {
    //   onAddLocation(center);
    //   // onAddLocation(markerPosition);
    // this worked when dependency was location, but now it's map.current. otherwise it will keep updating, loop.
    // }

    console.log("location correct", center.lng, center.lat);
  }, [map.current]); // Run this effect whenever location changes, // Run this effect whenever map.current or addLocationClicked changes
  // useEffect(() => {
  //   // Ensure the map is initialized
  //   if (!map.current) {
  //     return;
  //   }

  //   // Create a new iconElement for the marker
  //   const iconElement = document.createElement("div");
  //   const iconMarkups = renderToStaticMarkup(
  //     <LocationOnIcon style={{ color: "#006FB9", fontSize: "2rem" }} />
  //   );
  //   iconElement.innerHTML = iconMarkups;

  //   // Remove the previous marker if it exists
  //   if (addedMarker.current) {
  //     addedMarker.current.remove();
  //   }

  //   // Get the center of the map
  //   const center = map.current.getCenter();

  //   // Add a new marker to the map at the center
  //   addedMarker.current = new tt.Marker({
  //     element: iconElement,
  //     draggable: true,
  //   })
  //     .setLngLat([center.lng, center.lat]) // [longitude, latitude]
  //     .addTo(map.current);

  //   onAddLocation(center);
  //   console.log("location correct", center.lng, center.lat);
  // }, [location]); // Run this effect whenever location changes

  // useEffect(() => {
  //   if (location) {
  //     // Remove the previous marker if it exists
  //     if (addedMarker.current) {
  //       addedMarker.current.remove();
  //     }

  //     // Create a new iconElement for the marker
  //     const iconElement = document.createElement("div");
  //     const iconMarkups = renderToStaticMarkup(
  //       <LocationOnIcon style={{ color: "#006FB9", fontSize: "2rem" }} />
  //     );
  //     iconElement.innerHTML = iconMarkups;

  //     // Add a new marker to the map at the new location
  //     addedMarker.current = new tt.Marker({
  //       element: iconElement,
  //       draggable: true,
  //     })
  //       .setLngLat([location.lng, location.lat]) // [longitude, latitude]
  //       .addTo(map.current);
  //   }
  // }, [location]); // Run this effect whenever location changes

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = tt.map({
      key: TOMTOM_API, // Replace with your TomTom API key
      container: mapElement.current,
      center: [pet.location.coordinates[0], pet.location.coordinates[1]], // Initial map center [longitude, latitude]
      zoom: 10, // Initial zoom level
    });

    map.current.addControl(new tt.NavigationControl());

    // Create a custom marker icon
    // const iconElement = document.createElement("div");
    // iconElement.className = "custom-marker";
    // iconElement.style.backgroundColor = "red";
    // iconElement.style.width = "30px";
    // iconElement.style.height = "30px";
    // iconElement.style.borderRadius = "50%";
    // Create a custom marker icon using a Material-UI icon
    const iconElement = document.createElement("div");
    const iconMarkups = renderToStaticMarkup(
      <LocationOnIcon style={{ color: "#800080", fontSize: "2rem" }} />
    );
    iconElement.innerHTML = iconMarkups;

    const iconMarkup = renderToStaticMarkup(
      <LocationOnIcon style={{ color: "#D30A0A", fontSize: "2rem" }} />
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
        const iconElement = document.createElement("div");
        iconElement.innerHTML = iconMarkups;

        const marker = new tt.Marker({ element: iconElement, draggable: false })
          .setLngLat([
            location.location.coordinates[1],
            location.location.coordinates[0],
          ]) // [longitude, latitude]
          .addTo(map.current);
      }
    });

    // const iconElementNew = document.createElement("div");
    // const iconMarkupsNew = renderToStaticMarkup(
    //   <LocationOnIcon style={{ color: "#006FB9", fontSize: "2rem" }} />
    // );
    // iconElementNew.innerHTML = iconMarkupsNew;

    // // Remove the previous marker if it exists
    // if (addedMarker.current) {
    //   addedMarker.current.remove();
    // }

    // // Get the center of the map
    // const center = map.current.getCenter();

    // // Add a new marker to the map at the center
    // addedMarker.current = new tt.Marker({
    //   element: iconElementNew,
    //   draggable: true,
    // })
    //   .setLngLat([center.lng, center.lat]) // [longitude, latitude]
    //   .addTo(map.current);
    // map.current.on("click", function (e) {
    //   //console.log("A location was clicked:", e.lngLat);
    //   console.log("A location was clicked:", locations);
    //   // onAddLocation({locations
    //   //   // lat: e.lngLat.lat,
    //   //   // lng: e.lngLat.lng,
    //   // });
    // });
    // console.log("onAddLocation", onAddLocation);

    // Get user's current position
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     const { latitude, longitude } = position.coords;
    //     marker.current.setLngLat([longitude, latitude]);
    //     map.current.setCenter([longitude, latitude]);
    //   },
    //   (error) => {
    //     switch (error.code) {
    //       case error.PERMISSION_DENIED:
    //         setErrorMessage("Geolocation Permission Denied");
    //         setSolutionMessage(
    //           "Please enable GPS and allow location access in your browser settings."
    //         );
    //         break;
    //       case error.POSITION_UNAVAILABLE:
    //         setErrorMessage("Location Information Unavailable");
    //         setSolutionMessage(
    //           "Please check your device's location settings or try again later."
    //         );
    //         break;
    //       case error.TIMEOUT:
    //         setErrorMessage("Geolocation Request Timed Out");
    //         setSolutionMessage(
    //           "Please ensure your device has a stable connection and try again."
    //         );
    //         break;
    //       case error.UNKNOWN_ERROR:
    //         setErrorMessage("Unknown Error Occurred");
    //         setSolutionMessage(
    //           "An unknown error occurred while retrieving your location. Please try again."
    //         );
    //         break;
    //       default:
    //         setErrorMessage("An Error Occurred");
    //         setSolutionMessage(
    //           "An unexpected error occurred. Please try again."
    //         );
    //     }
    //     // Fallback to hardcoded initial value
    //     const initialLngLat = [24.105078, 56.946285];
    //     marker.current.setLngLat(initialLngLat);
    //     map.current.setCenter(initialLngLat);
    //   }
    // );
    // Get user's current position
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     const { latitude, longitude } = position.coords;
    //     if (map.current) {
    //       marker.current.setLngLat([longitude, latitude]);
    //       map.current.setCenter([longitude, latitude]);
    //     }
    //   },
    //   (error) => {
    //     switch (error.code) {
    //       case error.PERMISSION_DENIED:
    //         setErrorMessage("Geolocation Permission Denied");
    //         setSolutionMessage(
    //           "Please enable GPS and allow location access in your browser settings."
    //         );
    //         break;
    //       case error.POSITION_UNAVAILABLE:
    //         setErrorMessage("Location Information Unavailable");
    //         setSolutionMessage(
    //           "Please check your device's location settings or try again later."
    //         );
    //         break;
    //       case error.TIMEOUT:
    //         setErrorMessage("Geolocation Request Timed Out");
    //         setSolutionMessage(
    //           "Please ensure your device has a stable connection and try again."
    //         );
    //         break;
    //       case error.UNKNOWN_ERROR:
    //         setErrorMessage("Unknown Error Occurred");
    //         setSolutionMessage(
    //           "An unknown error occurred while retrieving your location. Please try again."
    //         );
    //         break;
    //       default:
    //         setErrorMessage("An Error Occurred");
    //         setSolutionMessage(
    //           "An unexpected error occurred. Please try again."
    //         );
    //     }
    //     // Fallback to hardcoded initial value
    //     const initialLngLat = [24.105078, 56.946285];
    //     if (map.current) {
    //       marker.current.setLngLat(initialLngLat);
    //       map.current.setCenter(initialLngLat);
    //     }
    //   }
    // );
    // Handle marker drag end event to update coordinates
    // marker.current.on("dragend", () => {
    //   const lngLat = marker.current.getLngLat();
    //   console.log(`Longitude: ${lngLat.lng}, Latitude: ${lngLat.lat}`);
    //   const coords = { lat: lngLat.lat, lng: lngLat.lng };
    //   onLocationChange(coords);
    // });

    // Add click event listener to the map to place the marker
    // map.current.on("click", (event) => {
    //   const { lng, lat } = event.lngLat;
    //   marker.current.setLngLat([lng, lat]);
    //   console.log(`Marker placed at Longitude: ${lng}, Latitude: ${lat}`);
    //   const coords = { lat: event.lngLat.lat, lng: event.lngLat.lng };
    //   onLocationChange(coords);
    // });

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
        <CustomAlert
          errorMessage={errorMessage}
          solutionMessage={solutionMessage}
        ></CustomAlert>
      )}
      <div ref={mapElement} style={{ height: "400px", width: "100%" }} />
    </div>
  );
};

export default TomTomMapDetails;
