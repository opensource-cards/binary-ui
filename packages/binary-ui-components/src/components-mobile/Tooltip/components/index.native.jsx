import PropTypes from 'prop-types';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import TooltipArrow from '../components-styled/TooltipArrow.native';
import TooltipStyled from '../components-styled/TooltipStyled';
import TooltipText from '../components-styled/TooltipText.native';
import TooltipTextWrapper from '../components-styled/TooltipTextWrapper.native';

const propTypes = {
  isVisible: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['bottom-right', 'bottom-left', 'top-right', 'top-left']),
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
};

const defaultProps = {
  placement: 'bottom-right',
};

class Tooltip extends React.Component {

  renderTooltip() {
    // Note: No need to pass 'onLongPress', 'onPressIn', 'onPressOut' and 'onPressOut' handlers.
    /* eslint-disable no-unused-vars */
    const {
      isVisible,
      label,
      placement,
      onLongPress,
      onPress,
      onPressIn,
      onPressOut,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    switch (placement) {
      case 'bottom-left':
      case 'bottom-right':
        return (
          <TooltipStyled isVisible={isVisible} placement={placement} {...props} >
            <TooltipArrow placement={placement} />
            <TooltipTextWrapper>
              <TooltipText>
                {label}
              </TooltipText>
            </TooltipTextWrapper>
          </TooltipStyled>
        );
      case 'top-left':
      case 'top-right':
        return (
          <TooltipStyled isVisible={isVisible} placement={placement} {...props} >
            <TooltipTextWrapper>
              <TooltipText>
                {label}
              </TooltipText>
            </TooltipTextWrapper>
            <TooltipArrow placement={placement} />
          </TooltipStyled>
        );
      default:
        return null;
    }
  }

  render() {
    const { onLongPress, onPress, onPressIn, onPressOut } = this.props;
    return (
      <TouchableWithoutFeedback
        onLongPress={onLongPress}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        {this.renderTooltip()}
      </TouchableWithoutFeedback>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
