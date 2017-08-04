import React from 'react';
import { Picker, TouchableOpacity, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Add from 'binary-ui-icons/binary/Add';
import ArrowDown from 'binary-ui-icons/binary/ArrowDown';
import IconMore from 'binary-ui-icons/binary/More';
import Input, { INPUT_FIELD_TYPES } from 'binary-ui-components/mobile/Input';

import Button from 'binary-ui-components/mobile/Button';
import Group from 'binary-ui-components/mobile/Group';
import Select from 'binary-ui-components/mobile/Select';
import Textline from 'binary-ui-components/mobile/Textline';
import Textarea from 'binary-ui-components/mobile/Textarea';

class InputWithMask extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
  }
  handleTextChange(value) {
    this.setState({
      value,
    })
  }
  render() {
    const { value } = this.state;
    return (
      <Input
          placeholder="INPUT_FIELD_TYPES.TEL with mask"
          type={INPUT_FIELD_TYPES.TEL}
          value={value}
          mask="(##) ###-##-##"
          renderIcon={() => (<IconMore />)}
          onTextChange={value => this.handleTextChange(value)}
          onMoreClick={action()}
        />
    )
  }
}

class TextareaDemo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.setState({
      value,
    });
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
  .add('Icon', () => (
    <TouchableOpacity>
      <Add color="#000000" size={50} onPress={action('clicked')} />
    </TouchableOpacity>
  ))
  .add('Button', () => (
    <View>
      <Button label={"A standard button".toUpperCase()} isBold onClick={action()} />
      <Button label="A non editable button" isEdit={false} onClick={action()} />
      <Button label="A disabled button" isBold isDisabled onClick={action()} />
      <Button label="A standard with button icon" isBold renderIcon={() => (<ArrowDown />)} onClick={action()} />
      <Button color="#0087BD" label="A colorful with icon button" isBold renderIcon={() => (<ArrowDown />)} onClick={action()} />
      <Button color="#0087BD" label="A colorful with icon disabled button" isBold isDisabled renderIcon={() => (<ArrowDown />)} onClick={action()} />
    </View>
  ))
  .add('Input', () => (
    <View>
      <Input
        isRequired
        placeholder="INPUT_FIELD_TYPES.TEXT"
        type={INPUT_FIELD_TYPES.TEXT}
        value=""
        onTextChange={action()}
        onMoreClick={action()}
      />
      <Input
        isRequired
        placeholder="INPUT_FIELD_TYPES.NUMBER"
        type={INPUT_FIELD_TYPES.NUMBER}
        value=""
        renderIcon={() => (<IconMore />)}
        onTextChange={action()}
        onMoreClick={action()}
      />
      <Input
        placeholder="INPUT_FIELD_TYPES.TEL"
        type={INPUT_FIELD_TYPES.TEL}
        value=""
        renderIcon={() => (<IconMore />)}
        onTextChange={action()}
        onMoreClick={action()}
      />
      <InputWithMask />
      <Input
        placeholder="INPUT_FIELD_TYPES.PASSWORD"
        type={INPUT_FIELD_TYPES.PASSWORD}
        value=""
        renderIcon={() => (<IconMore />)}
        onTextChange={action()}
        onMoreClick={action()}
      />
      <Input
        isValid={false}
        placeholder="Invalid"
        type={INPUT_FIELD_TYPES.EMAIL}
        value=""
        renderIcon={() => (<IconMore />)}
        onTextChange={action()}
        onMoreClick={action()}          
      />
    </View>
  ))
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
        renderRight={() => (<TextareaDemo1 />)}
      />
    </View>
  ))
  .add('Select', () => (
    <Picker
      selectedValue="java"
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