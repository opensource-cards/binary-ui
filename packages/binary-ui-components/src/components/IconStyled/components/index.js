import { NO_SELECT_STYLE } from 'binary-ui-styles/web';
import React from 'react';

const propTypes = {
  style: React.PropTypes.object,
  renderIcon: React.PropTypes.func.isRequired,
};

const defaultProps = {};

const IconStyled = ({ style, renderIcon, ...props }) => (
  React.cloneElement(renderIcon(), {
    style: Object.assign({}, NO_SELECT_STYLE, style),
    ...props,
  })
);

IconStyled.defaultProps = defaultProps;
IconStyled.propTypes = propTypes;

export default IconStyled;
