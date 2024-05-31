// src/TomTomMap.js
import React, { useEffect } from "react";
// import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

const TomTomMap = () => {
  useEffect(() => {
    const tt = window.tt;
    const map = tt.map({
      key: "xFokTxRRN2XWygHA8748GxHUGVAmcx9A",
      container: "map",
      //   style: "tomtom://vector/1/basic-main",
      center: [0, 0],
      zoom: 2,
    });

    map.addControl(new tt.NavigationControl());
  }, []);

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
};

export default TomTomMap;
