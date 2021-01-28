import { Html } from '@react-three/drei';
import PropTypes from 'prop-types';
import React from 'react';
import getDistantBetweenTwoSpot from '../../helpers/getDistantBetweenTwoSpot';
import './style.scss';
import bird from '../../assets/icons/bird.png';
import ground from '../../assets/icons/ground.png';

function Hotspot(props) {
  const { handleClick } = props;

  const distant = getDistantBetweenTwoSpot(
    props.currentCoord.x,
    props.currentCoord.y,
    props.coords.x,
    props.coords.y
  );

  function handleClickChangeView() {
    if (handleClick !== null) {
      handleClick(props.id);
    }
  }

  return (
    <Html center position={props.position} zIndexRange={[9]}>
      <div
        className="w-10 h-10 rounded-full bg-white border relative"
        id="halo"
        onClick={handleClickChangeView}>
        <img src={props.type === 'ground' ? ground : bird} alt="" className="w-full p-2" />
        <img src={props.thumb} alt="" className="w-full hidden rounded-full" />

        <div className="absolute w-64 h-full flex flex-col mt-4 z-10" id="inforBanner">
          <div className="w-full h-auto mb-1 px-2 bg-white text-xl uppercase">{props.id}</div>
          <div className="w-full">
            <span className="w-32 h-auto bg-green-100 font-bold px-2 font-bold text-white bg-gray-700">
              {distant} Mi
            </span>
          </div>
        </div>
      </div>
    </Html>
  );
}

Hotspot.propsType = {
  handleClick: PropTypes.func.isRequired,
};

Hotspot.defaultProps = {
  handleClick: null,
};

export default Hotspot;
