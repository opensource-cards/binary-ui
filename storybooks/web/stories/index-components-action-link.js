import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import styled from "styled-components";

import IconAdd from "binary-ui-icons/binary/Add";
import ActionLink from "binary-ui-components/mobile/ActionLink";

setAddon(infoAddon);

storiesOf("binary-ui-components/mobile", module).add(
  "ActionLink",
  withInfo("An ActionLink Component")(() => (
    <div>
      <div style={{ padding: "5px" }}>
        1. Here is an{" "}
        <ActionLink
          draggable={false}
          href="https://andcards.com"
          label="ActionLink"
          title="Title"
          renderIconRight={rest => <IconAdd {...rest} />}
        />{" "}
        example.
      </div>
      <div style={{ padding: "5px" }}>
        <ActionLink
          draggable={false}
          href="https://andcards.com"
          label="2. ActionLink full width"
          title="Title"
          renderIconLeft={rest => <IconAdd {...rest} />}
        />
      </div>
      <div style={{ padding: "5px" }}>
        <ActionLink
          draggable={false}
          href="https://andcards.com"
          isDisabled
          label="3. ActionLink disabled"
          title="Title"
          renderIconRight={rest => <IconAdd {...rest} />}
        />
      </div>
    </div>
  ))
);
