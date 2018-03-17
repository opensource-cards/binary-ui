import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { View } from 'react-native';

import Add from 'binary-ui-icons/binary/Add';
import ArrowDown from 'binary-ui-icons/binary/ArrowDown';
import IconMore from 'binary-ui-icons/binary/More';
import Input, { INPUT_FIELD_TYPES } from 'binary-ui-components/mobile/Input';

import Button from 'binary-ui-components/mobile/Button';
import Group from 'binary-ui-components/mobile/Group';
import Label from 'binary-ui-components/mobile/Label';

storiesOf('binary-ui-components/mobile', module)
  .add('Group', () => (
    <View>
      <Group
        renderLeft={() => (
          <Label isBold>
            Left text
          </Label>
        )}
        renderRight={() => (
          <Input
            placeholder="Input"
            type={INPUT_FIELD_TYPES.TEL}
            value=""
            renderIcon={(props) => (<IconMore {...props} />)}
            onChange={action()}
            onIconPress={action()}
          />
        )}
      />
      <Group
        renderLeft={() => (
          <Label isBold>
            Left text
          </Label>
        )}
        renderRight={() => (
          <Input
            placeholder="Input"
            type={INPUT_FIELD_TYPES.TEL}
            value="Lorem ipsum dolor sir amet"
            renderIcon={(props) => (<IconMore {...props} />)}
            onChange={action()}
            onIconPress={action()}
          />
        )}
      />
      <Group
        renderLeft={() => (null)}
        renderRight={() => (null)}
      />
      <Group
        renderLeft={() => (<Label isBold >Label</Label>)}
        renderRight={() => (<Label isDisabled >+8227073791</Label>)}
      />
      <Group
        renderLeft={() => (<Label isBold >Label</Label>)}
        renderRight={() => (<Button label="Button" isEdit renderIcon={(props) => (<ArrowDown {...props} />)} onPress={action()} />)}
      />
      <Button label="Button" isEdit renderIcon={(props) => (<ArrowDown {...props} />)} onPress={action()} />
    </View>
  ));
