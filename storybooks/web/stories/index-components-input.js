import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import IconMore from "binary-ui-icons/binary/More";
import Input, { INPUT_FIELD_TYPES } from "binary-ui-components/mobile/Input";
import { THEME_MAIN } from "binary-ui-styles";

setAddon(infoAddon);

class InputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(text) {
    this.setState(() => ({
      text
    }));
  }

  render() {
    const { text } = this.state;
    return (
      <Input
        placeholder="Demo"
        type={INPUT_FIELD_TYPES.EMAIL}
        value={text}
        renderIcon={props => <IconMore {...props} />}
        onChange={this.onChange}
        onIconPress={action()}
      />
    );
  }
}

storiesOf("binary-ui-components/mobile", module).add(
  "Input",
  withInfo("An Input Component")(() => (
    <ThemeProvider theme={THEME_MAIN}>
      <div>
        <Input
          placeholder="Text Placeholder"
          type={INPUT_FIELD_TYPES.TEXT}
          value=""
          onChange={action()}
        />
        <Input
          isDisabled
          placeholder="Disabled"
          type={INPUT_FIELD_TYPES.TEXT}
          value=""
          onChange={action()}
        />
        <Input
          isDisabled
          placeholder="Disabled with Icon"
          type={INPUT_FIELD_TYPES.TEXT}
          value=""
          renderIcon={props => <IconMore {...props} />}
          onChange={action()}
        />
        <Input
          placeholder="Text"
          type={INPUT_FIELD_TYPES.TEXT}
          value="Text"
          onChange={action()}
        />
        <Input
          isBold
          placeholder="Bold placeholder"
          type={INPUT_FIELD_TYPES.TEXT}
          value=""
          onChange={action()}
        />
        <Input
          isBold
          placeholder="Bold text"
          type={INPUT_FIELD_TYPES.TEXT}
          value="Bold text"
          onChange={action()}
        />
        <Input
          type={INPUT_FIELD_TYPES.NUMBER}
          value="1234567890"
          renderIcon={props => <IconMore {...props} />}
          onChange={action()}
          onIconClick={action()}
        />
        <Input
          type={INPUT_FIELD_TYPES.TEL}
          value="010000000"
          renderIcon={props => <IconMore {...props} />}
          onChange={action()}
          onIconClick={action()}
        />
        <Input
          type={INPUT_FIELD_TYPES.PASSWORD}
          value="Password"
          renderIcon={props => <IconMore {...props} />}
          onChange={action()}
          onIconClick={action()}
        />
        <Input
          type={INPUT_FIELD_TYPES.EMAIL}
          value="job@andcards.com"
          renderIcon={props => <IconMore {...props} />}
          onChange={action()}
          onIconClick={action()}
        />
        <Input
          isValid={false}
          placeholder="Invalid Email"
          type={INPUT_FIELD_TYPES.EMAIL}
          value=""
          renderIcon={props => <IconMore {...props} />}
          onChange={action()}
          onIconClick={action()}
        />
        <InputDemo />
      </div>
    </ThemeProvider>
  ))
);
