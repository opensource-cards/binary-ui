import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Add from 'binary-ui-icons/binary/Add';
import Remove from 'binary-ui-icons/binary/Remove';

import Slider from 'binary-ui-components/mobile/Slider';

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
  .add('Slider', () => (
    <SliderDemo />
  ));
