import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import React, { useRef } from 'react';
import { useFrame, useLoader, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import Images from '../../mapMaterial';

extend({ OrbitControls });

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
      <boxBufferGeometry args={[5, 5, 5]} />
      <meshStandardMaterial map={px} attachArray="material" side={THREE.BackSide} />
      <meshStandardMaterial map={nx} attachArray="material" side={THREE.BackSide} />

      <meshStandardMaterial map={py} attachArray="material" side={THREE.BackSide} />
      <meshStandardMaterial map={ny} attachArray="material" side={THREE.BackSide} />

      <meshStandardMaterial map={pz} attachArray="material" side={THREE.BackSide} />
      <meshStandardMaterial map={nz} attachArray="material" side={THREE.BackSide} />
    </mesh>
  );
}

const cameraControl = () => {
  // ref to ThreeJs
  const {
    camera,
    gl: { domElement },
  } = useThree();

  // ref to the control
  // update them every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

export default Box;
