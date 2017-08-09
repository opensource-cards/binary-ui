import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import Slider from 'binary-ui-components/mobile/Slider';
import Add from 'binary-ui-icons/binary/Add';
import Remove from 'binary-ui-icons/binary/Remove';

setAddon(infoAddon);


class SliderDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
    };
    this.onPositionChange = this.onPositionChange.bind(this);
  }
  onPositionChange(position) {
    this.setState(() => ({
      position,
    }));
  }
  render() {
    const { position } = this.state;
    return (
      <Slider
        position={position}
        renderIconLeft={() => (<Remove />)}
        renderIconRight={() => (<Add />)}
        onPositionChange={this.onPositionChange}
      />
    );
  }
}

storiesOf('binary-ui-components', module)
  .add('Slider', withInfo('Slider component')(() => (
    <SliderDemo />
  )));
