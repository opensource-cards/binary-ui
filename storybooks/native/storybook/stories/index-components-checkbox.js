import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components";

import Checkbox from "binary-ui-components/mobile/Checkbox";
import { THEME_MAIN } from "binary-ui-styles";

storiesOf("binary-ui-components/mobile", module).add("Checkbox", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <View>
      <Checkbox isChecked onChange={action()} onClick={action()} />
      <Checkbox isChecked={false} onChange={action()} onClick={action()} />
    </View>
  </ThemeProvider>
));
