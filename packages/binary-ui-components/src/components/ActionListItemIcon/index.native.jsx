import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import ActionListItemIconContent from './ActionListItemIconContent';

const propTypes = {
  isDisabled: PropTypes.bool,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  isDisabled: false,
};

const ActionListItemIcon = ({ isDisabled, renderIcon, ...props }) => (
  !isDisabled ? (
    <TouchableOpacity>
      <ActionListItemIconContent isDisabled={isDisabled} renderIcon={renderIcon} {...props} />
    </TouchableOpacity>
  ) : (
    <ActionListItemIconContent isDisabled={isDisabled} renderIcon={renderIcon} {...props} />
  )
);

ActionListItemIcon.propTypes = propTypes;
ActionListItemIcon.defaultProps = defaultProps;

export default ActionListItemIcon;
