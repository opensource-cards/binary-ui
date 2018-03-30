import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import IconArrowDown from "binary-ui-icons/binary/ArrowDown";
import Button from "binary-ui-components/mobile/Button";
import { THEME_MAIN } from "binary-ui-styles";

setAddon(infoAddon);

storiesOf("binary-ui-components/mobile", module).add(
  "Button",
  withInfo("A Button Component")(() => (
    <ThemeProvider theme={THEME_MAIN}>
      <div>
        <Button label="A standard button" isBold onClick={action()} />
        <Button
          label="A non editable button"
          isEdit={false}
          onClick={action()}
        />
        <Button
          label="A disabled button"
          isBold
          isDisabled
          onClick={action()}
        />
        <Button
          label="A standard with button icon"
          isBold
          renderIcon={props => <IconArrowDown {...props} />}
          onClick={action()}
        />
        <Button
          label="A standard with button icon and custom font"
          labelStyle={{
            fontFamily: "PTSans-Narrow",
            fontWeight: 400
          }}
          isBold
          renderIcon={props => <IconArrowDown {...props} />}
          onClick={action()}
        />
      </div>
    </ThemeProvider>
  ))
);
