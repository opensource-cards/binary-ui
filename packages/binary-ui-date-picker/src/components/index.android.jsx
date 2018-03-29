import Button from 'binary-ui-components/mobile/Button';
import Group from 'binary-ui-components/mobile/Group';
import IconArrowDown from 'binary-ui-icons/binary/ArrowDown';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';
import { DatePickerAndroid } from 'react-native';

const propTypes = {
  day: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool,
  locale: PropTypes.string,
  maximumDate: PropTypes.instanceOf(Date),
  minimumDate: PropTypes.instanceOf(Date),
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  renderLeft: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  locale: undefined,
  maximumDate: undefined,
  minimumDate: undefined,
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
    /* eslint-disable no-unused-vars */
    const {
      day,
      isDisabled,
      locale,
      maximumDate,
      minimumDate,
      month,
      year,
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
            label={`${year}-${padStart(month, 2, '0')}-${padStart(day, 2, '0')}`}
            onPress={this.onPress}
            renderIcon={rest => <IconArrowDown {...rest} />}
          />
        )}
      />
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
