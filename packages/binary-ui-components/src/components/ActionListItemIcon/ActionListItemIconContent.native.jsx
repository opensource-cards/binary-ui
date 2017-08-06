import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import ActionableIcon from '../ActionableIcon';

const propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {};

const ActionListItemIconContent = ({ isDisabled, renderIcon }) => (
  <ActionableIcon
    color={BINARY_COLOR_GRAY_40}
    isDisabled={isDisabled}
    size={18}
    renderIcon={renderIcon}
  />
);

ActionListItemIconContent.propTypes = propTypes;
ActionListItemIconContent.defaultProps = defaultProps;

export default ActionListItemIconContent;
