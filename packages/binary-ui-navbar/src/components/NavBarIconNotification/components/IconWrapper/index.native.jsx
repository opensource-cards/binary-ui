import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const IconWrapper = ({ children }) => <View>{children}</View>;

IconWrapper.propTypes = propTypes;
IconWrapper.defaultProps = defaultProps;

export default IconWrapper;
