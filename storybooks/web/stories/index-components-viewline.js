import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import IconMore from "binary-ui-icons/binary/More";
import Viewline from "binary-ui-components/mobile/Viewline";
import { THEME_MAIN } from "binary-ui-styles";

setAddon(infoAddon);

storiesOf("binary-ui-components/mobile", module).add(
  "Viewline",
  withInfo("A Viewline Component")(() => (
    <ThemeProvider theme={THEME_MAIN}>
      <div>
        <Viewline>
          <div>Viewline without icon</div>
        </Viewline>
        <Viewline
          renderIcon={props => <IconMore {...props} />}
          onIconPress={action()}
        >
          <div>Viewline with icon</div>
        </Viewline>
        <Viewline isEdit>
          <div>Viewline with underline</div>
        </Viewline>
        <Viewline
          isDisabled
          isEdit
          renderIcon={props => <IconMore {...props} />}
        >
          <div>Viewline with underline disabled</div>
        </Viewline>
        <Viewline
          renderIcon={props => <IconMore {...props} />}
          onIconPress={action()}
        >
          <div
            style={{
              backgroundColor: "hsla(0, 0%, 0%, 0.05)",
              padding: "5px 10px",
              borderRadius: 15,
              width: "fit-content",
              height: "fit-content"
            }}
          >
            Viewline with complex styles
          </div>
        </Viewline>
      </div>
    </ThemeProvider>
  ))
);
