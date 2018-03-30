import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import IconAdd from 'binary-ui-icons/binary/Add';
import IconArrowDown from 'binary-ui-icons/binary/ArrowDown';
import ActionIcon from 'binary-ui-components/mobile/ActionIcon';
import { THEME_MAIN } from 'binary-ui-styles';

setAddon(infoAddon);

storiesOf('binary-ui-components/mobile', module)
  .add('ActionIcon', withInfo('An ActionIcon Component')(() => (
    <ThemeProvider theme={THEME_MAIN} >
      <div>
        <ActionIcon title="Icon" onClick={action()} renderIcon={(props) => (<IconAdd {...props} />)} />
        <ActionIcon color="red" title="Icon" onClick={action()} renderIcon={(props) => (<IconArrowDown {...props} />)} />
        <ActionIcon isDisabled title="Icon" onClick={action()} renderIcon={(props) => (<IconArrowDown {...props} />)} />
      </div>
    </ThemeProvider>
  )));
