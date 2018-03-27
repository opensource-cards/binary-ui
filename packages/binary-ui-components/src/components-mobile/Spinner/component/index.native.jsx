import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator } from 'react-native';

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  color: '#000',
  size: 20,
};

const Spinner = ({ color, size, ...props }) => (
  <ActivityIndicator
    {...props}
    color={color}
    size={size < 36 ? 'small' : 'large'}
  />
);

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
