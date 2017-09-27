import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';
import { View, Text } from 'react-native';

import Tooltip from 'binary-ui-components/mobile/Tooltip';
import ActionIcon from 'binary-ui-components/mobile/ActionIcon';
import IconAdd from 'binary-ui-icons/binary/Add';
import IconAddCard from 'binary-ui-icons/binary/AddCard';

class TooltipDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefLeft: false,
      isRefRight: false,
      isVisibleLeft: false,
      isVisibleRight: false,
    };
    this.onSetLeft = this.onSetLeft.bind(this);
    this.onSetRight = this.onSetRight.bind(this);
    this.onChangeLeft = this.onChangeLeft.bind(this);
    this.onChangeRight = this.onChangeRight.bind(this);
  }

  onSetLeft(ref) {
    this.buttonLeft = ref;
    this.setState((prevState) => ({
      isRefLeft: ref ? true : false,
    }));
  }

  onSetRight(ref) {
    this.buttonRight = ref;
    this.setState((prevState) => ({
      isRefRight: ref ? true : false,
    }));
  }

  onChangeLeft() {
    this.setState((prevState) => ({
      isVisibleLeft: !prevState.isVisibleLeft,
    }));
  }

  onChangeRight() {
    this.setState((prevState) => ({
      isVisibleRight: !prevState.isVisibleRight,
    }));
  }

  render() {
    const { isVisibleLeft, isVisibleRight } = this.state;
    return (
      <View style={{ width: '100%', marginTop: 50 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
          <View
            ref={this.onSetLeft}
            style={{height: 50, margin: 50, width: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: 'wheat' }}
          >
            <ActionIcon title="Icon" onPress={this.onChangeLeft} renderIcon={() => (<IconAdd />)} size={20} />
          </View>
          <View
            ref={this.onSetRight}
            style={{ height: 50, margin: 50, width: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue' }}
          >
            <ActionIcon title="Icon" onPress={this.onChangeRight} renderIcon={() => (<IconAddCard />)} size={20} />
          </View>
        </View>
        <Text>Container for tooltips</Text>
        <Tooltip
          isVisible={isVisibleLeft}
          label="Left tooltip"
          placement="bottom-right"
          target={this.buttonLeft}
          style={{ transform: [{ translateX: 75 }, { translateY: 100 }] }}
          onPress={this.onChangeLeft}
        />
        <Tooltip
          isVisible={isVisibleRight}
          label="Right tooltip"
          placement="bottom-left"
          target={this.buttonRight}
          style={{ transform: [{ translateX: -75 }, { translateY: 100 }] }}
          onPress={this.onChangeRight}
        />
      </View>
    );
  }
}

storiesOf('binary-ui-components', module)
  .add('Tooltip', () => (
    <TooltipDemo />
  ));
