import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";

import Label from "binary-ui-components/mobile/Label";
import DatePicker from "binary-ui-date-picker";
import { THEME_MAIN } from "binary-ui-styles";

class DatePickerDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 23,
      month: 0,
      year: 2018
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ day, month, year }) {
    this.setState(() => ({
      day,
      month,
      year
    }));
  }

  render() {
    const { day, month, year } = this.state;
    return (
      <DatePicker
        day={day}
        locale="uk"
        month={month}
        year={year}
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
        day={23}
        locale="uk"
        month={0}
        year={2018}
        onChange={action}
        renderLeft={() => <Label isBold>Available</Label>}
      />
      <DatePicker
        day={23}
        isDisabled
        locale="uk"
        month={0}
        year={2018}
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
