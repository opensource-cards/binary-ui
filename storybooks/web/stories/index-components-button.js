import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf, action } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import IconArrowDown from 'binary-ui-icons/binary/ArrowDown';
import Button from 'binary-ui-components/mobile/Button';

setAddon(infoAddon);

storiesOf('binary-ui-components', module)
  .addWithInfo('Button', () => (
    <div>
      <Button label="A standard button" isBold onClick={action()} />
      <Button label="A non editable button" isEdit={false} onClick={action()} />
      <Button label="A disabled button" isBold isDisabled onClick={action()} />
      <Button label="A standard with button icon" isBold renderIcon={() => (<IconArrowDown />)} onClick={action()} />
      <Button color="#0087BD" label="A colorful with icon button" isBold renderIcon={() => (<IconArrowDown />)} onClick={action()} />
      <Button color="#0087BD" label="A colorful with icon disabled button" isBold isDisabled renderIcon={() => (<IconArrowDown />)} onClick={action()} />
    </div>
  ));
