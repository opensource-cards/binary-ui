import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import { ThemeProvider } from "styled-components";

import Label from "binary-ui-components/mobile/Label";
import TimePicker from "binary-ui-time-picker";
import { THEME_MAIN } from "binary-ui-styles";

setAddon(infoAddon);

const dateNow = new Date();

class TimePickerDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 22, 15),
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
      <TimePicker
        date={date}
        locale="uk"
        maximumDate={new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 22, 15)}
        minimumDate={new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 8, 15)}
        minuteInterval={15}
        onChange={this.onChange}
        renderLeft={() => <Label isBold>Demo</Label>}
      />
    );
  }
}

storiesOf("binary-ui-time-picker", module).add(
  "TimePicker",
  withInfo("TimePicker component")(() => (
    <ThemeProvider theme={THEME_MAIN}>
      <div>
        <div>Preview</div>
        <TimePicker
          date={new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 22, 45)}
          locale="uk"
          maximumDate={new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 24, 0)}
          minimumDate={new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 8, 15)}
          onChange={action}
          renderLeft={() => <Label isBold>Available</Label>}
        />
        <TimePicker
          date={new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 22, 45)}
          locale="uk"
          onChange={action}
          renderLeft={() => <Label isBold>Available</Label>}
        />
        <TimePicker
          date={new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 22, 45)}
          isDisabled
          locale="uk"
          minuteInterval={15}
          onChange={action}
          renderLeft={() => <Label isBold>Disabled</Label>}
        />
        <div>Demo</div>
        <TimePickerDemo />
      </div>
    </ThemeProvider>
  ))
);
