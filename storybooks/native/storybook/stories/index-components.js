import React from 'react';
import { Picker, TouchableOpacity, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Add from 'binary-ui-icons/binary/Add';
import IconMore from 'binary-ui-icons/binary/More';
import Input, { INPUT_FIELD_TYPES } from 'binary-ui-components/mobile/Input';
import Group from 'binary-ui-components/mobile/Group';
import Select from 'binary-ui-components/mobile/Select';
import Textline from 'binary-ui-components/mobile/Textline';

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
      value: '000',
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
    return null;
  }
}

storiesOf('binary-ui-components', module)
  .add('Icon', () => (
    <TouchableOpacity>
      <Add color="#000000" size={50} onPress={action('clicked')} />
    </TouchableOpacity>
  ))
  .add('Group2', () => (
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