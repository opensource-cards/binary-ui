import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import IconCancel from 'binary-ui-icons/binary/Cancel';
import IconDrawer from 'binary-ui-icons/binary/Drawer';
import IconDone from 'binary-ui-icons/binary/Done';
import IconSearch from 'binary-ui-icons/binary/Search';
import NavBar from 'binary-ui-navbar';
import NavBarTitleAction from 'binary-ui-navbar/components/NavBarTitleAction';
import NavBarTitleText from 'binary-ui-navbar/components/NavBarTitleText';
import NavBarIconNotification from 'binary-ui-navbar/components/NavBarIconNotification';

setAddon(infoAddon);

storiesOf('binary-ui-navbar', module)
  .add('NavBar', withInfo('NavBar component')(() => (
    <div>
      <NavBar
        headerButtonLeft={{
          renderIcon: props => (
            <IconCancel {...props} />
          ),
          onClick: action()
        }}
        headerButtonRight={{
          renderIcon: props => <IconDone {...props} />,
          onClick: action()
        }}
        headerStyle={{
          backgroundColor: "#eeeae5"
        }}
      >
        <NavBarTitleAction>Stack with active buttons</NavBarTitleAction>
      </NavBar>
      <NavBar
        headerButtonLeft={{
          renderIcon: props => (
            <NavBarIconNotification>
              <IconDrawer {...props} />
            </NavBarIconNotification>
          ),
          onClick: action()
        }}
        headerButtonRight={{
          renderIcon: props => <IconDone {...props} />,
          onClick: action()
        }}

        headerButtonRightSecondary={{
          renderIcon: props => <IconSearch {...props} />,
          onClick: action()
        }}
        headerStyle={{
          backgroundColor: "#eeeae5"
        }}
      >
        <NavBarTitleAction>Stack with secondary button</NavBarTitleAction>
      </NavBar>
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
      >
        <NavBarTitleText>Stack with disabled buttons</NavBarTitleText>
      </NavBar>
      <NavBar
        headerButtonRight={{
          renderIcon: props => <IconDone {...props} />,
          onClick: action()
        }}
        headerStyle={{
          backgroundColor: "#eeeae5"
        }}
      >
        <NavBarTitleText>Stack without left button</NavBarTitleText>
      </NavBar>
      <NavBar
        headerButtonRight={{
          renderIcon: props => <IconDone {...props} />,
          onClick: action()
        }}
        headerStyle={{
          backgroundColor: "#eeeae5"
        }}
      >
        <NavBarTitleText>
          A really long title that doesn't fit into pretty much any possible screen width
        </NavBarTitleText>
      </NavBar>
      <NavBar
        headerButtonRight={{
          renderIcon: props => <IconDone {...props} />,
          onClick: action()
        }}
        headerStyle={{
          backgroundColor: "#eeeae5"
        }}
      >
        <div
          style={{
            alignItems: 'center',
            backgroundColor: "#FFFFFF",
            borderRadius: 7,
            display: 'flex',
            flexDirection: 'row',
            height: 30,
            padding: '0 0 0 10px',
            width: "100%",
          }}
        >
          <IconSearch size={20} color="gray" />
          <input
            style={{
              appearance: 'none',
              border: 0,
              borderColor: 'transparent',
              borderRadius: 'inherit',
              borderStyle: 'hidden',
              boxSizing: 'border-box',
              boxShadow: 'none',
              fontFamily: 'Fira Sans',
              fontSize: 16,
              fontWeight: '300',
              height: 30,
              padding: '10px 5px',
              margin: 0,
              outlineStyle: 'none',
              WebkitAppearance: 'textfield',
              width: '100%',
            }}
            type="search"
            placeholder="Search"
          />
        </div>
      </NavBar>
    </div>
  )));
