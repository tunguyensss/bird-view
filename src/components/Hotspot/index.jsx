import React from 'react';
import { Html } from '@react-three/drei';
import './style.scss';

function Hotspot(props) {
  return (
    <Html center position={[100, 0, 0]} zIndexRange={[9]}>
      <div className="w-10 h-10 rounded-full bg-white border relative" id="halo">
        <img
          src="https://icons-for-free.com/iconfiles/png/512/walking+icon-1320195198125092892.png"
          alt=""
          className="w-full p-2"
        />
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/91mQAuhZYUL.png"
          alt=""
          className="w-full hidden rounded-full"
        />

        <div className="absolute w-64 h-full flex flex-col mt-4 z-10" id="inforBanner">
          <div className="w-full h-auto mb-1 px-2 bg-white text-xl uppercase">
            Lorem asd dasdas asdkashdask asdhaskdhsa
          </div>
          <div className="w-full">
            <span className="w-32 h-auto bg-green-100 font-bold px-2 font-bold text-white bg-gray-700">
              12 Mi
            </span>
          </div>
        </div>
      </div>
    </Html>
  );
}

export default Hotspot;
