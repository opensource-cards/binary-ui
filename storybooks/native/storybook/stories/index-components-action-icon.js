import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';
import { View } from 'react-native';

import IconAdd from 'binary-ui-icons/binary/Add';
import IconArrowDown from 'binary-ui-icons/binary/ArrowDown';
import ActionIcon from 'binary-ui-components/mobile/ActionIcon';

storiesOf('binary-ui-components', module)
  .add('ActionIcon', () => (
    <View>
      <ActionIcon title="Icon" onClick={action()} renderIcon={() => (<IconAdd />)} />
      <ActionIcon color="red" title="Icon" onClick={action()} renderIcon={() => (<IconArrowDown />)} />
      <ActionIcon isDisabled title="Icon" onClick={action()} renderIcon={() => (<IconArrowDown />)} />
    </View>
  ));
