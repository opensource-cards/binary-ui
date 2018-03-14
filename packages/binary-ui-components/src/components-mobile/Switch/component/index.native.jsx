import {
  BINARY_COLOR_BLUE_40,
  BINARY_COLOR_GRAY_80,
  EASING_CURVE_COMPONENT_STATE,
  OPACITY_DISABLED,
} from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import SwitchLabel from '../components-styled/SwitchLabel';
import SwitchWrapper from '../components-styled/SwitchWrapper';
import { LIST_ITEM_HALF_HEIGHT } from '../../../utils/styles';

const styles = StyleSheet.create({
  container: {
    borderRadius: LIST_ITEM_HALF_HEIGHT,
    height: LIST_ITEM_HALF_HEIGHT,
    marginRight: 10,
    width: LIST_ITEM_HALF_HEIGHT * 2,
  },
  animatedContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: LIST_ITEM_HALF_HEIGHT * 2,
  },
  circle: {
    backgroundColor: 'white',
    borderRadius: LIST_ITEM_HALF_HEIGHT / 2,
    borderWidth: 1,
    height: LIST_ITEM_HALF_HEIGHT,
    width: LIST_ITEM_HALF_HEIGHT,
  },
});

const propTypes = {
  isChecked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  label: undefined,
  onChange: undefined,
};

export default class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.animatedColor = new Animated.Value(props.isChecked ? 1 : -1);
    this.animatedTransform = new Animated.Value(props.isChecked ? 1 : -1);
    this.onPress = this.onPress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { isChecked } = this.props;
    if (isChecked === nextProps.isChecked) {
      return;
    }
    Animated.parallel([
      Animated.timing(this.animatedColor, {
        duration: 250,
        toValue: nextProps.isChecked ? 1 : -1,
        easing: EASING_CURVE_COMPONENT_STATE,
      }),
      Animated.spring(this.animatedTransform, {
        duration: 250,
        toValue: nextProps.isChecked ? 1 : -1,
        easing: EASING_CURVE_COMPONENT_STATE,
      }),
    ]).start();
  }

  onPress() {
    const { isChecked, isDisabled, onChange } = this.props;
    if (isDisabled) {
      return;
    }
    if (onChange) {
      onChange(!isChecked);
    }
  }

  render() {
    const { isDisabled, label } = this.props;
    const animatedColorInterpolation = this.animatedColor.interpolate({
      inputRange: [-1, 1],
      outputRange: [BINARY_COLOR_GRAY_80, BINARY_COLOR_BLUE_40],
    });
    const animatedTransformInterpolation = this.animatedTransform.interpolate({
      inputRange: [-1, 1],
      outputRange: [-LIST_ITEM_HALF_HEIGHT / 2, LIST_ITEM_HALF_HEIGHT / 2],
    });
    return (
      <SwitchWrapper>
        <SwitchLabel isBold isDisabled={isDisabled} >
          {label}
        </SwitchLabel>
        {isDisabled ? (
          <Animated.View
            style={[styles.container, { backgroundColor: animatedColorInterpolation }, {
              opacity: OPACITY_DISABLED,
            }]}
          >
            <Animated.View
              style={[
                styles.animatedContainer,
                { transform: [{ translateX: animatedTransformInterpolation }],
              }]}
            >
              <Animated.View
                style={[styles.circle, { borderColor: animatedColorInterpolation }]}
              />
            </Animated.View>
          </Animated.View>
        ) : (
          <TouchableWithoutFeedback onPress={this.onPress} >
            <Animated.View
              style={[styles.container, { backgroundColor: animatedColorInterpolation }]}
            >
              <Animated.View
                style={[
                  styles.animatedContainer,
                  { transform: [{ translateX: animatedTransformInterpolation }],
                }]}
              >
                <Animated.View
                  style={[styles.circle, { borderColor: animatedColorInterpolation }]}
                />
              </Animated.View>
            </Animated.View>
          </TouchableWithoutFeedback>
        )}
      </SwitchWrapper>
    );
  }
}

Switch.defaultProps = defaultProps;
Switch.propTypes = propTypes;
