import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import ActionableIcon from '../ActionableIcon';

const ICON_STYLE = { paddingRight: 10 };

const propTypes = {
  isDisabled: PropTypes.bool,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  isDisabled: false,
};

const ActionListItemIcon = ({ isDisabled, renderIcon, ...props }) => (
  <TouchableOpacity>
    <View {...props} style={ICON_STYLE} >
      <ActionableIcon
        color={BINARY_COLOR_GRAY_40}
        isDisabled={isDisabled}
        size={18}
        renderIcon={renderIcon}
      />
    </View>
  </TouchableOpacity>
);

ActionListItemIcon.propTypes = propTypes;
ActionListItemIcon.defaultProps = defaultProps;

export default ActionListItemIcon;
