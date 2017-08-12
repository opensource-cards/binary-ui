import PropTypes from 'prop-types';
import React from 'react';
import ActionableIcon from '../../../../components/ActionableIcon';

const propTypes = {
  color: PropTypes.string,
  isDisabled: PropTypes.bool.isRequired,
  size: PropTypes.number,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  color: undefined,
  size: undefined,
};

const ActionIconContent = ({
  color,
  isDisabled,
  size,
  renderIcon,
}) => (
  <ActionableIcon
    color={color}
    isDisabled={isDisabled}
    size={size}
    renderIcon={renderIcon}
  />
);

ActionIconContent.propTypes = propTypes;
ActionIconContent.defaultProps = defaultProps;

export default ActionIconContent;
