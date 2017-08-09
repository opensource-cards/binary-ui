import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import Switch from 'binary-ui-components/mobile/Switch';

setAddon(infoAddon);

storiesOf('binary-ui-components', module)
  .add('Switch', withInfo('Switch component')(() => (
    <div>
      <Switch
        isChecked
        label="Switch label"
        onChange={action()}
      />
      <Switch
        isChecked={false}
        onChange={action()}
      />
    </div>
  )));
