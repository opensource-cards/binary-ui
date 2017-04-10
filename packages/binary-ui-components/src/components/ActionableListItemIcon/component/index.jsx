import React from 'react';
import IconStyledWrapper from '../components-styled/IconStyledWrapper';

const propTypes = {
  isActive: React.PropTypes.bool.isRequired,
  isDisabled: React.PropTypes.bool.isRequired,
  isHover: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func,
};

const defaultProps = {
  onClick: undefined,
};

const ActionableListItemIcon = ({ isDisabled, onClick, ...props }) => (
  <IconStyledWrapper
    color="#7F7F7F"
    isDisabled={isDisabled}
    size={18}
    onClick={!isDisabled && onClick}
    {...props}
  />
);

ActionableListItemIcon.propTypes = propTypes;
ActionableListItemIcon.defaultProps = defaultProps;

export default ActionableListItemIcon;
