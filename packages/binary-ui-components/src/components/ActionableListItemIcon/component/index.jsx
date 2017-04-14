import React from 'react';
import IconStyled from './IconStyled';
import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';

const propTypes = {
  isActive: React.PropTypes.bool.isRequired,
  isDisabled: React.PropTypes.bool.isRequired,
  isHover: React.PropTypes.bool.isRequired,
  renderIcon: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func,
};

const defaultProps = {
  onClick: undefined,
};

const ActionableListItemIcon = ({ isDisabled, renderIcon, onClick, ...props }) => (
  <IconStyled
    color={BINARY_COLOR_GRAY_40}
    isDisabled={isDisabled}
    size={18}
    renderIcon={renderIcon}
    onClick={!isDisabled && onClick}
    {...props}
  />
);

ActionableListItemIcon.propTypes = propTypes;
ActionableListItemIcon.defaultProps = defaultProps;

export default ActionableListItemIcon;
