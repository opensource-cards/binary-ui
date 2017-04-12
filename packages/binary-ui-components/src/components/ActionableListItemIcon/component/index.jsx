import React from 'react';
import IconStyled from './IconStyled';

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
    color="#7F7F7F"
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
