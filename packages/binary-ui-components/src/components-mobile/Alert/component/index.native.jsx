import PropTypes from 'prop-types';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import AlertContent from '../components-styled/AlertContent';
import AlertWrapper from '../components-styled/AlertWrapper';
import { INFO } from '../constants/alert-types';

const propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
};

const defaultProps = {
  type: INFO,
};

const Alert = ({ text, type, onLongPress, onPress, onPressIn, onPressOut, ...props }) => (
  <TouchableWithoutFeedback
    onLongPress={onLongPress}
    onPress={onPress}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
  >
    <AlertWrapper alertType={type} {...props} >
      <AlertContent alertType={type} >
        {text}
      </AlertContent>
    </AlertWrapper>
  </TouchableWithoutFeedback>
);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
