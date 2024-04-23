// common
import { useRef } from "react";

function useMapLoad() {
  const inaviContainer = useRef(null);
  const inaviMap = useRef(null);

  const initMap = () => {
    const script = document.createElement("script");
      script.src = 'https://dev-maps.inavi.com/maps/v3.0/appkeys/72395f588045e2a3ca97c61498dfb3f057de288a/maps?callback=initMap';
      script.async = true;
      document.body.appendChild(script);

      window.initMap = () => {
        if (inaviMap.current) return;
        inaviMap.current = new window.inavi.maps.Map({
          center: [127.110749, 37.402158],
          container: inaviContainer.current,
          zoom: 13,
        });
      };
  }

  // useEffect(() => {
  //   if (map !== null) {
  //     const script = document.createElement("script");
  //     script.src = 'https://dev-maps.inavi.com/maps/v3.0/appkeys/72395f588045e2a3ca97c61498dfb3f057de288a/maps?callback=initMap';
  //     script.async = true;
  //     document.body.appendChild(script);

  //     window.initMap = () => {
  //       if (inaviMap.current) return;
  //       inaviMap.current = new window.inavi.maps.Map({
  //         center: [127.110749, 37.402158],
  //         container: inaviContainer.current,
  //         zoom: 13,
  //       });
  //     };
  //   }
  // }, [map])

  return {
    initMap
  }
}

export default useMapLoad;