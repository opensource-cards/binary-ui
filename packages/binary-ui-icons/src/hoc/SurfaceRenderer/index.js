import React from 'react';
import createSurfaceRendererNativeAndWeb from './index.native-and-web';

/* eslint-disable global-require */
// NOTE: This is not to break a server rendering.
// NOTE: A `window` variable should not be defined on a server!
// TODO: Come up with a better solution.
const ReactArt = (typeof window === 'undefined')
  ? {}
  : (() => require('react-art'))();
/* eslint-enable */

const { Group, Shape, Surface } = ReactArt;
const SurfaceRendererNativeAndWeb = createSurfaceRendererNativeAndWeb(Group, Shape, Surface);

const propTypes = {
  color: React.PropTypes.string,
  size: React.PropTypes.number.isRequired,
  IconContentComponent: React.PropTypes.func.isRequired,
};

const defaultProps = {
  color: undefined,
};

// TODO: Content is rendered on a second frame, to have the same checksum with a server rendering.
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
      this.setState({
        isAllowRendering: true,
      });
      /* eslint-enable */
    }
  }

  render() {
    if (this.state.isAllowRendering === false) {
      return null;
    }
    const { color, size, IconContentComponent } = this.props;
    return (
      <SurfaceRendererNativeAndWeb
        color={color}
        size={size}
        IconContentComponent={IconContentComponent}
      />
    );
  }
}

SurfaceRendererWeb.propTypes = propTypes;
SurfaceRendererWeb.defaultProps = defaultProps;
