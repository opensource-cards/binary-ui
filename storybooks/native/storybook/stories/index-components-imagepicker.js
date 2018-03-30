import IconCamera from "binary-ui-icons/binary/CameraAlt";
import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import ImagePicker from "binary-ui-components/mobile/ImagePicker";
import { THEME_MAIN } from "binary-ui-styles";

const imageSelectedId = "uuid";

storiesOf("binary-ui-components/mobile", module).add("ImagePicker", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <View>
      <ImagePicker
        imageFit="contain"
        images={[
          {
            url: "https://andcards.com/api/cover?hour=23",
            id: imageSelectedId
          }
        ]}
        imageSelectedId={imageSelectedId}
        renderUploadIcon={props => <IconCamera {...props} />}
        isImageUpload={false}
        onImagePress={action()}
        onImageUpload={action()}
      />
      <ImagePicker
        imageFit="cover"
        images={[
          {
            url: "https://andcards.com/api/cover?hour=23",
            id: imageSelectedId,
            isLoading: true
          }
        ]}
        imageSelectedId={imageSelectedId}
        isImageUpload={true}
        renderUploadIcon={props => <IconCamera {...props} />}
        onImagePress={action()}
        onImageUpload={action()}
      />
    </View>
  </ThemeProvider>
));
