import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Switch from "binary-ui-components/mobile/Switch";
import { THEME_MAIN } from "binary-ui-styles";

setAddon(infoAddon);

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

storiesOf("binary-ui-components/mobile", module).add(
  "Switch",
  withInfo("Switch component")(() => (
    <ThemeProvider theme={THEME_MAIN}>
      <div>
        <Switch isChecked label="Switch label" onChange={action()} />
        <Switch
          isChecked
          isDisabled
          label="Switch disabled"
          onChange={action()}
        />
        <Switch isChecked={false} onChange={action()} />
        <Demo />
      </div>
    </ThemeProvider>
  ))
);
