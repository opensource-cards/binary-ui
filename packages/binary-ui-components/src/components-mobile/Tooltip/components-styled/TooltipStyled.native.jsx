import { BINARY_COLOR_GRAY_30 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Animated } from 'react-native';
import { TOOLTIP_ARROW_HEIGHT, TOOLTIP_ARROW_SHIFT, TOOLTIP_ARROW_WIDTH } from '../config';

const propTypes = {
  children: PropTypes.any.isRequired,
  isVisible: PropTypes.bool.isRequired,
  parentBoundingRect: PropTypes.object.isRequired,
  placement: PropTypes.oneOf(['bottom-right', 'bottom-left']).isRequired,
  targetBoundingRect: PropTypes.object.isRequired,
  style: PropTypes.object,
};

const defaultProps = {
  style: {},
};

export default class TooltipStyled extends React.Component {

  constructor(props) {
    super(props);
    this.animatedOpacity = new Animated.Value(props.isVisible ? 1 : 0);
  }

  componentWillReceiveProps(newProps) {
    const { isVisible } = this.props;
    if (isVisible !== newProps.isVisible) {
      Animated.timing(this.animatedOpacity, {
        duration: 300,
        toValue: newProps.isVisible ? 1 : 0,
        useNativeDriver: true,
      }).start();
    }
  }

  getPositioning() {
    const { parentBoundingRect, targetBoundingRect } = this.props;
    switch (this.props.placement) {
      case 'bottom-left': {
        const parentBoundingRectRight = parentBoundingRect.px + parentBoundingRect.width;
        const targetBoundingRectLeft = targetBoundingRect.px + targetBoundingRect.width;
        const commonX = parentBoundingRectRight - targetBoundingRectLeft;
        const commonY = targetBoundingRect.py - parentBoundingRect.py;
        const targetCenterX = targetBoundingRect.width / 2;
        return {
          alignSelf: 'flex-start',
          right: commonX + targetCenterX - TOOLTIP_ARROW_SHIFT - TOOLTIP_ARROW_WIDTH,
          top: commonY + targetBoundingRect.height + TOOLTIP_ARROW_HEIGHT,
        };
      }
      case 'bottom-right': {
        const commonX = targetBoundingRect.px - parentBoundingRect.px;
        const commonY = targetBoundingRect.py - parentBoundingRect.py;
        const targetCenterX = targetBoundingRect.width / 2;
        return {
          alignSelf: 'flex-end',
          left: commonX + targetCenterX - TOOLTIP_ARROW_SHIFT - TOOLTIP_ARROW_WIDTH,
          top: commonY + targetBoundingRect.height + TOOLTIP_ARROW_HEIGHT,
        };
      }
      default:
        return undefined;
    }
  }

  render() {
    const { children, style, ...props } = this.props;
    return (
      <Animated.View
        style={{
          alignItems: 'center',
          backgroundColor: BINARY_COLOR_GRAY_30,
          borderRadius: 5,
          elevation: 1,
          opacity: this.animatedOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
          paddingHorizontal: 10,
          paddingVertical: 5,
          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          ...this.getPositioning(),
          ...style,
        }}
        {...props}
      >
        {children}
      </Animated.View>
    );
  }
}

TooltipStyled.propTypes = propTypes;
TooltipStyled.defaultProps = defaultProps;
