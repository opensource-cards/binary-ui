import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { View } from 'react-native';

import DatePicker from 'binary-ui-date-picker';

storiesOf('binary-ui-date-picker', module)
  .add('DatePicker', () => (
    <View>
      <DatePicker
        day={23}
        month={1}
        year={2018}
        onChange={action}
      />
    </View>
  ));
