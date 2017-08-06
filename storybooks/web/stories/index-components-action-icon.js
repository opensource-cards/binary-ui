import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import IconAdd from 'binary-ui-icons/binary/Add';
import IconArrowDown from 'binary-ui-icons/binary/ArrowDown';
import ActionIcon from 'binary-ui-components/mobile/ActionIcon';

setAddon(infoAddon);

storiesOf('binary-ui-components', module)
  .add('ActionIcon', withInfo('An ActionIcon Component')(() => (
    <div>
      <ActionIcon title="Icon" onClick={action()} renderIcon={() => (<IconAdd />)} />
      <ActionIcon color="red" title="Icon" onClick={action()} renderIcon={() => (<IconArrowDown />)} />
      <ActionIcon isDisabled title="Icon" onClick={action()} renderIcon={() => (<IconArrowDown />)} />
    </div>
  )));
