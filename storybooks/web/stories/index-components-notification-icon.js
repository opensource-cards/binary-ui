import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import NotificationIcon from "binary-ui-components/mobile/NotificationIcon";
import { THEME_MAIN } from "binary-ui-styles";

setAddon(infoAddon);

storiesOf("binary-ui-components/mobile", module).add(
  "NotificationIcon",
  withInfo("A NotificationIcon Component")(() => (
    <ThemeProvider theme={THEME_MAIN}>
      <div>
        <NotificationIcon />
      </div>
    </ThemeProvider>
  ))
);
