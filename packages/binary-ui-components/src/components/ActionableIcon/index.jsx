import { BINARY_COLOR_BLUE_60, BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import IconStyled from '../IconStyled';
import { getActionColorExt } from '../../utils/styles-api';

const propTypes = {
  color: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool.isRequired,
  size: PropTypes.number,
  onClick: PropTypes.func,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  color: undefined,
  isActive: false,
  size: undefined,
  onClick: undefined,
};

const ActionableIcon = ({
  color,
  size,
  isActive,
  isDisabled,
  onClick,
  renderIcon,
  ...props,
}) => (
  <IconStyled
    color={getActionColorExt(
      color,
      BINARY_COLOR_BLUE_60,
      BINARY_COLOR_GRAY_40,
      isActive,
      isDisabled
    )}
    size={size}
    onClick={!isDisabled && onClick}
    renderIcon={renderIcon}
    {...props}
  />
);

ActionableIcon.propTypes = propTypes;
ActionableIcon.defaultProps = defaultProps;

export default ActionableIcon;
