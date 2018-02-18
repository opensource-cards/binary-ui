import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";

import IconWarning from "binary-ui-icons/binary/Warning";
import IconOrganizationDisconnected from "binary-ui-icons/binary/OrganizationDisconnected";
import Alert, { ALERT_TYPES } from "binary-ui-components/mobile/Alert";

storiesOf("binary-ui-components/mobile", module).add("Alert", () => (
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
));
