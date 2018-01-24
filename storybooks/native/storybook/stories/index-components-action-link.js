import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import IconAdd from 'binary-ui-icons/binary/Add';
import ActionLink from 'binary-ui-components/mobile/ActionLink';

storiesOf('binary-ui-components/mobile', module)
  .add('ActionLink', () => (
    <View>
      <View style={{ padding: 5 }} >
        <Text>1. Here is an </Text><ActionLink
          draggable={false}
          href="https://andcards.com"
          label="ActionLink"
          title="Title"
          renderIconRight={rest => <IconAdd {...rest} />}
        /><Text> example.</Text>
      </View>
      <View style={{ padding: 5 }} >
        <ActionLink
          draggable={false}
          href="https://andcards.com"
          label="2. ActionLink full width"
          title="Title"
          renderIconRight={rest => <IconAdd {...rest} />}
        />
      </View>
      <View style={{ padding: 5 }} >
        <ActionLink
          draggable={false}
          href="https://andcards.com"
          isDisabled
          label="3. ActionLink disabled"
          title="Title"
          renderIconRight={rest => <IconAdd {...rest} />}
        />
      </View>
    </View>
  ));
