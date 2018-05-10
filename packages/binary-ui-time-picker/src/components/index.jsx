import Group from 'binary-ui-components/mobile/Group';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';
import Input from '../components-styled/Input';

const propTypes = {
  formatTime: PropTypes.func,
  hour: PropTypes.number.isRequired,
  is24Hour: PropTypes.bool,
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
  formatTime: (date) => (
    `${padStart(date.getHours(), 2, '0')}:${padStart(date.getMinutes(), 2, '0')}`
  ),
  is24Hour: undefined,
  isDisabled: false,
  locale: undefined,
  maximumDate: undefined,
  minimumDate: undefined,
  minuteInterval: undefined,
  onChange: () => {},
  renderLeft: () => null,
};

class TimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    const { onChange } = this.props;
    try {
      const valuesParsed = value.split(':');
      onChange({
        hour: Number(valuesParsed[0]),
        minute: Number(valuesParsed[1]),
      });
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Cannot parse time', error);
      }
    }
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      formatTime,
      hour,
      is24Hour,
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
    const dateNow = new Date();
    return (
      <Group
        renderLeft={renderLeft}
        renderRight={() => (
          // Note: Input uses system native time formatting.
          // Using 'formatTime', can break the input.
          <Input
            {...props}
            isDisabled={isDisabled}
            step={minuteInterval ? minuteInterval * 60 : undefined}
            type="time"
            value={new Date(
              dateNow.getFullYear(),
              dateNow.getMonth(),
              dateNow.getDate(),
              hour,
              minute
            )}
            onChange={this.onChange}
          />
        )}
      />
    );
  }
}

TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

export default TimePicker;
