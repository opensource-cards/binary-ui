import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import ActionableIcon from '../ActionableIcon';
import ActionWrapper from '../ActionWrapper';

const ICON_STYLE = { paddingRight: 10 };

const propTypes = {
  isDisabled: PropTypes.bool,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  isDisabled: false,
};

const ActionListItemIcon = ({ isDisabled, renderIcon, ...props }) => (
  <ActionWrapper isDisabled={isDisabled} {...props} >
    <ActionableIcon
      color={BINARY_COLOR_GRAY_40}
      isDisabled={isDisabled}
      size={18}
      style={ICON_STYLE}
      renderIcon={renderIcon}
    />
  </ActionWrapper>
);

ActionListItemIcon.propTypes = propTypes;
ActionListItemIcon.defaultProps = defaultProps;

export default ActionListItemIcon;
