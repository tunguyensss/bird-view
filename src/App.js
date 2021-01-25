import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import './App.css';
import Box from './features/box/Box.jsx';

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 0], fov: 110 }}>
      <ambientLight />
      <Suspense fallback={null}>
        <Box position={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  );
}

export default App;
