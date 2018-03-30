import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components";

import ProgressBar from "binary-ui-components/mobile/ProgressBar";
import { THEME_MAIN } from "binary-ui-styles";

storiesOf("binary-ui-components/mobile", module).add("ProgressBar", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <View>
      <ProgressBar progress={20} />
      <ProgressBar progress={95} />
    </View>
  </ThemeProvider>
));
