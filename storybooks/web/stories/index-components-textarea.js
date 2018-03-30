import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import IconMore from "binary-ui-icons/binary/More";
import Textarea from "binary-ui-components/mobile/Textarea";
import { THEME_MAIN } from "binary-ui-styles";

setAddon(infoAddon);

storiesOf("binary-ui-components/mobile", module).add(
  "Textarea",
  withInfo("A Textarea Component")(() => (
    <ThemeProvider theme={THEME_MAIN}>
      <div>
        <Textarea
          placeholder="Textarea Placeholder"
          value=""
          renderIcon={props => <IconMore {...props} />}
          onChange={action()}
          onIconClick={action()}
        />
        <Textarea
          isValid={false}
          placeholder="Textarea Placeholder Invalid"
          value=""
          renderIcon={props => <IconMore {...props} />}
          onChange={action()}
          onIconClick={action()}
        />
        <Textarea
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          renderIcon={props => <IconMore {...props} />}
          onChange={action()}
          onIconClick={action()}
        />
        <Textarea
          height={240}
          placeholder="Textarea Placeholder"
          value=""
          renderIcon={props => <IconMore {...props} />}
          onChange={action()}
          onIconPress={action()}
        />
      </div>
    </ThemeProvider>
  ))
);
