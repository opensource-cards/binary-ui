import React from 'react';
import { Picker, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import IconMore from 'binary-ui-icons/binary/More';
import Input from 'binary-ui-components/mobile/Input';
import Group from 'binary-ui-components/mobile/Group';
import Select from 'binary-ui-components/mobile/Select';
import Textline from 'binary-ui-components/mobile/Textline';

storiesOf('binary-ui-components', module)
  .add('Group', () => (
    <Group
      renderLeft={() => (
        <Textline isBold>
          Left text
        </Textline>
      )}
      renderRight={() => (
        <Textline>
          Right text
        </Textline>
      )}
    />
  ))
  .add('Input', () => (
    <View>
      <Input
        placeholder=""
        value="Input with more button"
        renderIcon={() => (<IconMore />)}
      />
      <Input
        placeholder="Input without button"
        value=""
      />
    </View>
  ))
  .add('Select', () => (
    <Picker
      selectedValue="java"
      onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
    >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  ))
  .add('Textline', () => (
    <View>
      <Textline
        isEdit
        renderIcon={() => (<IconMore />)}
        onMoreClick={action()}
      >
        Editable Textline
      </Textline>
      <Textline
        isDisabled
        isEdit
        renderIcon={() => (<IconMore />)}
        onMoreClick={action()}
      >
        Disabled editable Textline
      </Textline>
      <Textline isBold >
        Bold Textline
      </Textline>
      <Textline isBold isDisabled >
        Bold disabled Textline
      </Textline>
    </View>
  ));