import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';
import { View } from 'react-native';

import IconMore from 'binary-ui-icons/binary/More';
import Input, { INPUT_FIELD_TYPES } from 'binary-ui-components/mobile/Input';

storiesOf('binary-ui-components', module)
  .add('Input', () => (
    <View>
      <Input
        placeholder="Text Placeholder"
        type={INPUT_FIELD_TYPES.TEXT}
        value=""
        onTextChange={action()}
        onMoreClick={action()}
      />
      <Input
        placeholder="Text"
        type={INPUT_FIELD_TYPES.TEXT}
        value="Text"
        onTextChange={action()}
        onMoreClick={action()}
      />
      <Input
        isBold
        placeholder="Bold text"
        type={INPUT_FIELD_TYPES.TEXT}
        value="Bold text"
        onTextChange={action()}
        onMoreClick={action()}
      />
      <Input
        type={INPUT_FIELD_TYPES.NUMBER}
        value="1234567890"
        renderIcon={() => (<IconMore />)}
        onTextChange={action()}
        onMoreClick={action()}
      />
      <Input
        type={INPUT_FIELD_TYPES.TEL}
        value="010000000"
        renderIcon={() => (<IconMore />)}
        onTextChange={action()}
        onMoreClick={action()}
      />
      <Input
        type={INPUT_FIELD_TYPES.TEL}
        value="010000000"
        mask="(##) ###-##-##"
        renderIcon={() => (<IconMore />)}
        onTextChange={action()}
        onMoreClick={action()}
      />
      <Input
        type={INPUT_FIELD_TYPES.PASSWORD}
        value="Password"
        renderIcon={() => (<IconMore />)}
        onTextChange={action()}
        onMoreClick={action()}
      />
      <Input
        type={INPUT_FIELD_TYPES.EMAIL}
        value="job@try.cards"
        renderIcon={() => (<IconMore />)}
        onTextChange={action()}
        onMoreClick={action()}          
      />
      <Input
        isValid={false}
        placeholder="Invalid Email"
        type={INPUT_FIELD_TYPES.EMAIL}
        value=""
        renderIcon={() => (<IconMore />)}
        onTextChange={action()}
        onMoreClick={action()}          
      />
    </View>
  ));
