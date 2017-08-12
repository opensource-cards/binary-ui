import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import React from 'react';
import { View, Text } from 'react-native';

import Tooltip from 'binary-ui-components/mobile/Tooltip';

/*
class TooltipDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleLeft: false,
      isVisibleRight: false,
    };
    this.onChangeLeft = this.onChangeLeft.bind(this);
    this.onChangeRight = this.onChangeRight.bind(this);
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
      <div style={{ padding: 50 }} >
        <div style={{ float: 'left', height: 20, width: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'wheat', position: 'relative' }}>
          <ActionIcon id="IconTooltipLeft" title="Icon" onClick={this.onChangeLeft} renderIcon={() => (<Add />)} size={20} />
        </div>
        <div style={{ float: 'right', height: 20, width: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'wheat', position: 'relative' }}>
          <ActionIcon id="IconTooltipRight" title="Icon" onClick={this.onChangeRight} renderIcon={() => (<Add />)} size={20} />
        </div>
        <div style={{ clear: 'both' }} />        
        <div style={{ position: 'relative' }} >
          <div style={{ position: 'absolute', top: 50, left: 50, backgroundColor: 'lightgray' }} >
            <div>Container for Tooltips</div>
            <Tooltip
              isVisible={isVisibleLeft}
              label="Left tooltip"
              placement="bottom-right"
              target="IconTooltipLeft"
            />
            <Tooltip
              isVisible={isVisibleRight}
              label="Right tooltip"
              placement="bottom-left"
              target="IconTooltipRight"
            />
          </div>
        </div>
        
      </div>
    );
  }
}
*/

storiesOf('binary-ui-components', module)
  .add('Tooltip', () => (
    <Tooltip isVisible label="Tooltip" />
  ));
