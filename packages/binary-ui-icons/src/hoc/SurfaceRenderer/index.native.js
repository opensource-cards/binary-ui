import React from 'react';
import { Group, Shape, Surface } from 'react-native/Libraries/ART/ReactNativeART';
import createSurfaceRendererNativeAndWeb from './index.native-and-web';

const SurfaceRendererNativeAndWeb = createSurfaceRendererNativeAndWeb(Group, Shape, Surface);

const propTypes = {
  color: React.PropTypes.string,
  size: React.PropTypes.number,
  IconContentComponent: React.PropTypes.func.isRequired,
};

const defaultProps = {};

const SurfaceRendererNative = ({ color, size, IconContentComponent }) => (
  <SurfaceRendererNativeAndWeb
    color={color}
    size={size}
    IconContentComponent={IconContentComponent}
  />
);

SurfaceRendererNative.propTypes = propTypes;
SurfaceRendererNative.defaultProps = defaultProps;

export default SurfaceRendererNative;
