import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import NotificationIcon from 'binary-ui-components/mobile/NotificationIcon';

setAddon(infoAddon);

storiesOf('binary-ui-components/mobile', module)
  .add('NotificationIcon', withInfo('A NotificationIcon Component')(() => (
    <div>
      <NotificationIcon />
    </div>
  )));
