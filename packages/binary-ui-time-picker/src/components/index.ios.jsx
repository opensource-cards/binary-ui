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
    this.state = {
      isVisible: false,
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onDateChange(date) {
    const { onChange } = this.props;
    onChange({
      hour: date.getHours(),
      minute: date.getMinutes(),
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
    const { isVisible } = this.state;
    const dateNow = new Date();
    return (
      <React.Fragment>
        <Button {...props} label={`${hour}:${minute}`} onPress={this.onPress} />
        {isVisible ? (
          <DatePickerIOS
            date={new Date(
              dateNow.getFullYear(),
              dateNow.getMonth(),
              dateNow.getDate(),
              props.hour,
              props.minute,
              0,
              0
            )}
            mode="time"
            onDateChange={this.onDateChange}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

export default TimePicker;
