import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import ActionListItemIconContent from './ActionListItemIconContent';

const propTypes = {
  isDisabled: PropTypes.bool,
  renderIcon: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  onClick: undefined,
};

const ActionListItemIcon = ({ isDisabled, renderIcon, onClick, ...props }) => (
  !isDisabled ? (
    <TouchableOpacity onPress={onClick} {...props} >
      <ActionListItemIconContent isDisabled={isDisabled} renderIcon={renderIcon} />
    </TouchableOpacity>
  ) : (
    <View {...props} >
      <ActionListItemIconContent isDisabled={isDisabled} renderIcon={renderIcon} />
    </View>
  )
);

ActionListItemIcon.propTypes = propTypes;
ActionListItemIcon.defaultProps = defaultProps;

export default ActionListItemIcon;
