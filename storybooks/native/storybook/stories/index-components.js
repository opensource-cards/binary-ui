import React from 'react';
import { TextInput, Picker, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import More from 'binary-ui-icons/binary/More';

import Group from 'binary-ui-components/mobile/Group';
// import Input from 'binary-ui-components/mobile/Input';
import Select from 'binary-ui-components/mobile/Select';
import Text from 'binary-ui-components/mobile/Text';

storiesOf('binary-ui-components', module)
  .add('Group', () => (
    <Group
      renderLeft={() => (
        <Text>
          Left
        </Text>
      )}
      renderRight={() => (
        <Text>
          Right
        </Text>
      )}
    />
  ))
  .add('Input', () => (
    <TextInput />
))
  .add('Select', () => (
    <Picker
      selectedValue="java"
      onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
))
.add('Text', () => (
    <View>
      <Text
        isEdit
        renderIcon={() => (<More />)}
        onMoreClick={action()}
      >
        Look at text
      </Text>
      <Text
        isDisabled
        isEdit
        renderIcon={() => (<More />)}
        onMoreClick={action()}
      >
        Look at text
      </Text>
      <Text isBold >
        Look at bold text
      </Text>
      <Text isBold isDisabled >
        Look at bold text
      </Text>
    </View>
  ));