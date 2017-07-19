/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React from 'react';

const DEFAULT_SIZE = 512;

export default (Group, Shape, Surface) => {
  const propTypes = {
    color: PropTypes.string,
    size: PropTypes.number.isRequired,
    IconContentComponent: PropTypes.func.isRequired,
  };

  const defaultProps = {
    color: '#000000',
  };

  /**
   * Assume IconContentComponent never changes.
   */
  class SurfaceRendererNativeAndWeb extends React.PureComponent {

    constructor(props) {
      super(props);
      this.renderShape = this.renderShape.bind(this);
    }

    renderShape(shapeProps) {
      const { color } = this.props;
      return (
        <Shape fill={color} {...shapeProps} />
      );
    }

    render() {
      const { color, size, IconContentComponent, ...props } = this.props;
      return (
        <Surface height={size} width={size} {...props} >
          <Group fill={color} scale={size / DEFAULT_SIZE} >
            <IconContentComponent Group={Group} Shape={this.renderShape} />
          </Group>
        </Surface>
      );
    }
  }

  SurfaceRendererNativeAndWeb.propTypes = propTypes;
  SurfaceRendererNativeAndWeb.defaultProps = defaultProps;

  return SurfaceRendererNativeAndWeb;
};

/* eslint-enable react/prop-types */
