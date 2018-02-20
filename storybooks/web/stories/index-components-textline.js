import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import IconMore from 'binary-ui-icons/binary/More';
import Textline from 'binary-ui-components/mobile/Textline';

setAddon(infoAddon);

storiesOf('binary-ui-components/mobile', module)
  .add('Textline', withInfo('A Textline Component')(() => (
    <div>
      <Textline>
        Textline without icon
      </Textline>
      <Textline>
        A really really long title that doesn't fit into pretty much any possible screen width
      </Textline>
      <Textline renderIcon={(props) => (<IconMore {...props} />)}>
        A really really long title that doesn't fit into pretty much any possible screen width with icon
      </Textline>
      <Textline
        renderIcon={(props) => (<IconMore {...props} />)}
        onIconPress={action()}
      >
        Textline with icon
      </Textline>
      <Textline isEdit>
        Textline with underline
      </Textline>
      <Textline isBold >
        Textline with bold text
      </Textline>
      <Textline isDisabled >
        Textline disabled
      </Textline>
    </div>
  )));
