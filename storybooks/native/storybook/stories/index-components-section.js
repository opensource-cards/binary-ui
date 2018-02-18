import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Text } from 'react-native';

import Section from 'binary-ui-components/mobile/Section';

storiesOf('binary-ui-components/mobile', module)
  .add('Section', () => (
    <Section label="Section Label">
      <Text>Section content</Text>
    </Section>
  ));
