import React from 'react';
import IconStyledWrapper from '../components-styled/IconStyledWrapper';

const propTypes = {
  isActive: React.PropTypes.bool,
  isHover: React.PropTypes.bool,
  isDisabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

const defaultProps = {};

const ActionableListItemIcon = ({ isDisabled, onClick, ...props }) => (
  <IconStyledWrapper
    color="#7F7F7F"
    size={18}
    onClick={!isDisabled && onClick}
    {...props}
  />
);

ActionableListItemIcon.propTypes = propTypes;
ActionableListItemIcon.defaultProps = defaultProps;

export default ActionableListItemIcon;
