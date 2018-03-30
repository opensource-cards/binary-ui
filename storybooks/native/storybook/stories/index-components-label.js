import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";

import Label from "binary-ui-components/mobile/Label";
import { THEME_MAIN } from "binary-ui-styles";

storiesOf("binary-ui-components/mobile", module).add("Label", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <View>
      <Label>Label</Label>
      <Label isDisabled>Label disabled</Label>
      <Label isBold>Label bold</Label>
      <Label isBold isDisabled>
        Label bold disabled
      </Label>
    </View>
  </ThemeProvider>
));
