import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';
import { Linking, Text, View } from 'react-native';

import IconMore from 'binary-ui-icons/binary/More';
import Textline from 'binary-ui-components/mobile/Textline';

storiesOf('binary-ui-components', module)
  .add('Textline', () => (
    <View>
      <Textline
        isEdit
        renderIcon={() => (<IconMore />)}
        onIconPress={action()}
      >
        Textline Editable
      </Textline>
      <Textline
        isDisabled
        isEdit
        renderIcon={() => (<IconMore />)}
        onIconPress={action()}
      >
        Textline Editable Disabled
      </Textline>
      <Textline isBold >
        Textline Bold
      </Textline>
      <Textline isBold isDisabled >
        Textline Bold Disabled
      </Textline>
      <Textline
        isEdit
        renderIcon={() => (<IconMore />)}
        onIconPress={action()}
      >
        Textline Editable and <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://try.cards')}>Cards</Text> together
      </Textline>
      <Textline
        isBold
        isEdit
        renderIcon={() => (<IconMore />)}
        onIconPress={action()}
      >
        Textline Editable Bold and <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://try.cards')}>Cards</Text> together
      </Textline>
      <Textline
        isDisabled
        isEdit
        renderIcon={() => (<IconMore />)}
        onIconPress={action()}
      >
        Textline Editable Disabled and <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://try.cards')}>Cards</Text> together
      </Textline>
    </View>
  ));
