import { NO_SELECT_STYLE } from 'binary-ui-styles/web';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  size: PropTypes.number,
  style: PropTypes.object,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {};

const IconStyled = ({ size, style, renderIcon, ...props }) => {
  const element = renderIcon();
  const elementSize = element.props.size;
  return (
    React.cloneElement(element, {
      ...element.props,
      ...props,
      size: size || elementSize,
      style: Object.assign({}, NO_SELECT_STYLE, style),
    })
  );
};

IconStyled.defaultProps = defaultProps;
IconStyled.propTypes = propTypes;

export default IconStyled;
