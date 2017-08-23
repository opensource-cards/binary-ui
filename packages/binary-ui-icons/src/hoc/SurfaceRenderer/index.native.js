import PropTypes from 'prop-types';
import React from 'react';
import { Group, Shape, Surface, Transform } from 'react-native/Libraries/ART/ReactNativeART';
import createSurfaceRenderer from './index.native-and-web';

const SurfaceRenderer = createSurfaceRenderer(Group, Shape, Surface, Transform);

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number.isRequired,
  IconContentComponent: PropTypes.func.isRequired,
};

const defaultProps = {
  color: undefined,
};

const SurfaceRendererNative = ({ color, size, IconContentComponent, ...props }) => (
  <SurfaceRenderer
    color={color}
    size={size}
    IconContentComponent={IconContentComponent}
    {...props}
  />
);

SurfaceRendererNative.propTypes = propTypes;
SurfaceRendererNative.defaultProps = defaultProps;

export default SurfaceRendererNative;
