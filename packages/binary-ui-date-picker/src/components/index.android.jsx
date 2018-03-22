import Button from 'binary-ui-components/mobile/Button';
import Group from 'binary-ui-components/mobile/Group';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';
import { DatePickerAndroid } from 'react-native';

const propTypes = {
  day: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  renderLeft: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  onChange: () => {},
  renderLeft: () => null,
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
        date: new Date(initYear, initMonth - 1, initDay),
      }).then(({ action, day, year, month }) => {
        if (action === DatePickerAndroid.dismissedAction) {
          return;
        }
        onChange({
          day,
          month: month + 1,
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
    const { day, month, year, renderLeft, ...props } = this.props;
    // A "isDisabled" property is passed to the button.
    // Clicks will be ignored if "isDisabled" has a "true" value.
    return (
      <Group
        renderLeft={renderLeft}
        renderRight={() => (
          <Button
            {...props}
            label={`${year}-${padStart(month, 2, '0')}-${padStart(day, 2, '0')}`}
            onPress={this.onPress}
          />
        )}
      />
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
