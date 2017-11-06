import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';
import { View } from 'react-native';

import Spinner from 'binary-ui-components/mobile/Spinner';

storiesOf('binary-ui-components/mobile', module)
  .add('Spinner', () => (
    <View>
      <Spinner/>
      <Spinner size={50} />
      <Spinner size={100} />
    </View>
  ));
