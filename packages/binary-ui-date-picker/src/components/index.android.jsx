import Button from 'binary-ui-components/mobile/Button';
import Group from 'binary-ui-components/mobile/Group';
import IconArrowDown from 'binary-ui-icons/binary/ArrowDown';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';
import { DatePickerAndroid } from 'react-native';

const propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  formatDate: PropTypes.func,
  isDisabled: PropTypes.bool,
  isValid: PropTypes.bool,
  locale: PropTypes.string,
  maximumDate: PropTypes.instanceOf(Date),
  minimumDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  renderLeft: PropTypes.func,
};

const defaultProps = {
  formatDate: (date) => (
    `${date.getFullYear()}-${padStart(date.getMonth() + 1, 2, '0')}-${padStart(date.getDate(), 2, '0')}`
  ),
  isDisabled: false,
  isValid: true,
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
    const { date, onChange } = this.props;
    try {
      DatePickerAndroid.open({
        date,
      }).then(({ action, day, month, year }) => {
        if (action === DatePickerAndroid.dismissedAction) {
          return;
        }
        onChange(new Date(year, month, day));
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
      date,
      formatDate,
      isDisabled,
      isValid,
      locale,
      maximumDate,
      minimumDate,
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
            label={formatDate(date)}
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
