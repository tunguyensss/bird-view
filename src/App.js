import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import fetchData from './api/fetchData';
import './App.css';
import Hotspot from './components/Hotspot/index.jsx';
import Box from './features/box/Box.jsx';
import Camera from './ultis/Camera/Camera';

function App() {
  const [currentPlace, setCurrentPlace] = useState('church');
  const [placeInfo, setPlaceInfo] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hotspot, setHotspot] = useState();

  useEffect(() => {
    const baseApi = 'https://my-json-server.typicode.com/tunguyensss/skynav/';
    const endpoint = baseApi + currentPlace;

    const data = fetchData(endpoint);

    data.then((res) => {
      setPlaceInfo(res.data);
      setIsLoaded(true);
      setHotspot(res.hotspots);

      console.log(placeInfo);
    });
  }, [currentPlace]);

  if (isLoaded) {
    return (
      <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
        <ambientLight />
        <Suspense fallback={null}>
          <Camera />
          <Box textures={placeInfo.textures} />
          <Hotspot />
        </Suspense>
      </Canvas>
    );
  }

  return <div>Loading ... </div>;
}

export default App;
