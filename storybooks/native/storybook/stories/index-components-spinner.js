import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components";

import Spinner from "binary-ui-components/mobile/Spinner";
import { THEME_MAIN } from "binary-ui-styles";

storiesOf("binary-ui-components/mobile", module).add("Spinner", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <View>
      <Spinner />
      <Spinner size={50} />
      <Spinner size={100} />
      <Spinner color="#d3d3d3" size={100} />
      <Spinner color="#c90335" size={100} />
    </View>
  </ThemeProvider>
));
