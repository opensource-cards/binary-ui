import PropTypes from 'prop-types';
import React from 'react';
import { Slider } from 'react-native';

const propTypes = {
  position: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
};

const SliderBar = ({ position, onChange, ...props }) => (
  <Slider
    {...props}
    minimumValue={0}
    maximumValue={1}
    step={0.01}
    value={position}
    onValueChange={onChange}
  />
);

SliderBar.defaultProps = defaultProps;
SliderBar.propTypes = propTypes;

export default SliderBar;
