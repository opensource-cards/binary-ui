import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Group from 'binary-ui-components/mobile/Group';

storiesOf('binary-ui-components', module)
  .add('to Storybook', () => (
    <Group
      renderLeft={() => (
        <Text>
          Left
        </Text>
      )}
      renderRight={() => (
        <Text>
          Right
        </Text>
      )}
    />
  ));
