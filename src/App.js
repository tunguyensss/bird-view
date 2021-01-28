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

  function handleChangeView(id) {
    setCurrentPlace(id);
  }

  useEffect(() => {
    const baseApi = 'https://my-json-server.typicode.com/tunguyensss/skynav/';
    const endpoint = baseApi + currentPlace;

    const data = fetchData(endpoint);

    data.then((res) => {
      setPlaceInfo(res.data);
      setIsLoaded(true);
    });
  }, [currentPlace]);

  if (isLoaded) {
    const spots = placeInfo.hotspots.map((item) => (
      <Hotspot
        id={item.id}
        position={item['icon-position']}
        thumb={item.thumbnail}
        coords={item.coords}
        currentCoord={placeInfo.coords}
        handleClick={handleChangeView}
        key={item.id}
        type={item.type}
      />
    ));

    return (
      <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
        <ambientLight />
        <Suspense fallback={null}>
          <Camera />
          <Box textures={placeInfo.textures} />
          {spots}
        </Suspense>
      </Canvas>
    );
  }

  return <div>Loading ... </div>;
}

export default App;
