import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";

import Add from "binary-ui-icons/binary/Add";
import Remove from "binary-ui-icons/binary/Remove";
import Label from "binary-ui-components/mobile/Label";
import Select from "binary-ui-components/mobile/Select";
import { THEME_MAIN } from "binary-ui-styles";

class SelectDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "korean"
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(selected) {
    this.setState(() => ({
      selected
    }));
  }

  render() {
    const { selected } = this.state;
    return (
      <Select
        items={[
          { key: "ukrainian-key", label: "Ukrainian", value: "ukrainian" },
          { key: "english-key", label: "English", value: "english" },
          { key: "korean-key", label: "Korean", value: "korean" }
        ]}
        selected={selected}
        onChange={this.onChange}
        renderLeft={() => <Label isBold>Demo</Label>}
      />
    );
  }
}

storiesOf("binary-ui-components/mobile", module).add("Select", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <View>
      <View>
        <Text>Demo</Text>
      </View>
      <SelectDemo />
    </View>
  </ThemeProvider>
));
