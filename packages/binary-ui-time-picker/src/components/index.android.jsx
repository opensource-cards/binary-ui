import Button from 'binary-ui-components/mobile/Button';
import Group from 'binary-ui-components/mobile/Group';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';
import { TimePickerAndroid } from 'react-native';

const propTypes = {
  hour: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool,
  minute: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  renderLeft: PropTypes.func.isRequired,
};

const defaultProps = {
  isDisabled: false,
  onChange: () => {},
  renderLeft: () => null,
};

/**
 * TimePickerAndroid: https://facebook.github.io/react-native/docs/timepickerandroid.html
 */
class TimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { hour: initHour, minute: initMinute, onChange } = this.props;
    try {
      TimePickerAndroid.open({
        hour: initHour,
        minute: initMinute,
        is24Hour: true,
      }).then(({ action, hour, minute }) => {
        if (action === TimePickerAndroid.dismissedAction) {
          return;
        }
        onChange({
          hour,
          minute,
        });
      });
    } catch ({ code, message }) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Cannot open time picker', message);
      }
    }
  }

  render() {
    const { hour, minute, renderLeft, ...props } = this.props;
    // A "isDisabled" property is passed to the button.
    // Clicks will be ignored if "isDisabled" has a "true" value.
    return (
      <Group
        renderLeft={renderLeft}
        renderRight={() => (
          <Button
            {...props}
            label={`${padStart(hour, 2, '0')}:${padStart(minute, 2, '0')}`}
            onPress={this.onPress}
          />
        )}
      />
    );
  }
}

TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

export default TimePicker;
