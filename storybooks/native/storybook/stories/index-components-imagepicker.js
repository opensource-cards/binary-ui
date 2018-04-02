import IconCamera from "binary-ui-icons/binary/CameraAlt";
import React from "react";
import { Image, View } from "react-native";
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
        images={[
          {
            url: "https://andcards.com/logotype-320x60.png",
            id: imageSelectedId
          }
        ]}
        imageSelectedId={imageSelectedId}
        renderImage={({ isLoading, radius, url }) => (
          <Image
            resizeMode="contain"
            source={{ uri: url }}
            style={{
              borderRadius: radius,
              height: 2 * radius,
              opacity: isLoading ? 0.5 : 1,
              position: 'absolute',
              width: 2 * radius,
            }}
          />
        )}
        renderUploadIcon={props => <IconCamera {...props} />}
        isImageUpload={false}
        onImagePress={action()}
        onImageUpload={action()}
      />
      <ImagePicker
        images={[
          {
            url: "https://andcards.com/logotype-320x60.png",
            id: imageSelectedId,
            isLoading: true
          }
        ]}
        imageSelectedId={imageSelectedId}
        isImageUpload={true}
        renderImage={({ isLoading,radius, url }) => (
          <Image
            resizeMode="cover"
            source={{ uri: url }}
            style={{
              borderRadius: radius,
              height: 2 * radius,
              opacity: isLoading ? 0.5 : 1,
              position: 'absolute',
              width: 2 * radius,
            }}
          />
        )}
        renderUploadIcon={props => <IconCamera {...props} />}
        onImagePress={action()}
        onImageUpload={action()}
      />
    </View>
  </ThemeProvider>
));
