import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import Spinner from 'binary-ui-components/mobile/Spinner';

setAddon(infoAddon);

storiesOf('binary-ui-components', module)
  .add('Spinner', withInfo('Spinner component')(() => (
    <Spinner/>
  )));
