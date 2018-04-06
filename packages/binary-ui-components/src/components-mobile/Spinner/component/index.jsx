import PropTypes from 'prop-types';
import React from 'react';
import Svg, { G, Path } from 'svgs';
import SpinnerActive from '../components-styled';

const propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.number,
  size: PropTypes.number,
};

const defaultProps = {
  color: '#000000',
  opacity: 1,
  size: 20,
};

const Spinner = ({ color, opacity, size, ...props }) => (
  /* eslint-disable max-len */
  <Svg {...props} height={size} opacity={opacity} width={size}>
    <G scale={size / 512}>
      <Path
        d="M254,65.51c0.666,-0.007 1.333,-0.01 2,-0.01c105.14,0 190.5,85.36 190.5,190.5c0,105.14 -85.36,190.5 -190.5,190.5c-105.14,0 -190.5,-85.36 -190.5,-190.5c0,-104.138 84.741,-188.884 188.5,-190.49l0,25.002c-89.96,1.602 -163.5,75.148 -163.5,165.488c0,91.342 74.158,165.5 165.5,165.5c91.342,0 165.5,-74.158 165.5,-165.5c0,-91.342 -74.158,-165.5 -165.5,-165.5c-0.668,0 -1.334,0.004 -2,0.012l0,-25.002Z"
        fill={color}
        opacity={0.2}
      />
      <SpinnerActive>
        <Path
          d="M256,65.5c105.14,0 190.5,85.36 190.5,190.5l0,0c0,6.901 -5.603,12.504 -12.504,12.504c-6.901,0 -12.504,-5.603 -12.504,-12.504l0,0c0,-0.141 0.003,-0.282 0.007,-0.422c-0.227,-91.003 -74.062,-164.843 -165.064,-165.077c-0.144,0.005 -0.289,0.007 -0.435,0.007c-6.901,0 -12.504,-5.603 -12.504,-12.504l0,0c0,-6.901 5.603,-12.504 12.504,-12.504l0,0Z"
          fill={color}
        />
      </SpinnerActive>
    </G>
  </Svg>
  /* eslint-enable max-len */
);

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
