import React from 'react';
import { View } from 'react-native';

const propTypes = {};

const defaultProps = {};

const IconMark = () => (
  <View
    style={{
      backgroundColor: 'red',
      borderColor: '#EDEBE6',
      borderRadius: 5,
      borderWidth: 1,
      height: 10,
      position: 'absolute',
      right: 0,
      top: 0,
      width: 10,
    }}
  />
);

IconMark.propTypes = propTypes;
IconMark.defaultProps = defaultProps;

export default IconMark;
