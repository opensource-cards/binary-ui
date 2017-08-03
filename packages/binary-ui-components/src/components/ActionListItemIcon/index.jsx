import PropTypes from 'prop-types';
import React from 'react';
import ActionListItemIconContent from './ActionListItemIconContent';
import ActionWrapper from '../ActionWrapper';

const propTypes = {
  isDisabled: PropTypes.bool,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  isDisabled: false,
};

const ActionListItemIcon = ({ isDisabled, renderIcon, ...props }) => (
  <ActionWrapper isDisabled={isDisabled} {...props} >
    <ActionListItemIconContent isDisabled={isDisabled} renderIcon={renderIcon} />
  </ActionWrapper>
);

ActionListItemIcon.propTypes = propTypes;
ActionListItemIcon.defaultProps = defaultProps;

export default ActionListItemIcon;
