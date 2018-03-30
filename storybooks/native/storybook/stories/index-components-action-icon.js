import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import IconAdd from 'binary-ui-icons/binary/Add';
import IconArrowDown from 'binary-ui-icons/binary/ArrowDown';
import ActionIcon from 'binary-ui-components/mobile/ActionIcon';
import { THEME_MAIN } from 'binary-ui-styles';

storiesOf('binary-ui-components/mobile', module)
  .add('ActionIcon', () => (
    <ThemeProvider theme={THEME_MAIN} >
      <View>
        <ActionIcon title="Icon" onClick={action()} renderIcon={(props) => (<IconAdd {...props} />)} />
        <ActionIcon color="red" title="Icon" onClick={action()} renderIcon={(props) => (<IconArrowDown {...props} />)} />
        <ActionIcon isDisabled title="Icon" onClick={action()} renderIcon={(props) => (<IconArrowDown {...props} />)} />
      </View>
    </ThemeProvider>
  ));
