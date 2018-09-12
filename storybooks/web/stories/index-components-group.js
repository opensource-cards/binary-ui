import React from "react";
import styled, { ThemeProvider } from "styled-components";
import uuid from "uuid";

import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Remove from "binary-ui-icons/binary/Remove";
import Add from "binary-ui-icons/binary/Add";
import ArrowDown from "binary-ui-icons/binary/ArrowDown";
import ArrowRight from "binary-ui-icons/binary/ArrowRight";
import IconMore from "binary-ui-icons/binary/More";
import ActionIcon from "binary-ui-components/mobile/ActionIcon";
import Alert, { ALERT_TYPES } from "binary-ui-components/mobile/Alert";
import Button from "binary-ui-components/mobile/Button";
import Group from "binary-ui-components/mobile/Group";
import Label from "binary-ui-components/mobile/Label";
import Select from "binary-ui-components/mobile/Select";
import Switch from "binary-ui-components/mobile/Switch";
import Textarea from "binary-ui-components/mobile/Textarea";
import Input, { INPUT_FIELD_TYPES } from "binary-ui-components/mobile/Input";
import { THEME_MAIN } from "binary-ui-styles";

setAddon(infoAddon);

const text = "Important: for compatibility set container width in pixels!";

storiesOf("binary-ui-components/mobile", module).addWithInfo("Group", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <div>
      <Group
        renderLeft={() => <Label isBold>Left text</Label>}
        renderRight={() => (
          <Input
            placeholder="Input"
            type={INPUT_FIELD_TYPES.TEL}
            value=""
            renderIcon={props => <IconMore {...props} />}
            onChange={action()}
            onIconClick={action()}
          />
        )}
      />
      <Group renderLeft={() => null} renderRight={() => null} />
      <Group
        renderLeft={() => <Label isBold>Label</Label>}
        renderRight={() => <Label isDisabled>+8227073791</Label>}
      />
      <Group
        renderLeft={() => <Label isBold>Label</Label>}
        renderRight={() => (
          <Button
            label="Button"
            isEdit
            renderIcon={props => <ArrowDown {...props} />}
            onClick={action()}
          />
        )}
      />
      <Button
        label="Button"
        isEdit
        renderIcon={props => <ArrowDown {...props} />}
        onClick={action()}
      />
    </div>
  </ThemeProvider>
));
