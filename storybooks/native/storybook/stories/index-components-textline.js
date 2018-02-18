import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Linking, Text, View } from 'react-native';

import IconMore from 'binary-ui-icons/binary/More';
import Textline from 'binary-ui-components/mobile/Textline';

storiesOf('binary-ui-components/mobile', module)
  .add('Textline', () => (
    <View>
      <Textline>
        Textline without icon
      </Textline>
      <Textline
        renderIcon={(props) => (<IconMore {...props} />)}
        onIconPress={action()}
      >
        Textline with icon
      </Textline>
      <Textline isEdit>
        Textline with underline
      </Textline>
      <Textline isBold >
        Textline with bold text
      </Textline>
      <Textline isDisabled >
        Textline disabled
      </Textline>
    </View>
  ));
