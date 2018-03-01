import Button from 'binary-ui-components/mobile/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { DatePickerIOS, LayoutAnimation } from 'react-native';

const propTypes = {
  hour: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool,
  minute: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  isDisabled: false,
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
    LayoutAnimation.configureNext({
      duration: 250,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      delete: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
    });
    this.setState(() => ({
      isVisible: !isVisible,
    }));
  }

  render() {
    const { hour, minute, ...props } = this.props;
    const { isVisible } = this.state;
    const dateNow = new Date();
    // A "isDisabled" property is passed to the button.
    // Clicks will be ignored if "isDisabled" has a "true" value.
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
