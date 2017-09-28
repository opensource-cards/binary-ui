import PropTypes from 'prop-types';
import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { BINARY_COLOR_GRAY_30 } from 'binary-ui-styles';
import TooltipArrow from '../components-styled/TooltipArrow.native';
import TooltipStyled from '../components-styled/TooltipStyled';
import TooltipText from '../components-styled/TooltipText.native';

const propTypes = {
  isVisible: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['bottom-right', 'bottom-left']),
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
};

const defaultProps = {
  placement: 'bottom-right',
};

const Tooltip = ({
  isVisible,
  label,
  placement,
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  ...props,
}) => (
  <TouchableWithoutFeedback
    onLongPress={onLongPress}
    onPress={onPress}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
  >
    <TooltipStyled isVisible={isVisible} placement={placement} {...props} >
      <TooltipArrow placement={placement} />
      <View
        style={{
          backgroundColor: BINARY_COLOR_GRAY_30,
          borderRadius: 5,
          elevation: 1,
          paddingHorizontal: 10,
          paddingVertical: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
        }}
      >
        <TooltipText>
          {label}
        </TooltipText>
      </View>
    </TooltipStyled>
  </TouchableWithoutFeedback>
);

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
