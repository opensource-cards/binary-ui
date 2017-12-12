import PropTypes from 'prop-types';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import TooltipArrow from '../components-styled/TooltipArrow.native';
import TooltipText from '../components-styled/TooltipText.native';
import TooltipTextWrapper from '../components-styled/TooltipTextWrapper.native';
import TooltipWrapper from './TooltipWrapper.native';

const propTypes = {
  isVisible: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  placement: PropTypes.oneOf([
    'bottom-right',
    'bottom-left',
    'top-right',
    'top-left',
  ]),
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
    <TooltipWrapper isVisible={isVisible} placement={placement} {...props} >
      {(placement === 'bottom-left' || placement === 'bottom-right') ? (
        <TooltipArrow placement={placement} />
      ) : null}
      <TooltipTextWrapper>
        <TooltipText>
          {label}
        </TooltipText>
      </TooltipTextWrapper>
      {(placement === 'top-left' || placement === 'top-right') ? (
        <TooltipArrow placement={placement} />
      ) : null}
    </TooltipWrapper>
  </TouchableWithoutFeedback>
);

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
