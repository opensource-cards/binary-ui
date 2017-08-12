import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';
import { Text } from 'react-native';

import Spinner from 'binary-ui-components/mobile/Spinner';

storiesOf('binary-ui-components', module)
  .add('Spinner', () => (
    <Spinner/>
  ));
