import Button from 'binary-ui-components/mobile/Button';
import Group from 'binary-ui-components/mobile/Group';
import IconArrowDown from 'binary-ui-icons/binary/ArrowDown';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';
import { DatePickerIOS, LayoutAnimation } from 'react-native';

const propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  formatTime: PropTypes.func,
  is24Hour: PropTypes.bool,
  isDisabled: PropTypes.bool,
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
  locale: undefined,
  maximumDate: undefined,
  minimumDate: undefined,
  minuteInterval: 15,
  onChange: () => {},
  renderLeft: () => null,
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
    onChange(date);
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
    /* eslint-disable no-unused-vars */
    const {
      date,
      formatTime,
      is24Hour,
      isDisabled,
      locale,
      maximumDate,
      minimumDate,
      minuteInterval,
      renderLeft,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    const { isVisible } = this.state;
    return (
      <React.Fragment>
        <Group
          renderLeft={renderLeft}
          renderRight={() => (
            <Button
              {...props}
              isDisabled={isDisabled}
              label={formatTime(date, {
                hour12: is24Hour,
              })}
              onPress={this.onPress}
              renderIcon={rest => <IconArrowDown {...rest} />}
            />
          )}
        />
        {isVisible ? (
          <DatePickerIOS
            date={date}
            locale={locale}
            maximumDate={maximumDate}
            minimumDate={minimumDate}
            minuteInterval={minuteInterval}
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
