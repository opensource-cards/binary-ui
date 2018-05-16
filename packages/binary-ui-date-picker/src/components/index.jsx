import Group from 'binary-ui-components/mobile/Group';
import Input from 'binary-ui-components/mobile/Input';
import isEmpty from 'lodash/isEmpty';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  isDisabled: PropTypes.bool,
  locale: PropTypes.string,
  maximumDate: PropTypes.instanceOf(Date),
  minimumDate: PropTypes.instanceOf(Date),
  timeZone: PropTypes.string,
  onChange: PropTypes.func,
  renderLeft: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  locale: undefined,
  maximumDate: undefined,
  minimumDate: undefined,
  timeZone: undefined,
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
      onChange(new Date(Number(valuesParsed[0]), Number(valuesParsed[1]) - 1, Number(valuesParsed[2])));
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Cannot parse date', error);
      }
    }
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      date,
      isDisabled,
      locale,
      maximumDate,
      minimumDate,
      timeZone,
      renderLeft,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    // Note: The displayed date format will be chosen based on the set locale of the user's browser, whereas the date value is always formatted yyyy-mm-dd.
    // See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
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
            value={`${date.getFullYear()}-${padStart(date.getMonth() + 1, 2, '0')}-${padStart(date.getDate(), 2, '0')}`}
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
