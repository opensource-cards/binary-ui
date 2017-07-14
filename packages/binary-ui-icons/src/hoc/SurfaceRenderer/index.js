import PropTypes from 'prop-types';
import React from 'react';
import createSurfaceRendererNativeAndWeb from './index.native-and-web';

/* eslint-disable global-require */
// NOTE: This is not to break a server rendering.
// NOTE: A `window` variable should not be defined on a server!
const ReactArt = (typeof window === 'undefined')
  ? {}
  : (() => require('react-art'))();
/* eslint-enable */

const { Group, Shape, Surface } = ReactArt;
const SurfaceRendererNativeAndWeb = createSurfaceRendererNativeAndWeb(Group, Shape, Surface);

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number.isRequired,
  IconContentComponent: PropTypes.func.isRequired,
};

const defaultProps = {
  color: undefined,
};

// NOTE: Content is rendered on a second frame, to have the same checksum with a server rendering.
export default class SurfaceRendererWeb extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAllowRendering: false,
    };
  }

  componentDidMount() {
    if (this.state.isAllowRendering === false) {
      /* eslint-disable react/no-did-mount-set-state */
      this.setState(() => ({
        isAllowRendering: true,
      }));
      /* eslint-enable */
    }
  }

  render() {
    if (this.state.isAllowRendering === false) {
      return null;
    }
    const { color, size, IconContentComponent, ...props } = this.props;
    return (
      <SurfaceRendererNativeAndWeb
        color={color}
        size={size}
        IconContentComponent={IconContentComponent}
        {...props}
      />
    );
  }
}

SurfaceRendererWeb.propTypes = propTypes;
SurfaceRendererWeb.defaultProps = defaultProps;
