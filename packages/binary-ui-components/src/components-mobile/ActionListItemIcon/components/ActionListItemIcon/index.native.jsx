import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { OPACITY_ACTIVE, getOpacity } from '../../../../utils/styles-api';

const propTypes = {
  isDisabled: PropTypes.bool,
  renderIcon: PropTypes.func.isRequired,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  onLongPress: undefined,
  onPress: undefined,
  onPressIn: undefined,
  onPressOut: undefined,
};

const ActionListItemIcon = ({
  isDisabled,
  renderIcon,
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  ...props,
}) => (
  <TouchableOpacity
    activeOpacity={!isDisabled ? OPACITY_ACTIVE : 1}
    onLongPress={!isDisabled ? onLongPress : undefined}
    onPress={!isDisabled ? onPress : undefined}
    onPressIn={!isDisabled ? onPressIn : undefined}
    onPressOut={!isDisabled ? onPressOut : undefined}
    {...props}
  >
    {renderIcon({
      color: BINARY_COLOR_GRAY_40,
      opacity: getOpacity(isDisabled),
      size: 18,
    })}
  </TouchableOpacity>
);

ActionListItemIcon.propTypes = propTypes;
ActionListItemIcon.defaultProps = defaultProps;

export default ActionListItemIcon;
