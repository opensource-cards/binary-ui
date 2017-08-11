import PropTypes from 'prop-types';
import React from 'react';
import ActionableIcon from '../../../ActionableIcon';

const propTypes = {
  color: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool.isRequired,
  size: PropTypes.number,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  color: undefined,
  isActive: false,
  size: undefined,
};

const ActionIconContent = ({
  color,
  isActive,
  isDisabled,
  size,
  renderIcon,
  ...props,
}) => (
  <div {...props} >
    <ActionableIcon
      color={color}
      isActive={isActive}
      isDisabled={isDisabled}
      size={size}
      renderIcon={renderIcon}
    />
  </div>
);

ActionIconContent.propTypes = propTypes;
ActionIconContent.defaultProps = defaultProps;

export default ActionIconContent;
