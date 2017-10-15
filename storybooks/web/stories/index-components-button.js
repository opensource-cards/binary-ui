import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import IconArrowDown from 'binary-ui-icons/binary/ArrowDown';
import Button from 'binary-ui-components/mobile/Button';

setAddon(infoAddon);

storiesOf('binary-ui-components', module)
  .add('Button', withInfo('A Button Component')(() => (
    <div>
      <Button label="A standard button" isBold onClick={action()} />
      <Button label="A non editable button" isEdit={false} onClick={action()} />
      <Button label="A disabled button" isBold isDisabled onClick={action()} />
      <Button label="A standard with button icon" isBold renderIcon={(props) => (<IconArrowDown {...props} />)} onClick={action()} />
      <Button color="#0087BD" label="A colorful with icon button" isBold renderIcon={(props) => (<IconArrowDown {...props} />)} onClick={action()} />
      <Button color="#0087BD" label="A colorful with icon disabled button" isBold isDisabled renderIcon={(props) => (<IconArrowDown {...props} />)} onClick={action()} />
    </div>
  )));
