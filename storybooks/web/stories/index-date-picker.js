import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import { ThemeProvider } from "styled-components";

import Label from "binary-ui-components/mobile/Label";
import DatePicker from "binary-ui-date-picker";
import { THEME_MAIN } from "binary-ui-styles";

setAddon(infoAddon);

const dateNow = new Date();

class DatePickerDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate())
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.setState(() => ({
      date
    }));
  }

  render() {
    const { date } = this.state;
    return (
      <DatePicker
        date={date}
        locale="uk"
        onChange={this.onChange}
        renderLeft={() => <Label isBold>Demo</Label>}
      />
    );
  }
}

storiesOf("binary-ui-date-picker", module).add(
  "DatePicker",
  withInfo("DatePicker component")(() => (
    <ThemeProvider theme={THEME_MAIN}>
      <div>
        <div>Preview</div>
        <DatePicker
          date={new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate())}
          locale="uk"
          onChange={action}
          renderLeft={() => <Label isBold>Available</Label>}
        />
        <DatePicker
          date={new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate())}
          isDisabled
          locale="uk"
          onChange={action}
          renderLeft={() => <Label isBold>Disabled</Label>}
        />
        <div>Demo</div>
        <DatePickerDemo />
      </div>
    </ThemeProvider>
  ))
);
