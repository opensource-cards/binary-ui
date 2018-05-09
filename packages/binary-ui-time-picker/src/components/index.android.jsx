import Button from 'binary-ui-components/mobile/Button';
import Group from 'binary-ui-components/mobile/Group';
import IconArrowDown from 'binary-ui-icons/binary/ArrowDown';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';
import { TimePickerAndroid } from 'react-native';

const propTypes = {
  formatTime: PropTypes.func,
  hour: PropTypes.number.isRequired,
  is24Hour: PropTypes.bool,
  isDisabled: PropTypes.bool,
  locale: PropTypes.string,
  maximumDate: PropTypes.instanceOf(Date),
  minimumDate: PropTypes.instanceOf(Date),
  minute: PropTypes.number.isRequired,
  minuteInterval: PropTypes.number,
  onChange: PropTypes.func,
  renderLeft: PropTypes.func,
};

const defaultProps = {
  formatTime: (date) => (
    `${padStart(date.getHours(), 2, '0')}:${padStart(date.getMinutes(), 2, '0')}`
  ),
  is24Hour: undefined,
  isDisabled: false,
  locale: undefined,
  maximumDate: undefined,
  minimumDate: undefined,
  minuteInterval: undefined,
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
    const { hour: initHour, is24Hour, minute: initMinute, onChange } = this.props;
    try {
      TimePickerAndroid.open({
        hour: initHour,
        minute: initMinute,
        is24Hour,
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
    /* eslint-disable no-unused-vars */
    const {
      formatTime,
      hour,
      is24Hour,
      isDisabled,
      locale,
      maximumDate,
      minimumDate,
      minute,
      minuteInterval,
      renderLeft,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    const dateNow = new Date();
    return (
      <Group
        renderLeft={renderLeft}
        renderRight={() => (
          <Button
            {...props}
            isDisabled={isDisabled}
            label={formatTime(new Date(
              dateNow.getFullYear(),
              dateNow.getMonth(),
              dateNow.getDate(),
              hour,
              minute
            ), {
              hour12: is24Hour,
            })}
            onPress={this.onPress}
            renderIcon={rest => <IconArrowDown {...rest} />}
          />
        )}
      />
    );
  }
}

TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

export default TimePicker;
