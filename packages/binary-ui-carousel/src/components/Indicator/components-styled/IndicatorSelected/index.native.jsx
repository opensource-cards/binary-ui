import { BINARY_COLOR_GRAY_10, EASING_CURVE_VIEW_STATE } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { TRANSITION_VIEW_STATE_DURATION } from '../../../../constants';

const styles = StyleSheet.create({
  selected: {
    backgroundColor: BINARY_COLOR_GRAY_10,
    height: 1,
    left: 0,
    position: 'absolute',
  },
});

const propTypes = {
  length: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  styleWidth: PropTypes.number.isRequired,
};

const defaultProps = {};

export default class IndicatorSelected extends React.Component {
  constructor(props) {
    super(props);
    this.animatedPosition = new Animated.Value(props.selectedIndex);
  }

  componentWillReceiveProps(nextProps) {
    const { selectedIndex } = this.props;
    if (selectedIndex !== nextProps.selectedIndex) {
      Animated.timing(this.animatedPosition, {
        duration: TRANSITION_VIEW_STATE_DURATION * 1000,
        easing: EASING_CURVE_VIEW_STATE,
        toValue: nextProps.selectedIndex,
      }).start();
    }
  }

  render() {
    const { length, styleWidth } = this.props;
    return (
      <Animated.View
        style={[styles.selected, {
          transform: [{
            translateX: this.animatedPosition.interpolate({
              inputRange: [0, length],
              outputRange: [0, length * styleWidth],
            }),
          }],
          width: styleWidth,
        }]}
      />
    );
  }
}

IndicatorSelected.defaultProps = defaultProps;
IndicatorSelected.propTypes = propTypes;
