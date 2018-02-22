import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Text, View } from 'react-native';

import Label from 'binary-ui-components/mobile/Label';

storiesOf('binary-ui-components/mobile', module)
  .add('Label', () => (
    <View>
      <Label>
        Label
      </Label>
      <Label isDisabled >
        Label disabled
      </Label>
      <Label isBold>
        Label bold
      </Label>
      <Label isBold isDisabled >
        Label bold disabled
      </Label>
    </View>
  ));
