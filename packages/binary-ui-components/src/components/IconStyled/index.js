import { NO_SELECT_STYLE } from 'binary-ui-styles/web';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  style: PropTypes.object,
  renderIcon: PropTypes.func.isRequired,
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
