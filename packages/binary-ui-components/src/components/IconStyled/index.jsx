import { NO_SELECT_STYLE } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { OPACITY_TRANSITION } from '../../utils/styles-api';

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  styleOpacity: PropTypes.number.isRequired,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  color: undefined,
  size: undefined,
  style: {},
};

const IconStyled = ({ color, size, style, styleOpacity, renderIcon }) => {
  const element = renderIcon();
  return (
    React.cloneElement(element, {
      color: color || element.props.color,
      size: size || element.props.size,
      style: {
        ...NO_SELECT_STYLE,
        opacity: styleOpacity,
        transition: OPACITY_TRANSITION,
        verticalAlign: 'middle',
        ...style,
      },
    })
  );
};

IconStyled.defaultProps = defaultProps;
IconStyled.propTypes = propTypes;

export default IconStyled;
