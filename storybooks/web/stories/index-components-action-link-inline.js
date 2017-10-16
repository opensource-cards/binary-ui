import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import IconAdd from 'binary-ui-icons/binary/Add';
import ActionLinkInline from 'binary-ui-components/web/ActionLinkInline';

setAddon(infoAddon);

storiesOf('binary-ui-components', module)
  .add('ActionLinkInline', withInfo('An ActionLinkInline Component')(() => (
    <div>
      <ActionLinkInline
        draggable={false}
        href="#"
        title="Title"
        renderIconRight={rest => <IconAdd {...rest} />}
      >
        Example
      </ActionLinkInline>
    </div>
  )));
