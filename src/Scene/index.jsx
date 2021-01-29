import React from 'react';
import { useThree } from 'react-three-fiber';
import Box from '../features/box/Box';

function Scene() {
  const { camera, gl: domElement } = useThree();
  return (
    <>
      <Box />
      <orbitControls args={[camera, domElement]} />
    </>
  );
}

export default Scene;
