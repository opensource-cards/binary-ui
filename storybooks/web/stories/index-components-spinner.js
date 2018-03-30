import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Spinner from "binary-ui-components/mobile/Spinner";
import { THEME_MAIN } from "binary-ui-styles";

setAddon(infoAddon);

storiesOf("binary-ui-components/mobile", module).add(
  "Spinner",
  withInfo("Spinner component")(() => (
    <ThemeProvider theme={THEME_MAIN}>
      <div>
        <Spinner />
        <br />
        <Spinner size={50} />
        <br />
        <Spinner size={100} />
        <br />
        <Spinner color="#d3d3d3" size={100} />
        <br />
        <Spinner color="#c90335" size={100} />
        <br />
      </div>
    </ThemeProvider>
  ))
);
