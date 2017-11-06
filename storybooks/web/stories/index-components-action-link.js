import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import IconAdd from 'binary-ui-icons/binary/Add';
import ActionLink from 'binary-ui-components/web/ActionLink';

setAddon(infoAddon);

storiesOf('binary-ui-components/web', module)
  .add('ActionLink', withInfo('An ActionLink Component')(() => (
    <div>
      <ActionLink
        draggable={false}
        href="#"
        title="Title"
        renderIconRight={rest => <IconAdd {...rest} />}
      >
        Example
      </ActionLink>
    </div>
  )));
