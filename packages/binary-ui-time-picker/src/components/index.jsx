import Select from 'binary-ui-components/mobile/Select';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';

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
  minuteInterval: 15,
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
    onChange({
      hour: Math.trunc(value / 60),
      minute: value % 60,
    });
  }

  getListOfTimePoints() {
    const { maximumDate, minimumDate, minuteInterval } = this.props;
    let timePoints = [];
    let timeStart = minimumDate ? minimumDate.getHours() * 60 + minimumDate.getMinutes() : 0;
    const timeEnd = maximumDate ? maximumDate.getHours() * 60 + maximumDate.getMinutes() : 24 * 60;
    while (timeStart <= timeEnd) {
      timePoints = [...timePoints, { hour: Math.trunc(timeStart / 60), minute: timeStart % 60 }];
      timeStart += minuteInterval;
    }
    return timePoints;
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
      <Select
        {...props}
        isDisabled={isDisabled}
        items={this.getListOfTimePoints().map(value => ({
          key: `${value.hour}:${value.minute}`,
          label: formatTime(new Date(
            dateNow.getFullYear(),
            dateNow.getMonth(),
            dateNow.getDate(),
            value.hour,
            value.minute
          ), {
            hour12: is24Hour,
          }),
          value: String(value.hour * 60 + value.minute),
        }))}
        selected={String(hour * 60 + minute)}
        renderLeft={renderLeft}
        onChange={this.onChange}
      />
    );
  }
}

TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

export default TimePicker;
