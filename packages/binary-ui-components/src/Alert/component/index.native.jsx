import PropTypes from 'prop-types';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import AlertContent from '../components-styled/AlertContent';
import AlertWrapper from '../components-styled/AlertWrapper';
import AlertIconWrapper from '../components-styled/AlertIconWrapper';
import { CONFIRM } from '../constants/alert-types';

const propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
};

const defaultProps = {
  type: CONFIRM,
  renderIconLeft: undefined,
  renderIconRight: undefined,
};

const Alert = ({
  text,
  type,
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  renderIconLeft,
  renderIconRight,
  ...props,
}) => (
  <TouchableWithoutFeedback
    onLongPress={onLongPress}
    onPress={onPress}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
  >
    <AlertWrapper {...props} alertType={type}>
      {renderIconLeft ? (
        <AlertIconWrapper>{renderIconLeft()}</AlertIconWrapper>
      ) : null}
      <AlertContent alertType={type}>{text}</AlertContent>
      {renderIconRight ? (
        <AlertIconWrapper>{renderIconRight()}</AlertIconWrapper>
      ) : null}
    </AlertWrapper>
  </TouchableWithoutFeedback>
);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
