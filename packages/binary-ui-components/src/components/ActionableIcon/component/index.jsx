import { BINARY_COLOR_BLUE_40, BINARY_COLOR_BLUE_60, BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import React from 'react';
import IconStyled from './IconStyled';
import { getActionColorExt } from '../../../utils/styles-api';

const propTypes = {
  color: React.PropTypes.string,
  isActive: React.PropTypes.bool,
  isDisabled: React.PropTypes.bool.isRequired,
  isHover: React.PropTypes.bool,
  size: React.PropTypes.number,
  onClick: React.PropTypes.func,
  renderIcon: React.PropTypes.func.isRequired,
};

const defaultProps = {
  color: undefined,
  isActive: false,
  isHover: false,
  size: undefined,
  onClick: undefined,
};

const ActionableIcon = ({
  color,
  size,
  isActive,
  isDisabled,
  isHover,
  onClick,
  renderIcon,
  ...props,
}) => (
  <IconStyled
    color={getActionColorExt(
      color,
      BINARY_COLOR_BLUE_60,
      BINARY_COLOR_BLUE_40,
      BINARY_COLOR_GRAY_40,
      isActive,
      isHover,
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
