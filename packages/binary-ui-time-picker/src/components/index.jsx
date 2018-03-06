import Group from 'binary-ui-components/mobile/Group';
import PropTypes from 'prop-types';
import React from 'react';
import Input from '../components-styled/Input';
import { getValueValid } from '../utils';

const propTypes = {
  hour: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool,
  minute: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  renderLeft: PropTypes.func.isRequired,
};

const defaultProps = {
  isDisabled: false,
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
    const { hour, minute, renderLeft, ...props } = this.props;
    return (
      <Group
        renderLeft={renderLeft}
        renderRight={() => (
          <Input
            {...props}
            type="time"
            value={`${getValueValid(hour)}:${getValueValid(minute)}`}
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
