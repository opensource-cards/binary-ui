import IconCamera from "binary-ui-icons/binary/CameraAlt";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import uuid from "uuid";

import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import ImagePicker from "binary-ui-components/mobile/ImagePicker";
import { THEME_MAIN, TRANSITION_FEEDBACK_OPACITY } from "binary-ui-styles";

setAddon(infoAddon);

const imageSelectedId = uuid.v1();

storiesOf("binary-ui-components/mobile", module).add(
  "ImagePicker",
  withInfo("ImagePicker Component")(() => (
    <ThemeProvider theme={THEME_MAIN}>
      <div>
        <ImagePicker
          images={[
            {
              url: "https://andcards.com/logotype-320x60.png",
              id: imageSelectedId
            }
          ]}
          imageSelectedId={imageSelectedId}
          isImageUpload={false}
          renderImage={({ isLoading, radius, url }) => (
            <img
              src={url}
              style={{
                borderRadius: radius,
                height: 2 * radius,
                objectFit: "contain",
                opacity: isLoading ? 0.5 : 1,
                position: 'absolute',
                transition: TRANSITION_FEEDBACK_OPACITY,
                width: 2 * radius,
              }}
            />
          )}
          renderUploadIcon={props => <IconCamera {...props} />}
          onImageClick={action()}
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
          isImageUpload
          renderImage={({ isLoading, radius, url }) => (
            <img
              src={url}
              style={{
                borderRadius: radius,
                height: 2 * radius,
                objectFit: "cover",
                opacity: isLoading ? 0.5 : 1,
                position: 'absolute',
                transition: TRANSITION_FEEDBACK_OPACITY,
                width: 2 * radius,
              }}
            />
          )}
          renderUploadIcon={props => <IconCamera {...props} />}
          onImageClick={action()}
          onImageUpload={action()}
        />
      </div>
    </ThemeProvider>
  ))
);
