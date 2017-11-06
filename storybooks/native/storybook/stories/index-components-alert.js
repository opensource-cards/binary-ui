import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';
import { View } from 'react-native';

import IconArrowDown from 'binary-ui-icons/binary/ArrowDown';
import Alert, { ALERT_TYPES } from 'binary-ui-components/mobile/Alert';

storiesOf('binary-ui-components/mobile', module)
  .add('Alert', () => (
    <View>
      <Alert text="Alert type INFO" type={ALERT_TYPES.INFO} />
      <Alert text="Alert type CONFIRM" type={ALERT_TYPES.CONFIRM} />
      <Alert text="Alert type PRIORITY" type={ALERT_TYPES.PRIORITY} />
      <Alert text="Alert type CRITICAL" type={ALERT_TYPES.CRITICAL} />
    </View>
  ));
