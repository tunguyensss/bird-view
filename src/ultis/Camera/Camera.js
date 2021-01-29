import { useEffect, useRef } from 'react';
import { useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Camera() {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 1;
    controls.maxDistance = 20;
    controls.autoRotate = true;

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
}
