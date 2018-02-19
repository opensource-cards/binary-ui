import Button from 'binary-ui-components/mobile/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { DatePickerIOS } from 'react-native';

const propTypes = {
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  onChange: () => {},
};

/**
 * DatePickerIOS: https://facebook.github.io/react-native/docs/datepickerios.html
 */
class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onDateChange(date) {
    const { onChange } = this.props;
    onChange({
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    });
  }

  onPress() {
    const { isVisible } = this.state;
    this.setState(() => ({
      isVisible: !isVisible,
    }));
  }

  render() {
    const { day, month, year, ...props } = this.props;
    const { isVisible } = this.state;
    return (
      <React.Fragment>
        <Button
          {...props}
          label={`${year}-${month}-${day}`}
          onPress={this.onPress}
        />
        {isVisible ? (
          <DatePickerIOS
            date={new Date(year, month, day)}
            mode="date"
            onDateChange={this.onDateChange}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
