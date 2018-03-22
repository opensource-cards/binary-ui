import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import styled from "styled-components";

import Label from 'binary-ui-components/mobile/Label';
import Select from "binary-ui-components/mobile/Select";
import Add from "binary-ui-icons/binary/Add";
import Remove from "binary-ui-icons/binary/Remove";

setAddon(infoAddon);

class SelectDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "korean"
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(selected) {
    this.setState(() => ({
      selected
    }));
  }

  render() {
    const { selected } = this.state;
    return (
      <Select
        items={[
          { key: "ukrainian-key", label: "Ukrainian", value: "ukrainian" },
          { key: "english-key", label: "English", value: "english" },
          { key: "korean-key", label: "Korean", value: "korean" }
        ]}
        selected={selected}
        onChange={this.onChange}
        renderLeft={() => (
          <Label isBold>
            Demo
          </Label>
        )}
      />
    );
  }
}

storiesOf("binary-ui-components/mobile", module).add(
  "Select",
  withInfo("Select component")(() => (
    <div>
      <div>Demo</div>
      <SelectDemo />
    </div>
  ))
);
