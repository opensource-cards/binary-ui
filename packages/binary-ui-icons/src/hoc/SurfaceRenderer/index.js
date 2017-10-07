import PropTypes from 'prop-types';
import React from 'react';
import ART from 'react-art-svg-renderer';
import createSurfaceRenderer from './index.native-and-web';

const SurfaceRenderer = createSurfaceRenderer(ART.Group, ART.Shape, ART.Surface, ART.Transform);

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number.isRequired,
  IconContentComponent: PropTypes.func.isRequired,
};

const defaultProps = {
  color: undefined,
};

const SurfaceRendererWeb = ({ color, size, IconContentComponent, ...props }) => (
  <SurfaceRenderer
    color={color}
    size={size}
    IconContentComponent={IconContentComponent}
    {...props}
  />
);

SurfaceRendererWeb.propTypes = propTypes;
SurfaceRendererWeb.defaultProps = defaultProps;

export default SurfaceRendererWeb;
