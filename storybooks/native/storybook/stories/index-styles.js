import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";

import { THEME_MAIN } from "binary-ui-styles";

storiesOf("binary-ui-styles", module).add("THEME_MAIN", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <View>
      <Text
        style={{
          fontFamily: THEME_MAIN.fontFamily100,
          fontSize: 18,
          fontWeight: THEME_MAIN.fontWeight100
        }}
      >
        100
      </Text>
      <Text
        style={{
          fontFamily: THEME_MAIN.fontFamily200,
          fontSize: 18,
          fontWeight: THEME_MAIN.fontWeight200
        }}
      >
        200
      </Text>
      <Text
        style={{
          fontFamily: THEME_MAIN.fontFamily300,
          fontSize: 18,
          fontWeight: THEME_MAIN.fontWeight300
        }}
      >
        300
      </Text>
      <Text
        style={{
          fontFamily: THEME_MAIN.fontFamily400,
          fontSize: 18,
          fontWeight: THEME_MAIN.fontWeight400
        }}
      >
        400
      </Text>
      <Text
        style={{
          fontFamily: THEME_MAIN.fontFamily500,
          fontSize: 18,
          fontWeight: THEME_MAIN.fontWeight500
        }}
      >
        500
      </Text>
      <Text
        style={{
          fontFamily: THEME_MAIN.fontFamily600,
          fontSize: 18,
          fontWeight: THEME_MAIN.fontWeight600
        }}
      >
        600
      </Text>
      <Text
        style={{
          fontFamily: THEME_MAIN.fontFamily700,
          fontSize: 18,
          fontWeight: THEME_MAIN.fontWeight700
        }}
      >
        700
      </Text>
      <Text
        style={{
          fontFamily: THEME_MAIN.fontFamily800,
          fontSize: 18,
          fontWeight: THEME_MAIN.fontWeight800
        }}
      >
        800
      </Text>
      <Text
        style={{
          fontFamily: THEME_MAIN.fontFamily900,
          fontSize: 18,
          fontWeight: THEME_MAIN.fontWeight900
        }}
      >
        900
      </Text>
    </View>
  </ThemeProvider>
));
