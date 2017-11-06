import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import Spinner from 'binary-ui-components/mobile/Spinner';

setAddon(infoAddon);

storiesOf('binary-ui-components/mobile', module)
  .add('Spinner', withInfo('Spinner component')(() => (
    <div>
      <Spinner/>
      <Spinner size={50} />
      <Spinner size={100} />
    </div>
  )));
