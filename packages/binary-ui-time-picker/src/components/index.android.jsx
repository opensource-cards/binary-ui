import Button from 'binary-ui-components/mobile/Button';
import Group from 'binary-ui-components/mobile/Group';
import IconArrowDown from 'binary-ui-icons/binary/ArrowDown';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';
import { TimePickerAndroid } from 'react-native';

const propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  formatTime: PropTypes.func,
  is24Hour: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isValid: PropTypes.bool,
  locale: PropTypes.string,
  maximumDate: PropTypes.instanceOf(Date),
  minimumDate: PropTypes.instanceOf(Date),
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
  isValid: true,
  locale: undefined,
  maximumDate: undefined,
  minimumDate: undefined,
  minuteInterval: 15,
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
    const { date, is24Hour, onChange } = this.props;
    try {
      TimePickerAndroid.open({
        hour: date.getHours(),
        minute: date.getMinutes(),
        is24Hour,
      }).then(({ action, hour, minute }) => {
        if (action === TimePickerAndroid.dismissedAction) {
          return;
        }
        onChange(new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          hour,
          minute
        ));
      });
    } catch ({ code, message }) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Cannot open time picker', message);
      }
    }
  }

  getHour12(is24Hour) {
    if (is24Hour === true) {
      return false;
    }
    if (is24Hour === false) {
      return true;
    }
    // User default format.
    return undefined;
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      date,
      formatTime,
      is24Hour,
      isDisabled,
      isValid,
      locale,
      maximumDate,
      minimumDate,
      minuteInterval,
      renderLeft,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    return (
      <Group
        renderLeft={renderLeft}
        renderRight={() => (
          <Button
            {...props}
            isDisabled={isDisabled}
            isValid={isValid}
            label={formatTime(date, {
              hour12: this.getHour12(is24Hour),
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
