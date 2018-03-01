import Button from 'binary-ui-components/mobile/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { DatePickerAndroid } from 'react-native';

const propTypes = {
  day: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  isDisabled: false,
  onChange: () => {},
};

/**
 * DatePickerAndroid: https://facebook.github.io/react-native/docs/datepickerandroid.html
 */
class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const {
      day: initDay,
      month: initMonth,
      year: initYear,
      onChange,
    } = this.props;
    try {
      DatePickerAndroid.open({
        date: new Date(initYear, initMonth, initDay),
      }).then(({ action, day, year, month }) => {
        if (action === DatePickerAndroid.dismissedAction) {
          return;
        }
        onChange({
          day,
          month,
          year,
        });
      });
    } catch ({ code, message }) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Cannot open date picker', message);
      }
    }
  }

  render() {
    const { day, month, year, ...props } = this.props;
    // A "isDisabled" property is passed to the button.
    // Clicks will be ignored if "isDisabled" has a "true" value.
    return (
      <Button
        {...props}
        label={`${year}-${month}-${day}`}
        onPress={this.onPress}
      />
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
