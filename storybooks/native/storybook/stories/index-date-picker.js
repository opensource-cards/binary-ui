import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";

import Label from "binary-ui-components/mobile/Label";
import DatePicker from "binary-ui-date-picker";
import { THEME_MAIN } from "binary-ui-styles";

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

storiesOf("binary-ui-date-picker", module).add("DatePicker", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <View>
      <View>
        <Text>Static</Text>
      </View>
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
      <View>
        <Text>Demo</Text>
      </View>
      <DatePickerDemo />
    </View>
  </ThemeProvider>
));
