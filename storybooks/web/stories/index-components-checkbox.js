import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import Checkbox from 'binary-ui-components/mobile/Checkbox';

setAddon(infoAddon);

storiesOf('binary-ui-components/mobile', module)
  .add('Checkbox', withInfo('A Checkbox Component')(() => (
    <div>
      <Checkbox isChecked onChange={action()} onClick={action()} />
      <Checkbox isChecked={false} onChange={action()} onClick={action()} />
    </div>
  )));
