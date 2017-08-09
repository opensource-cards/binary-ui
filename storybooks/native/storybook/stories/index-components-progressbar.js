import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';
import { View } from 'react-native';

import ProgressBar from 'binary-ui-components/mobile/ProgressBar';

storiesOf('binary-ui-components', module)
  .add('ProgressBar', () => (
    <View>
      <ProgressBar progress={20} />
      <ProgressBar progress={95} />
    </View>
  ));
