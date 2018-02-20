import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import Label from 'binary-ui-components/mobile/Label';

setAddon(infoAddon);

storiesOf('binary-ui-components/mobile', module)
  .add('Label', withInfo('A Label Component')(() => (
    <div>
      <Label>
        Label
      </Label>
      <Label isDisabled >
        Label disabled
      </Label>
      <Label isBold>
        Label bold
      </Label>
      <Label isBold isDisabled >
        Label bold disabled
      </Label>
    </div>
  )));
