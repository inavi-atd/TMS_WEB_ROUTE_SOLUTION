// common
import React, { useEffect, useRef } from "react";

// style
import "styles/layouts/_map.scss";

export const Map = () => {
  const inaviContainer = useRef(null);
  const inaviMap = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dev-maps.inavi.com/maps/v3.0/appkeys/9e7e1541c31578bab9b4e48fa417ab86ed92bdc1/maps?callback=initMap";
    script.async = true;
    document.body.appendChild(script);

    window.initMap = () => {
      if (inaviMap.current) return;
      inaviMap.current = new window.inavi.maps.Map({
        container: inaviContainer.current,
        center: [127.11, 37.4],
        zoom: 15,
      });
    };

    return () => {
      window.initMap = null;
      document.body.removeChild(script);
    };
  }, []);
  return <div ref={inaviContainer} id="map" />;
};
