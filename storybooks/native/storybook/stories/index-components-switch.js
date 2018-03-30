import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components";

import Switch from "binary-ui-components/mobile/Switch";
import { THEME_MAIN } from "binary-ui-styles";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(isChecked) {
    this.setState(() => ({
      isChecked
    }));
  }

  render() {
    const { isChecked } = this.state;
    return (
      <Switch isChecked={isChecked} label="Demo" onChange={this.onChange} />
    );
  }
}

storiesOf("binary-ui-components/mobile", module).add("Switch", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <View>
      <Switch isChecked label="Switch label" onChange={action()} />
      <Switch
        isChecked
        isDisabled
        label="Switch disabled"
        onChange={action()}
      />
      <Switch isChecked={false} onChange={action()} />
      <Demo />
    </View>
  </ThemeProvider>
));
