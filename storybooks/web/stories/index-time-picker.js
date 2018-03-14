import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';

import Label from 'binary-ui-components/mobile/Label';
import TimePicker from 'binary-ui-time-picker';

setAddon(infoAddon);

class TimePickerDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 22,
      minute: 59,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ hour, minute }) {
    this.setState(() => ({
      hour,
      minute
    }));
  }

  render() {
    const { hour, minute } = this.state;
    return (
      <TimePicker
        hour={hour}
        minute={minute}
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

storiesOf('binary-ui-time-picker', module)
  .add('TimePicker', withInfo('TimePicker component')(() => (
    <div>
      <div>Preview</div>
      <TimePicker
        hour={22}
        minute={59}
        onChange={action}
        renderLeft={() => (
          <Label isBold>
            Available
          </Label>
        )}
      />
      <TimePicker
        hour={22}
        isDisabled
        minute={59}
        onChange={action}
        renderLeft={() => (
          <Label isBold>
            Disabled
          </Label>
        )}
      />
      <div>Demo</div>
      <TimePickerDemo />
    </div>
  )));
