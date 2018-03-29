import Button from 'binary-ui-components/mobile/Button';
import Group from 'binary-ui-components/mobile/Group';
import IconArrowDown from 'binary-ui-icons/binary/ArrowDown';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';
import { TimePickerAndroid } from 'react-native';

const propTypes = {
  hour: PropTypes.number.isRequired,
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
    /* eslint-disable no-unused-vars */
    const {
      hour,
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
    return (
      <Group
        renderLeft={renderLeft}
        renderRight={() => (
          <Button
            {...props}
            isDisabled={isDisabled}
            label={`${padStart(hour, 2, '0')}:${padStart(minute, 2, '0')}`}
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
