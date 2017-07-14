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
      this.cache = {};
      this.setColoredShape(props.color);
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.color !== nextProps.color) {
        this.setColoredShape(nextProps.color);
      }
    }

    setColoredShape(color) {
      this.cache.ColoredShape = (shapeProps) => (
        <Shape fill={color} {...shapeProps} />
      );
    }

    render() {
      const { color, size, IconContentComponent, ...props } = this.props;
      const scale = size / DEFAULT_SIZE;
      return (
        <Surface height={size} width={size} {...props} >
          <Group fill={color} scale={scale} >
            <IconContentComponent Group={Group} Shape={this.cache.ColoredShape} />
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
