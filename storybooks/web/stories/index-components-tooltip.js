import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import Tooltip from 'binary-ui-components/mobile/Tooltip';
import ActionIcon from 'binary-ui-components/mobile/ActionIcon';
import Add from 'binary-ui-icons/binary/Add';

setAddon(infoAddon);

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
      <div style={{ padding: 50 }} >
        <div style={{ float: 'left', height: 20, width: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'wheat', position: 'relative' }}>
          <ActionIcon ref={this.onSetLeft} title="Icon" onClick={this.onChangeLeft} renderIcon={() => (<Add />)} size={20} />
        </div>
        <div style={{ float: 'right', height: 20, width: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'wheat', position: 'relative' }}>
          <ActionIcon ref={this.onSetRight} title="Icon" onClick={this.onChangeRight} renderIcon={() => (<Add />)} size={20} />
        </div>
        <div style={{ clear: 'both' }} />        
        <div style={{ position: 'relative' }} >
          <div style={{ position: 'absolute', top: 50, left: 50, backgroundColor: 'lightgray' }} >
            <div>Container for Tooltips</div>
            <Tooltip
              isVisible={isVisibleLeft}
              label="Left tooltip"
              placement="bottom-right"
              target={this.buttonLeft}
            />
            <Tooltip
              isVisible={isVisibleRight}
              label="Right tooltip"
              placement="bottom-left"
              target={this.buttonRight}
            />
          </div>
        </div>
        
      </div>
    );
  }
}

storiesOf('binary-ui-components', module)
  .add('Tooltip', withInfo('Tooltip component')(() => (
    <TooltipDemo />
  )));
