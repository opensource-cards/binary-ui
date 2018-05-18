import Select from 'binary-ui-components/mobile/Select';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';

export const MINUTE_MSEC = 60000;

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
  formatTime: (date) => `${padStart(date.getHours(), 2, '0')}:${padStart(date.getMinutes(), 2, '0')}`,
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
    onChange(new Date(Number(value)));
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
      renderLeft,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    return (
      <Select
        {...props}
        isDisabled={isDisabled}
        items={this.getListOfTimePoints().map(value => ({
          key: String(value),
          label: formatTime(new Date(value), { hour12: is24Hour }),
          value: String(value),
        }))}
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
