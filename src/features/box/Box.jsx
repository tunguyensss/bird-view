import React, { useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { Html } from '@react-three/drei';

import Images from '../../mapMaterial';

function Box(props) {
  const mesh = useRef();

  useFrame(() => {
    // mesh.current.rotation.y += 0.001;
  });

  // Texture
  const nx = useLoader(TextureLoader, Images.NX);
  const px = useLoader(TextureLoader, Images.PX);
  const ny = useLoader(TextureLoader, Images.NY);
  const py = useLoader(TextureLoader, Images.PY);
  const nz = useLoader(TextureLoader, Images.NZ);
  const pz = useLoader(TextureLoader, Images.PZ);

  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry args={[100, 100, 100]} />
      <meshStandardMaterial map={px} attachArray="material" side={THREE.BackSide} />
      <meshStandardMaterial map={nx} attachArray="material" side={THREE.BackSide} />

      <meshStandardMaterial map={py} attachArray="material" side={THREE.BackSide} />
      <meshStandardMaterial map={ny} attachArray="material" side={THREE.BackSide} />

      <meshStandardMaterial map={pz} attachArray="material" side={THREE.BackSide} />
      <meshStandardMaterial map={nz} attachArray="material" side={THREE.BackSide} />

      <Html scaleFactor={8}>
        <div className="content">Test</div>
      </Html>
    </mesh>
  );
}

export default Box;
