import React, { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Canvas } from 'react-three-fiber';
import fetchData from './api/fetchData';
import './App.css';
import Hotspot from './components/Hotspot/index.jsx';
import Box from './features/box/Box.jsx';
import { defaultRotateState } from './features/box/boxSlice';
import Camera from './ultis/Camera/Camera';
import Sidebar from './components/Sidebar/index.jsx';

function App() {
  const [currentPlace, setCurrentPlace] = useState('church');
  const [placeInfo, setPlaceInfo] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const isRotate = useSelector(defaultRotateState);

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
      <div className="relative">
        <div className="absolute top-0 left-0">
          <Sidebar />
        </div>
        <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
          <ambientLight />
          <Suspense fallback={null}>
            <Camera />
            <Box textures={placeInfo.textures} rotate={isRotate} />
            {spots}
          </Suspense>
        </Canvas>
      </div>
    );
  }

  return <div>Loading ... </div>;
}

export default App;
