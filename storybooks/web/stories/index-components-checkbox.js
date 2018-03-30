import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Checkbox from "binary-ui-components/mobile/Checkbox";
import { THEME_MAIN } from "binary-ui-styles";

setAddon(infoAddon);

storiesOf("binary-ui-components/mobile", module).add(
  "Checkbox",
  withInfo("A Checkbox Component")(() => (
    <ThemeProvider theme={THEME_MAIN}>
      <div>
        <Checkbox isChecked onChange={action()} onClick={action()} />
        <Checkbox isChecked={false} onChange={action()} onClick={action()} />
      </div>
    </ThemeProvider>
  ))
);
