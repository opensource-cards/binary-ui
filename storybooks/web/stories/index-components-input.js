import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import IconMore from 'binary-ui-icons/binary/More';
import Input, { INPUT_FIELD_TYPES } from 'binary-ui-components/mobile/Input';

setAddon(infoAddon);

storiesOf('binary-ui-components', module)
  .add('Input', withInfo('An Input Component')(() => (
    <div>
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
    </div>
  )));
