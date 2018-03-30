import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Label from "binary-ui-components/mobile/Label";
import { THEME_MAIN } from "binary-ui-styles";

setAddon(infoAddon);

storiesOf("binary-ui-components/mobile", module).add(
  "Label",
  withInfo("A Label Component")(() => (
    <ThemeProvider theme={THEME_MAIN}>
      <div>
        <Label>Label</Label>
        <Label isDisabled>Label disabled</Label>
        <Label isBold>Label bold</Label>
        <Label isBold isDisabled>
          Label bold disabled
        </Label>
      </div>
    </ThemeProvider>
  ))
);
