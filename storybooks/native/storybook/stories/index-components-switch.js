import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { View } from 'react-native';

import Switch from 'binary-ui-components/mobile/Switch';

storiesOf('binary-ui-components', module)
  .add('Switch', () => (
    <View>
      <Switch
        isChecked
        label="Switch label"
        onChange={action()}
      />
      <Switch
        isChecked={false}
        onChange={action()}
      />
    </View>
  ));