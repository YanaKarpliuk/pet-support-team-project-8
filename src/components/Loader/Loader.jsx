import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styles from './Loader.styled';
const { LoaderWrap } = styles;

const Loader = ({ viewportWidth }) => {
  const spinnerWidth = (() => {
    if (!viewportWidth) return '80';
    if (Number(viewportWidth) <= 500) return '70';
    if (Number(viewportWidth) <= 767) return '100';
    if (Number(viewportWidth) >= 768) return '120';
  })();
  return (
    <LoaderWrap>
      <RotatingLines
        strokeColor="#fc731e"
        strokeWidth="3.7"
        animationDuration="0.8"
        visible={true}
        width={spinnerWidth}
        ariaLabel="Loading"
      />
    </LoaderWrap>
  );
};

export default Loader;
