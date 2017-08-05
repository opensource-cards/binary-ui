import React from 'react';
import { Picker, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Add from 'binary-ui-icons/binary/Add';
import ArrowDown from 'binary-ui-icons/binary/ArrowDown';
import IconMore from 'binary-ui-icons/binary/More';
import Input, { INPUT_FIELD_TYPES } from 'binary-ui-components/mobile/Input';

import Group from 'binary-ui-components/mobile/Group';
import Select from 'binary-ui-components/mobile/Select';
import Textline from 'binary-ui-components/mobile/Textline';
import Textarea from 'binary-ui-components/mobile/Textarea';

class TextareaDemo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.setState(() => ({
      value,
    }));
  }
  render() {
    const { value } = this.state;
    return (
      <Textarea
        placeholder="Type here"
        value={value}
        renderIcon={() => (<IconMore />)}
        onTextChange={this.onChange}
        onMoreClick={action()}
      />
    );
  }
}

storiesOf('binary-ui-components', module)
  .add('Group', () => (
    <View>
      <Group
        renderLeft={() => (
          <Textline isBold>
            Left text
          </Textline>
        )}
        renderRight={() => (
          <Input
            placeholder="Input"
            type={INPUT_FIELD_TYPES.TEL}
            value=""
            renderIcon={() => (<IconMore />)}
            onTextChange={action()}
            onMoreClick={action()}
          />
        )}
      />
      <Group
        renderLeft={() => (null)}
        renderRight={() => (null)}
      />
      <Group
        renderLeft={() => (<Textline isBold >Label</Textline>)}
        renderRight={() => (<Textline isEdit >+8227073791</Textline>)}
      />
    </View>
  ))
  .add('Select', () => (
    <Picker selectedValue="java" >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  ))
  .add('Textarea', () => (
    <View>
      <TextareaDemo1 />
      <Textarea
        placeholder="Empty text area placeholder"
        value=""
        renderIcon={() => (<IconMore />)}
        onTextChange={this.onChange}
        onMoreClick={action()}
      />
    </View>
  ));
