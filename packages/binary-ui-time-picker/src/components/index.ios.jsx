import Button from 'binary-ui-components/mobile/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { DatePickerIOS } from 'react-native';

const propTypes = {
  hour: PropTypes.number.isRequired,
  minute: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  onChange: () => {},
};

/**
 * DatePickerIOS: https://facebook.github.io/react-native/docs/datepickerios.html
 */
class TimePicker extends React.Component {
  constructor(props) {
    super(props);
    const dateNow = new Date();
    this.state = {
      date: new Date(
        dateNow.getUTCFullYear(),
        dateNow.getUTCMonth(),
        dateNow.getUTCDate(),
        props.hour,
        props.minute,
        0,
        0
      ),
      isVisible: false,
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onDateChange(date) {
    const { onChange } = this.props;
    onChange({
      hour: date.getUTCHours(),
      minute: date.getUTCMinutes(),
    });
  }

  onPress() {
    const { isVisible } = this.state;
    this.setState(() => ({
      isVisible: !isVisible,
    }));
  }

  render() {
    const { hour, minute, ...props } = this.props;
    const { date, isVisible } = this.state;
    return (
      <React.Fragment>
        <Button {...props} label={`${hour}:${minute}`} onPress={this.onPress} />
        {isVisible ? (
          <DatePickerIOS date={date} mode="time" onDateChange={this.onDateChange} />
        ) : null}
      </React.Fragment>
    );
  }
}

TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

export default TimePicker;
