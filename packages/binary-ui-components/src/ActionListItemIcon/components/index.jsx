import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import ActionIconCenter from '../components-styled/ActionIconCenter';

const propTypes = {
  isDisabled: PropTypes.bool,
  theme: PropTypes.object.isRequired,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  isDisabled: false,
};

const ActionListItemIcon = ({ isDisabled, theme, renderIcon, ...props }) => (
  <ActionIconCenter
    {...props}
    color={theme.colorGray40}
    isDisabled={isDisabled}
    size={18}
    renderIcon={renderIcon}
  />
);

ActionListItemIcon.propTypes = propTypes;
ActionListItemIcon.defaultProps = defaultProps;

export default withTheme(ActionListItemIcon);
