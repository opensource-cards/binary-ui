import PropTypes from 'prop-types';
import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { TOOLTIP_ARROW_SHIFT, TOOLTIP_ARROW_WIDTH } from '../config';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});

const propTypes = {
  children: PropTypes.any.isRequired,
  isVisible: PropTypes.bool.isRequired,
  placement: PropTypes.oneOf(['bottom-right', 'bottom-left', 'top-right', 'top-left']).isRequired,
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
    const { placement } = this.props;
    switch (placement) {
      case 'top-left': {
        return {
          alignItems: 'flex-end',
          right: TOOLTIP_ARROW_SHIFT - TOOLTIP_ARROW_WIDTH,
        };
      }
      case 'bottom-left': {
        return {
          alignItems: 'flex-end',
          right: TOOLTIP_ARROW_SHIFT - TOOLTIP_ARROW_WIDTH,
        };
      }
      case 'top-right': {
        return {
          alignItems: 'flex-start',
          left: -TOOLTIP_ARROW_SHIFT - TOOLTIP_ARROW_WIDTH,
        };
      }
      case 'bottom-right': {
        return {
          alignItems: 'flex-start',
          left: -TOOLTIP_ARROW_SHIFT - TOOLTIP_ARROW_WIDTH,
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
        style={[styles.container, {
          opacity: this.animatedOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }, this.getPositioning(), style]}
        {...props}
      >
        {children}
      </Animated.View>
    );
  }
}

TooltipStyled.propTypes = propTypes;
TooltipStyled.defaultProps = defaultProps;
