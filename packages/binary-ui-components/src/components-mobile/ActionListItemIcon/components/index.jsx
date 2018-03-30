import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import ActionIcon from '../../ActionIcon';

const propTypes = {
  isDisabled: PropTypes.bool,
  theme: PropTypes.object.isRequired,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  isDisabled: false,
};

const ActionListItemIcon = ({ isDisabled, theme, renderIcon, ...props }) => (
  <ActionIcon
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
