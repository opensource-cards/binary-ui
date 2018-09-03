import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";

import IconMore from "binary-ui-icons/binary/More";
import Viewline from "binary-ui-components/mobile/Viewline";
import { OPACITY_ACTIVE, THEME_MAIN } from "binary-ui-styles";

storiesOf("binary-ui-components/mobile", module).add("Viewline", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <View>
      <Viewline>
        <Text>Viewline without icon</Text>
      </Viewline>
      <Viewline isEdit isValid={false}>
        <Text>Viewline invalid without icon</Text>
      </Viewline>
      <Viewline
        renderIcon={props => <IconMore {...props} />}
        onIconPress={action()}
      >
        <Text>Viewline with icon</Text>
      </Viewline>
      <Viewline isEdit>
        <Text>Viewline with underline</Text>
      </Viewline>
      <Viewline isDisabled isEdit renderIcon={props => <IconMore {...props} />}>
        <Text>Viewline with underline disabled</Text>
      </Viewline>
      <Viewline
        renderIcon={props => <IconMore {...props} />}
        onIconPress={action()}
      >
        <View
          style={{
            backgroundColor: "hsla(0, 0%, 0%, 0.05)",
            padding: 10,
            borderRadius: 15,
            alignSelf: "flex-start"
          }}
        >
          <Text>Viewline with complex styles</Text>
        </View>
      </Viewline>
    </View>
  </ThemeProvider>
));
