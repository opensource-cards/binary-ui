import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { View } from 'react-native';

import ProgressBar from 'binary-ui-components/mobile/ProgressBar';

storiesOf('binary-ui-components/mobile', module)
  .add('ProgressBar', () => (
    <View>
      <ProgressBar progress={20} />
      <ProgressBar progress={95} />
    </View>
  ));
