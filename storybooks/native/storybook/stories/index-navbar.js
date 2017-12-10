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
import NavBarIconNotification from 'binary-ui-navbar/components/NavBarIconNotification';
import NavBarTitleAction from 'binary-ui-navbar/components/NavBarTitleAction';
import NavBarTitleSearch from 'binary-ui-navbar/components/NavBarTitleSearch';
import NavBarTitleText from 'binary-ui-navbar/components/NavBarTitleText';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      value: '',
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  setIsSearch(isSearch) {
    this.setState(() => ({
      isSearch,
    }));
  }

  onValueChange(value) {
    this.setState(() => ({
      value,
    }));
  }

  render() {
    const { isSearch, value } = this.state;
    return (
      <NavBar
        headerButtonLeft={isSearch ? undefined : {
          renderIcon: props => (
            <NavBarIconNotification>
              <IconDrawer {...props} />
            </NavBarIconNotification>
          ),
          onPress: action()
        }}
        headerButtonRight={isSearch ? {
          renderIcon: props => <IconDone {...props} />,
          onPress: () => {
            this.setIsSearch(false);
          }
        } : {
          renderIcon: props => <IconDone {...props} />,
        }}
        headerButtonRightSecondary={isSearch ? undefined : {
          renderIcon: props => <IconSearch {...props} />,
          onPress: () => {
            this.setIsSearch(true);
          }
        }}
        style={{
          backgroundColor: "#eeeae5"
        }}
      >
        {isSearch ? (
          <NavBarTitleSearch value={value} onChange={this.onValueChange} />
        ) : (
          <NavBarTitleText>
            Search Demo
          </NavBarTitleText>
        )}
      </NavBar>
    );
  }
}

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
        style={{
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
        style={{
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
        style={{
          backgroundColor: "#eeeae5"
        }}
      >
        <NavBarTitleText>NavBar with disabled buttons</NavBarTitleText>
      </NavBar>
      <NavBar
        headerButtonRight={{
          isDisabled: true,
          renderIcon: props => <IconDone {...props} />,
          onPress: action()
        }}
        style={{
          backgroundColor: "#eeeae5"
        }}
      >
        <NavBarTitleText>NavBar without left button</NavBarTitleText>
      </NavBar>
      <NavBar
        headerButtonRight={{
          isDisabled: true,
          renderIcon: props => <IconDone {...props} />,
          onPress: action()
        }}
        style={{
          backgroundColor: "#eeeae5"
        }}
      >
        <NavBarTitleText>A really really long title that doesn't fit into pretty much any possible screen width</NavBarTitleText>
      </NavBar>
      <NavBar
        headerButtonLeft={{
          isDisabled: true,
          renderIcon: props => <IconDone {...props} />,
          onPress: action()
        }}
        style={{
          backgroundColor: "#eeeae5"
        }}
      >
        <NavBarTitleText>A really really long title that doesn't fit into pretty much any possible screen width</NavBarTitleText>
      </NavBar>
      <NavBar
        headerButtonRight={{
          renderIcon: props => <IconDone {...props} />,
          onPress: action()
        }}
        style={{
          backgroundColor: "#eeeae5"
        }}
      >
        <NavBarTitleSearch value="" />
      </NavBar>
      <Demo />
    </View>
  ));
