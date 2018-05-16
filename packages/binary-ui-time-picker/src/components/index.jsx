import Select from 'binary-ui-components/mobile/Select';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';

export const MINUTE_MSEC = 60000;

const formatTimeDefault = (date) => `${padStart(date.getHours(), 2, '0')}:${padStart(date.getMinutes(), 2, '0')}`;

const propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  formatTime: PropTypes.func,
  is24Hour: PropTypes.bool,
  isDisabled: PropTypes.bool,
  locale: PropTypes.string,
  maximumDate: PropTypes.instanceOf(Date),
  minimumDate: PropTypes.instanceOf(Date),
  minuteInterval: PropTypes.number,
  timeZone: PropTypes.string,
  onChange: PropTypes.func,
  renderLeft: PropTypes.func,
};

const defaultProps = {
  formatTime: undefined,
  is24Hour: undefined,
  isDisabled: false,
  locale: undefined,
  maximumDate: undefined,
  minimumDate: undefined,
  minuteInterval: 15,
  timeZone: undefined,
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
      date: new Date(value),
    });
  }

  getListOfTimePoints() {
    const { maximumDate, minimumDate, minuteInterval } = this.props;
    const dateNow = new Date();
    const minimumDateValid = minimumDate || new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 0, 0);
    const maximumDateValid = maximumDate || new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 24, 0);
    let timePoints = [];
    let minimumDateMsec = minimumDateValid.valueOf();
    const maximumDateMsec = maximumDateValid.valueOf();
    while (minimumDateMsec <= maximumDateMsec) {
      timePoints = [
        ...timePoints,
        minimumDateMsec,
      ];
      minimumDateMsec += (minuteInterval * MINUTE_MSEC);
    }
    return timePoints;
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
      timeZone,
      renderLeft,
      ...props,
    } = this.props;
    const dateOriginalTimezoneOffset = date.getTimezoneOffset();
    /* eslint-enable no-unused-vars */
    return (
      <Select
        {...props}
        isDisabled={isDisabled}
        items={this.getListOfTimePoints().map(value => {
          const valueDate = new Date(value);
          const dateCurrentTimezoneOffset = valueDate.getTimezoneOffset();
          return {
            key: String(value),
            label: formatTime
              ? formatTime(new Date(value), { hour12: is24Hour, timeZone })
              : formatTimeDefault(new Date(value - (dateOriginalTimezoneOffset - dateCurrentTimezoneOffset) * MINUTE_MSEC)),
            value: String(value),
          };
        })}
        selected={String(date.valueOf())}
        renderLeft={renderLeft}
        onChange={this.onChange}
      />
    );
  }
}

TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

export default TimePicker;
