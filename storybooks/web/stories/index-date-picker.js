import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';

import Label from 'binary-ui-components/mobile/Label';
import DatePicker from 'binary-ui-date-picker';

setAddon(infoAddon);

class DatePickerDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 23,
      month: 1,
      year: 2018,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ day, month, year }) {
    this.setState(() => ({
      day,
      month,
      year,
    }));
  }

  render() {
    const { day, month, year } = this.state;
    return (
      <DatePicker
        day={day}
        month={month}
        year={year}
        onChange={this.onChange}
        renderLeft={() => (
          <Label isBold>
            Demo
          </Label>
        )}
      />
    );
  }
}

storiesOf('binary-ui-date-picker', module)
  .add('DatePicker', withInfo('DatePicker component')(() => (
    <div>
      <div>Preview</div>
      <DatePicker
        day={23}
        month={1}
        year={2018}
        onChange={action}
        renderLeft={() => (
          <Label isBold>
            Available
          </Label>
        )}
      />
      <DatePicker
        day={23}
        isDisabled
        month={1}
        year={2018}
        onChange={action}
        renderLeft={() => (
          <Label isBold>
            Disabled
          </Label>
        )}
      />
      <div>Demo</div>
      <DatePickerDemo />
    </div>
  )));
