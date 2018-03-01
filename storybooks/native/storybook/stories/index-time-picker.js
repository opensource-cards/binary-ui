import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Text, View } from 'react-native';

import TimePicker from 'binary-ui-time-picker';

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
      <View>
        <Text>Available</Text>
      </View>
      <TimePicker
        hour={22}
        minute={59}
        onChange={action}
      />
      <View>
        <Text>Disabled</Text>
      </View>
      <TimePicker
        hour={22}
        isDisabled
        minute={59}
        onChange={action}
      />
      <View>
        <Text>Demo</Text>
      </View>
      <TimePickerDemo />
    </View>
  ));
