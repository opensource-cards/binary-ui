import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components";

import NotificationIcon from "binary-ui-components/mobile/NotificationIcon";
import { THEME_MAIN } from "binary-ui-styles";

storiesOf("binary-ui-components/mobile", module).add("NotificationIcon", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <View>
      <NotificationIcon />
    </View>
  </ThemeProvider>
));
