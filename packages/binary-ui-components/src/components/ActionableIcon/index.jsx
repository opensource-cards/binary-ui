import PropTypes from 'prop-types';
import React from 'react';
import IconStyled from '../IconStyled';
import { getActionOpacityExt } from '../../utils/styles-api';

const propTypes = {
  color: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool.isRequired,
  size: PropTypes.number,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  color: '#000000',
  isActive: false,
  size: undefined,
};

const ActionableIcon = ({ color, size, isActive, isDisabled, renderIcon, ...props }) => (
  <IconStyled
    color={color}
    size={size}
    styleOpacity={getActionOpacityExt(isActive, isDisabled)}
    renderIcon={renderIcon}
    {...props}
  />
);

ActionableIcon.propTypes = propTypes;
ActionableIcon.defaultProps = defaultProps;

export default ActionableIcon;
