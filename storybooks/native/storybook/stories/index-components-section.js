import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components";

import Section from "binary-ui-components/mobile/Section";
import { THEME_MAIN } from "binary-ui-styles";

storiesOf("binary-ui-components/mobile", module).add("Section", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <Section label="Section Label">
      <Text>Section content</Text>
    </Section>
  </ThemeProvider>
));
