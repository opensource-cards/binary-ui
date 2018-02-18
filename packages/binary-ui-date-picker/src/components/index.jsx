import isEmpty from 'lodash/isEmpty';
import Input from 'binary-ui-components/mobile/Input';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  onChange: () => {},
};

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    const { onChange } = this.props;
    // A 'value' maybe be empty when date is invalid (e.g. the 32nd of April).
    if (isEmpty(value)) {
      return;
    }
    try {
      const valuesParsed = value.split('-');
      onChange({
        year: Number(valuesParsed[0]),
        month: Number(valuesParsed[1]),
        day: Number(valuesParsed[2]),
      });
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Cannot parse date', error);
      }
    }
  }

  getValueValid(value) {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  }

  render() {
    const { day, month, year, ...props } = this.props;
    return (
      <Input
        {...props}
        type="date"
        value={`${year}-${this.getValueValid(month)}-${this.getValueValid(
          day
        )}`}
        onChange={this.onChange}
      />
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
