import Group from 'binary-ui-components/mobile/Group';
import Input from 'binary-ui-components/mobile/Input';
import isEmpty from 'lodash/isEmpty';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  day: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool,
  locale: PropTypes.string,
  maximumDate: PropTypes.instanceOf(Date),
  minimumDate: PropTypes.instanceOf(Date),
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  renderLeft: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  locale: undefined,
  maximumDate: undefined,
  minimumDate: undefined,
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
    /* eslint-disable no-unused-vars */
    const {
      day,
      isDisabled,
      locale,
      maximumDate,
      minimumDate,
      month,
      year,
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
            max={maximumDate ? `${maximumDate.getFullYear()}-${padStart(maximumDate.getMonth() + 1, 2, '0')}-${padStart(maximumDate.getDate(), 2, '0')}` : undefined}
            min={minimumDate ? `${minimumDate.getFullYear()}-${padStart(minimumDate.getMonth() + 1, 2, '0')}-${padStart(minimumDate.getDate(), 2, '0')}` : undefined}
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
