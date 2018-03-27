import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import ActionIcon from '../../ActionIcon';

const propTypes = {
  isDisabled: PropTypes.bool,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  isDisabled: false,
};

const ActionListItemIcon = ({ isDisabled, renderIcon, ...props }) => (
  <ActionIcon
    {...props}
    color={BINARY_COLOR_GRAY_40}
    isDisabled={isDisabled}
    size={18}
    renderIcon={renderIcon}
  />
);

ActionListItemIcon.propTypes = propTypes;
ActionListItemIcon.defaultProps = defaultProps;

export default ActionListItemIcon;
