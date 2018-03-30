import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components";

import IconArrowDown from "binary-ui-icons/binary/ArrowDown";
import Button from "binary-ui-components/mobile/Button";
import { THEME_MAIN } from "binary-ui-styles";

storiesOf("binary-ui-components/mobile", module).add("Button", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <View>
      <Button label="A standard button" isBold onPress={action()} />
      <Button label="A non editable button" isEdit={false} onPress={action()} />
      <Button label="A disabled button" isBold isDisabled onPress={action()} />
      <Button
        label="A standard with button icon"
        isBold
        renderIcon={props => <IconArrowDown {...props} />}
        onPress={action()}
      />
      <Button
        label="A standard with button icon and custom font"
        labelStyle={{
          fontFamily: "PTSans-Narrow",
          fontWeight: "400"
        }}
        isBold
        renderIcon={props => <IconArrowDown {...props} />}
        onPress={action()}
      />
    </View>
  </ThemeProvider>
));
