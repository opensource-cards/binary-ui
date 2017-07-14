import PropTypes from 'prop-types';
import React from 'react';
import { Group, Shape, Surface } from 'react-native/Libraries/ART/ReactNativeART';
import createSurfaceRendererNativeAndWeb from './index.native-and-web';

const SurfaceRendererNativeAndWeb = createSurfaceRendererNativeAndWeb(Group, Shape, Surface);

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number.isRequired,
  IconContentComponent: PropTypes.func.isRequired,
};

const defaultProps = {
  color: undefined,
};

const SurfaceRendererNative = ({ color, size, IconContentComponent, ...props }) => (
  <SurfaceRendererNativeAndWeb
    color={color}
    size={size}
    IconContentComponent={IconContentComponent}
    {...props}
  />
);

SurfaceRendererNative.propTypes = propTypes;
SurfaceRendererNative.defaultProps = defaultProps;

export default SurfaceRendererNative;
