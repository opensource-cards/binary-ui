import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import IconCancel from 'binary-ui-icons/binary/Cancel';
import IconDone from 'binary-ui-icons/binary/Done';
import NavBar from 'binary-ui-navbar';

setAddon(infoAddon);

storiesOf('binary-ui-navbar', module)
  .add('NavBar', withInfo('NavBar component')(() => (
    <div>
      <NavBar
        headerButtonLeft={{
          renderIcon: props => <IconCancel {...props} />,
          onClick: action()
        }}
        headerButtonRight={{
          renderIcon: props => <IconDone {...props} />,
          onClick: action()
        }}
        headerStyle={{
          backgroundColor: "#eeeae5"
        }}
        headerTitle={{
          children: "Stack with active buttons"
        }}
      />
      <NavBar
        headerButtonLeft={{
          isDisabled: true,
          renderIcon: props => <IconCancel {...props} />,
          onClick: action()
        }}
        headerButtonRight={{
          isDisabled: true,
          renderIcon: props => <IconDone {...props} />,
          onClick: action()
        }}
        headerStyle={{
          backgroundColor: "#eeeae5"
        }}
        headerTitle={{
          children: "Stack with disabled buttons"
        }}
      />
    </div>
  )));
