import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';
import { View, TextInput } from 'react-native';
import { FONT_FAMILY_MAIN_300 } from 'binary-ui-styles';

import IconCancel from 'binary-ui-icons/binary/Cancel';
import IconDrawer from 'binary-ui-icons/binary/Drawer';
import IconDone from 'binary-ui-icons/binary/Done';
import IconSearch from 'binary-ui-icons/binary/Search';
import NavBar from 'binary-ui-navbar';
import NavBarTitleAction from 'binary-ui-navbar/components/NavBarTitleAction';
import NavBarTitleText from 'binary-ui-navbar/components/NavBarTitleText';
import NavBarIconNotification from 'binary-ui-navbar/components/NavBarIconNotification';

storiesOf('binary-ui-navbar', module)
  .add('NavBar', () => (
    <View>
      <NavBar
        headerButtonLeft={{
          renderIcon: props => <IconCancel {...props} />,
          onPress: action()
        }}
        headerButtonRight={{
          renderIcon: props => <IconDone {...props} />,
          onPress: action()
        }}
        headerStyle={{
          backgroundColor: "#eeeae5"
        }}
      >
        <NavBarTitleAction>NavBar with active buttons</NavBarTitleAction>
      </NavBar>
      <NavBar
        headerButtonLeft={{
          renderIcon: props => (
            <NavBarIconNotification>
              <IconDrawer {...props} />
            </NavBarIconNotification>
          ),
          onPress: action()
        }}
        headerButtonRight={{
          renderIcon: props => <IconDone {...props} />,
          onPress: action()
        }}
        headerButtonRightSecondary={{
          renderIcon: props => <IconSearch {...props} />,
          onClick: action()
        }}
        headerStyle={{
          backgroundColor: "#eeeae5"
        }}
      >
        <NavBarTitleAction>NavBar with secondary button</NavBarTitleAction>
      </NavBar>
      <NavBar
        headerButtonLeft={{
          isDisabled: true,
          renderIcon: props => <IconCancel {...props} />,
          onPress: action()
        }}
        headerButtonRight={{
          isDisabled: true,
          renderIcon: props => <IconDone {...props} />,
          onPress: action()
        }}
        headerStyle={{
          backgroundColor: "#eeeae5"
        }}
      >
        <NavBarTitleAction>NavBar with disabled buttons</NavBarTitleAction>
      </NavBar>
      <NavBar
        headerButtonRight={{
          isDisabled: true,
          renderIcon: props => <IconDone {...props} />,
          onPress: action()
        }}
        headerStyle={{
          backgroundColor: "#eeeae5"
        }}
      >
        <NavBarTitleAction>NavBar without left button</NavBarTitleAction>
      </NavBar>
      <NavBar
        headerButtonRight={{
          isDisabled: true,
          renderIcon: props => <IconDone {...props} />,
          onPress: action()
        }}
        headerStyle={{
          backgroundColor: "#eeeae5"
        }}
      >
        <NavBarTitleAction>A really long title that doesn't fit into pretty much any possible screen width</NavBarTitleAction>
      </NavBar>
      <NavBar
        headerButtonRight={{
          renderIcon: props => <IconDone {...props} />,
          onPress: action()
        }}
        headerStyle={{
          backgroundColor: "#eeeae5"
        }}
      >
        <View
          style={{
            alignItems: 'center',
            backgroundColor: "#FFFFFF",
            borderRadius: 7,
            flex: 1,
            flexDirection: 'row',
            height: 30,
          }}
        >
          <IconSearch
            size={20}
            color="#A9A9A9"
            margin={5}
          />
          <TextInput
            autoFocus
            clearButtonMode="always"
            returnKeyType="search"
            style={{
              flex: 1,
              fontFamily: FONT_FAMILY_MAIN_300,
            }}
              placeholder="Search"
          />
        </View>
      </NavBar>
    </View>
  ));
