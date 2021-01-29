import React from 'react';
import './style.scss';

function LoaderScreen(props) {
  return (
    <>
      <div id="loader-wrapper">
        <div id="loader">
          <div id="loader--outer"></div>
          <div id="loader--middle"></div>
          <div id="loader--inner"></div>
        </div>
      </div>
    </>
  );
}

export default LoaderScreen;
