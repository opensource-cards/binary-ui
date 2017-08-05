import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import IconMore from 'binary-ui-icons/binary/More';
import Textline from 'binary-ui-components/mobile/Textline';

setAddon(infoAddon);

storiesOf('binary-ui-components', module)
  .add('Textline', withInfo('A Textline Component')(() => (
    <div>
      <Textline
        isEdit
        renderIcon={() => (<IconMore />)}
        onMoreClick={action()}
      >
        Textline Editable
      </Textline>
      <Textline
        isDisabled
        isEdit
        renderIcon={() => (<IconMore />)}
        onMoreClick={action()}
      >
        Textline Editable Disabled
      </Textline>
      <Textline isBold >
        Textline Bold
      </Textline>
      <Textline isBold isDisabled >
        Textline Bold Disabled
      </Textline>
      <Textline
        isEdit
        renderIcon={() => (<IconMore />)}
        onMoreClick={action()}
      >
        Textline Editable and <a href="https://try.cards" style={{ color: 'blue' }} >Cards</a> together
      </Textline>
      <Textline
        isBold
        isEdit
        renderIcon={() => (<IconMore />)}
        onMoreClick={action()}
      >
        Textline Editable Bold and <a href="https://try.cards" style={{ color: 'blue' }} >Cards</a> together
      </Textline>
      <Textline
        isDisabled
        isEdit
        renderIcon={() => (<IconMore />)}
        onMoreClick={action()}
      >
        Textline Editable Disabled and <a href="https://try.cards" style={{ color: 'blue' }} >Cards</a> together
      </Textline>
    </div>
  )));
