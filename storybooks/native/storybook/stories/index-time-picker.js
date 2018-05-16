import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";

import Label from "binary-ui-components/mobile/Label";
import TimePicker from "binary-ui-time-picker";
import { THEME_MAIN } from "binary-ui-styles";

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

storiesOf("binary-ui-time-picker", module).add("TimePicker", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <View>
      <View>
        <Text>Static</Text>
      </View>
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
      <View>
        <Text>Demo</Text>
      </View>
      <TimePickerDemo />
    </View>
  </ThemeProvider>
));
