import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Section from "binary-ui-components/mobile/Section";
import { THEME_MAIN } from "binary-ui-styles";

setAddon(infoAddon);

storiesOf("binary-ui-components/mobile", module).add(
  "Section",
  withInfo("Section component")(() => (
    <ThemeProvider theme={THEME_MAIN}>
      <Section label="Section Label">Section content</Section>
    </ThemeProvider>
  ))
);
