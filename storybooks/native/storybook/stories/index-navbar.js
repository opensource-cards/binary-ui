import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';
import { View } from 'react-native';

import IconCancel from 'binary-ui-icons/binary/Cancel';
import IconDone from 'binary-ui-icons/binary/Done';
import NavBar from 'binary-ui-navbar';
import NavBarTitleAction from 'binary-ui-navbar/components/NavBarTitleAction';
import NavBarTitleText from 'binary-ui-navbar/components/NavBarTitleText';
import NavBarIconNotification from 'binary-ui-navbar/components/NavBarIconNotification';

storiesOf('binary-ui-navbar', module)
  .add('NavBar', () => (
    <View>
      <NavBar
        headerButtonLeft={{
          renderIcon: props => (
            <NavBarIconNotification>
              <IconCancel {...props} />
            </NavBarIconNotification>
          ),
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
        <NavBarTitleAction>Stack with active buttons</NavBarTitleAction>
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
        <NavBarTitleAction>Stack with disabled buttons</NavBarTitleAction>
      </NavBar>
    </View>
  ));
