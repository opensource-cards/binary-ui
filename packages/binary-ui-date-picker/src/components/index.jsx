import Group from 'binary-ui-components/mobile/Group';
import Input from 'binary-ui-components/mobile/Input';
import isEmpty from 'lodash/isEmpty';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  day: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  renderLeft: PropTypes.func.isRequired,
};

const defaultProps = {
  isDisabled: false,
  onChange: () => {},
  renderLeft: () => null,
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

  render() {
    const { day, month, year, renderLeft, ...props } = this.props;
    return (
      <Group
        renderLeft={renderLeft}
        renderRight={() => (
          <Input
            {...props}
            type="date"
            value={`${year}-${padStart(month, 2, '0')}-${padStart(day, 2, '0')}`}
            onChange={this.onChange}
          />
        )}
      />
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
