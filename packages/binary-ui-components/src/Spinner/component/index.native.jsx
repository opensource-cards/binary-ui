import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, ViewPropTypes } from 'react-native';

const propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.number,
  size: PropTypes.number,
  style: ViewPropTypes.style,
};

const defaultProps = {
  color: 'hsl(0, 0%, 0%)',
  opacity: 1,
  size: 20,
};

const Spinner = ({ color, opacity, size, style, ...props }) => (
  <ActivityIndicator
    {...props}
    color={color}
    size={size < 36 ? 'small' : 'large'}
    style={[style, { opacity }]}
  />
);

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
