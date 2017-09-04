import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  styleOpacity: PropTypes.number.isRequired,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  color: undefined,
  size: undefined,
};

const IconStyled = ({ color, size, styleOpacity, renderIcon }) => {
  const element = renderIcon();
  return (
    React.cloneElement(element, {
      color: color || element.props.color,
      size: size || element.props.size,
      style: {
        opacity: styleOpacity,
      },
    })
  );
};

IconStyled.defaultProps = defaultProps;
IconStyled.propTypes = propTypes;

export default IconStyled;
