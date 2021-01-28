import React, { useRef } from 'react';
import { useFrame, useLoader, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';

function Box(props) {
  const { textures } = props;
  // const isRotate = useSelector(selectCount);
  const mesh = useRef();
  const { gl } = useThree();
  gl.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  const maxAnisotropy = gl.capabilities.getMaxAnisotropy();

  useFrame(() => {
    if (props.rotate) {
      // mesh.current.rotation.y += 0.005;
    }
  });

  // Texture
  const nx = useLoader(TextureLoader, textures.nx);
  nx.anisotropy = maxAnisotropy;
  const px = useLoader(TextureLoader, textures.px);
  px.anisotropy = maxAnisotropy;

  const ny = useLoader(TextureLoader, textures.ny);
  ny.anisotropy = maxAnisotropy;

  const py = useLoader(TextureLoader, textures.py);
  py.anisotropy = maxAnisotropy;

  const nz = useLoader(TextureLoader, textures.nz);
  nz.anisotropy = maxAnisotropy;

  const pz = useLoader(TextureLoader, textures.pz);
  pz.anisotropy = maxAnisotropy;

  return (
    <mesh ref={mesh}>
      <boxBufferGeometry args={[100, 100, 100]} />
      <meshStandardMaterial map={px} attachArray="material" side={THREE.BackSide} />
      <meshStandardMaterial map={nx} attachArray="material" side={THREE.BackSide} />

      <meshStandardMaterial map={py} attachArray="material" side={THREE.BackSide} />
      <meshStandardMaterial map={ny} attachArray="material" side={THREE.BackSide} />

      <meshStandardMaterial map={pz} attachArray="material" side={THREE.BackSide} />
      <meshStandardMaterial map={nz} attachArray="material" side={THREE.BackSide} />
    </mesh>
  );
}

export default Box;
