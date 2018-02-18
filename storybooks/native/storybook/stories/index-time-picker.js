import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { View } from 'react-native';

import TimePicker from 'binary-ui-time-picker';

storiesOf('binary-ui-time-picker', module)
  .add('TimePicker', () => (
    <View>
      <TimePicker
        hour={22}
        minute={59}
        onChange={action}
      />
    </View>
  ));
