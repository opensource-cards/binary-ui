import Group from 'binary-ui-components/mobile/Group';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';
import Input from '../components-styled/Input';

const propTypes = {
  hour: PropTypes.number.isRequired,
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
      hour,
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
    return (
      <Group
        renderLeft={renderLeft}
        renderRight={() => (
          <Input
            {...props}
            isDisabled={isDisabled}
            step={minuteInterval * 60}
            type="time"
            value={`${padStart(hour, 2, '0')}:${padStart(minute, 2, '0')}`}
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
