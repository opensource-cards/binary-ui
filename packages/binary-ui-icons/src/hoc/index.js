import PropTypes from 'prop-types';
import React from 'react';
import Svg, { G, Path } from 'svgs';

const DEFAULT_SIZE = 512;

export default (IconContentComponent) => {
  const propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
  };

  const defaultProps = {
    color: '#000000',
    size: 20,
  };

  class Index extends React.PureComponent {
    constructor(props) {
      super(props);
      this.renderShape = this.renderShape.bind(this);
    }

    renderShape(shapeProps) {
      const { color } = this.props;
      return (
        <Path fill={color} {...shapeProps} />
      );
    }

    render() {
      const { color, size, ...props } = this.props;
      return (
        <Svg {...props} height={size} width={size} >
          <G fill={color} scale={size / DEFAULT_SIZE} >
            <IconContentComponent Group={G} Shape={this.renderShape} />
          </G>
        </Svg>
      );
    }
  }

  Index.propTypes = propTypes;
  Index.defaultProps = defaultProps;

  return Index;
};
