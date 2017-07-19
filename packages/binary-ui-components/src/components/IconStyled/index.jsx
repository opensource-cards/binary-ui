import { NO_SELECT_STYLE } from 'binary-ui-styles/web';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  color: undefined,
  size: undefined,
  style: undefined,
};

const IconStyled = ({ color, size, style, renderIcon }) => {
  const element = renderIcon();
  return (
    React.cloneElement(element, {
      ...element.props,
      color: color || element.props.color,
      size: size || element.props.size,
      style: Object.assign({}, NO_SELECT_STYLE, style),
    })
  );
};

IconStyled.defaultProps = defaultProps;
IconStyled.propTypes = propTypes;

export default IconStyled;
