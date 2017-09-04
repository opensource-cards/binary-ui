import { NO_SELECT_STYLE } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { OPACITY_TRANSITION } from '../../utils/styles-api';

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
        ...NO_SELECT_STYLE,
        opacity: styleOpacity,
        transition: OPACITY_TRANSITION,
        verticalAlign: 'middle',
      },
    })
  );
};

IconStyled.defaultProps = defaultProps;
IconStyled.propTypes = propTypes;

export default IconStyled;
