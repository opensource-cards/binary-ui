import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';

import ImagePicker from 'binary-ui-components/mobile/ImagePicker';


storiesOf('binary-ui-components', module)
  .add('ImagePicker', () => (
    <ImagePicker />
  ));
