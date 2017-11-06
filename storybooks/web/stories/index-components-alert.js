import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import IconArrowDown from 'binary-ui-icons/binary/ArrowDown';
import Alert, { ALERT_TYPES } from 'binary-ui-components/mobile/Alert';

setAddon(infoAddon);

storiesOf('binary-ui-components/mobile', module)
  .add('Alert', withInfo('Alert component')(() => (
    <div>
      <Alert text="Alert type INFO" type={ALERT_TYPES.INFO} />
      <Alert text="Alert type CONFIRM" type={ALERT_TYPES.CONFIRM} />
      <Alert text="Alert type PRIORITY" type={ALERT_TYPES.PRIORITY} />
      <Alert text="Alert type CRITICAL" type={ALERT_TYPES.CRITICAL} />
    </div>
  )));
