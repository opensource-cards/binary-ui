import { EASING_CURVE_VIEW_STATE } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { TRANSITION_VIEW_STATE_DURATION } from '../../../../constants';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
  },
});

const propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  offset: PropTypes.number.isRequired,
  styleHeight: PropTypes.number.isRequired,
  styleWidth: PropTypes.number.isRequired,
  onTransitionEnd: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  onTransitionEnd: undefined,
};

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.animatedPosition = new Animated.Value(props.index);
  }

  componentWillReceiveProps(nextProps) {
    const { index, isActive, offset, onTransitionEnd } = this.props;
    if (index !== nextProps.index) {
      Animated.timing(this.animatedPosition, {
        duration: TRANSITION_VIEW_STATE_DURATION * 1000,
        easing: EASING_CURVE_VIEW_STATE,
        toValue: nextProps.index,
        useNativeDriver: true,
      }).start(() => {
        if (onTransitionEnd) {
          onTransitionEnd();
        }
      });
      return;
    }
    if (isActive && !nextProps.isActive) {
      Animated.timing(this.animatedPosition, {
        duration: TRANSITION_VIEW_STATE_DURATION * 1000,
        easing: EASING_CURVE_VIEW_STATE,
        toValue: nextProps.index,
        useNativeDriver: true,
      }).start();
      return;
    }
    if (offset !== nextProps.offset) {
      this.animatedPosition.setValue(nextProps.index + nextProps.offset);
    }
  }

  render() {
    const { children, styleHeight, styleWidth } = this.props;
    return (
      <Animated.View
        style={[styles.wrapper, {
          height: styleHeight,
          transform: [{
            translateX: this.animatedPosition.interpolate({
              inputRange: [0, 2],
              outputRange: [-styleWidth, styleWidth],
            }),
          }],
          width: styleWidth,
        }]}
      >
        {children}
      </Animated.View>
    );
  }
}

Index.defaultProps = defaultProps;
Index.propTypes = propTypes;
