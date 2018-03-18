import PropTypes from 'prop-types';
import React from 'react';
import { Slider, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  slider: {
    flex: 9,
  },
});

const propTypes = {
  position: PropTypes.number.isRequired,
  style: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  style: undefined,
};

const SliderBar = ({ position, style, onChange }) => (
  <Slider
    step={1}
    minimumValue={0}
    maximumValue={100}
    style={[styles.slider, style]}
    value={position}
    onValueChange={onChange}
  />
);

SliderBar.defaultProps = defaultProps;
SliderBar.propTypes = propTypes;

export default SliderBar;
