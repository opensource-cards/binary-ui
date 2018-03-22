import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";

import IconArrowDown from "binary-ui-icons/binary/ArrowDown";
import Button from "binary-ui-components/mobile/Button";

storiesOf("binary-ui-components/mobile", module).add("Button", () => (
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
        fontFamily: "PTSans-Narrow"
      }}
      isBold
      renderIcon={props => <IconArrowDown {...props} />}
      onPress={action()}
    />
  </View>
));
