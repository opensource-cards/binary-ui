import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import ActionableIcon from '../ActionableIcon';

const ICON_STYLE = { paddingRight: 10 };

const propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {};

const ActionListItemIconContent = ({ isDisabled, renderIcon, ...props }) => (
  <View {...props} style={ICON_STYLE} >
    <ActionableIcon
      color={BINARY_COLOR_GRAY_40}
      isDisabled={isDisabled}
      size={18}
      renderIcon={renderIcon}
    />
  </View>
);

ActionListItemIconContent.propTypes = propTypes;
ActionListItemIconContent.defaultProps = defaultProps;

export default ActionListItemIconContent;
