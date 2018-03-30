import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Slider from "binary-ui-components/mobile/Slider";
import Add from "binary-ui-icons/binary/Add";
import Remove from "binary-ui-icons/binary/Remove";
import { THEME_MAIN } from "binary-ui-styles";

setAddon(infoAddon);

class SliderDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(position) {
    this.setState(() => ({
      position
    }));
  }

  render() {
    const { position } = this.state;
    return (
      <Slider
        position={position}
        renderIconLeft={props => <Remove {...props} />}
        renderIconRight={props => <Add {...props} />}
        onChange={this.onChange}
      />
    );
  }
}

storiesOf("binary-ui-components/mobile", module).add(
  "Slider",
  withInfo("Slider component")(() => (
    <ThemeProvider theme={THEME_MAIN}>
      <SliderDemo />
    </ThemeProvider>
  ))
);
