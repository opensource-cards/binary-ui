import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { View } from 'react-native';

import NotificationIcon from 'binary-ui-components/mobile/NotificationIcon';

storiesOf('binary-ui-components/mobile', module)
  .add('NotificationIcon', () => (
    <View>
      <NotificationIcon />
    </View>
  ));
