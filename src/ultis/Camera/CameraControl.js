import { useRef } from 'react';
import { useFrame, useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const CameraControl = () => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useFrame((state) => {
    controls.current.update();
  });

  return <orbitControls ref={controls} args={[camera, gl.domElement]} autoRotate={true} />;
};

export default CameraControl;
