import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import ProgressBar from "binary-ui-components/mobile/ProgressBar";
import { THEME_MAIN } from "binary-ui-styles";

setAddon(infoAddon);

storiesOf("binary-ui-components/mobile", module).add(
  "ProgressBar",
  withInfo("ProgressBar component")(() => (
    <ThemeProvider theme={THEME_MAIN}>
      <div>
        <ProgressBar progress={20} />
        <ProgressBar progress={95} />
      </div>
    </ThemeProvider>
  ))
);
