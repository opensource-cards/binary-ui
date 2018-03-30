import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
import styled, { ThemeProvider } from 'styled-components';

import IconWarning from "binary-ui-icons/binary/Warning";
import IconOrganizationDisconnected from "binary-ui-icons/binary/OrganizationDisconnected";
import Alert, { ALERT_TYPES } from "binary-ui-components/mobile/Alert";
import { THEME_MAIN } from 'binary-ui-styles';

storiesOf("binary-ui-components/mobile", module).add("Alert", () => (
  <ThemeProvider theme={THEME_MAIN} >
    <View>
      <Alert text="Alert type CONFIRM" type={ALERT_TYPES.CONFIRM} />
      <Alert
        text="Alert type PRIORITY"
        type={ALERT_TYPES.PRIORITY}
        renderIconRight={() => <IconOrganizationDisconnected color="#000000" />}
      />
      <Alert
        text="Alert type CRITICAL"
        type={ALERT_TYPES.CRITICAL}
        renderIconLeft={() => <IconWarning color="#FFFFFF" />}
      />
    </View>
  </ThemeProvider>
));
