import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { ThemeProvider } from "styled-components";

import Add from "binary-ui-icons/binary/Add";
import Remove from "binary-ui-icons/binary/Remove";
import Slider from "binary-ui-components/mobile/Slider";
import { THEME_MAIN } from "binary-ui-styles";

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

storiesOf("binary-ui-components/mobile", module).add("Slider", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <SliderDemo />
  </ThemeProvider>
));
