import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';

import DatePicker from 'binary-ui-date-picker';

setAddon(infoAddon);

storiesOf('binary-ui-date-picker', module)
  .add('DatePicker', withInfo('DatePicker component')(() => (
    <div>
      <DatePicker
        day={23}
        month={1}
        year={2018}
        onChange={action}
      />
    </div>
  )));
