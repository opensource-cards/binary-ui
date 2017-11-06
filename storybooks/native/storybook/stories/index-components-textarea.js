import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';
import { View } from 'react-native';

import IconMore from 'binary-ui-icons/binary/More';
import Textarea from 'binary-ui-components/mobile/Textarea';

storiesOf('binary-ui-components/mobile', module)
  .add('Textarea', () => (
    <View>
      <Textarea
        placeholder="Textarea Placeholder"
        value=""
        renderIcon={(props) => (<IconMore {...props} />)}
        onChange={action()}
        onIconPress={action()}
      />
      <Textarea
        isValid={false}
        placeholder="Textarea Placeholder Invalid"
        value=""
        renderIcon={(props) => (<IconMore {...props} />)}
        onChange={action()}
        onIconPress={action()}
      />
      <Textarea
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        renderIcon={(props) => (<IconMore {...props} />)}
        onChange={action()}
        onIconPress={action()}
      />
    </View>
  ));
