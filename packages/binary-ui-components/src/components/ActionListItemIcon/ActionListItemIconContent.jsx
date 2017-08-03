import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import ActionableIcon from '../ActionableIcon';

const ICON_STYLE = { paddingRight: 10 };

const propTypes = {
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool.isRequired,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  isActive: false,
};

const ActionListItemIconContent = ({ isActive, isDisabled, renderIcon, ...props }) => (
  <div {...props} >
    <ActionableIcon
      color={BINARY_COLOR_GRAY_40}
      isActive={isActive}
      isDisabled={isDisabled}
      size={18}
      style={ICON_STYLE}
      renderIcon={renderIcon}
    />
  </div>
);

ActionListItemIconContent.propTypes = propTypes;
ActionListItemIconContent.defaultProps = defaultProps;

export default ActionListItemIconContent;
