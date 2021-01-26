import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import './App.css';
import Box from './features/box/Box.jsx';
import Camera from './ultis/Camera/Camera';

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
      <ambientLight />
      <Suspense fallback={null}>
        <Camera />

        <Box />
      </Suspense>
    </Canvas>
  );
}

export default App;
