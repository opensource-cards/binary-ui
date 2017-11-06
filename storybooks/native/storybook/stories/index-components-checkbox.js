import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';
import { View } from 'react-native';

import Checkbox from 'binary-ui-components/mobile/Checkbox';

storiesOf('binary-ui-components/mobile', module)
  .add('Checkbox', () => (
    <View>
      <Checkbox isChecked onChange={action()} onClick={action()} />
      <Checkbox isChecked={false} onChange={action()} onClick={action()} />
    </View>
  ));
