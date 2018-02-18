import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';

import TimePicker from 'binary-ui-time-picker';

setAddon(infoAddon);

storiesOf('binary-ui-time-picker', module)
  .add('TimePicker', withInfo('TimePicker component')(() => (
    <div>
      <TimePicker
        hour={22}
        minute={59}
        onChange={action}
      />
    </div>
  )));
