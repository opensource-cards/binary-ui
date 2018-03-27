import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Text, View } from 'react-native';

import Label from 'binary-ui-components/mobile/Label';
import TimePicker from 'binary-ui-time-picker';

class TimePickerDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 22,
      minute: 45,
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
        locale="uk"
        minute={minute}
        minuteInterval={15}
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
  .add('TimePicker', () => (
    <View>
      <View>
        <Text>Static</Text>
      </View>
      <TimePicker
        hour={22}
        locale="uk"
        minute={45}
        minuteInterval={15}
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
        locale="uk"
        minute={45}
        minuteInterval={15}
        onChange={action}
        renderLeft={() => (
          <Label isBold>
            Disabled
          </Label>
        )}
      />
      <View>
        <Text>Demo</Text>
      </View>
      <TimePickerDemo />
    </View>
  ));
