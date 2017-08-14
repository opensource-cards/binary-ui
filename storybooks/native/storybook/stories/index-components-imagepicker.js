import IconCamera from 'binary-ui-icons/binary/CameraAlt';
import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import ImagePicker from 'binary-ui-components/mobile/ImagePicker';

const imageSelectedId = 'uuid';

storiesOf('binary-ui-components', module)
  .add('ImagePicker', () => (
    <View>
      <ImagePicker
        images={[{
          url: 'https://facebook.github.io/react/img/logo_og.png',
          id: imageSelectedId,
        }]}
        imageSelectedId={imageSelectedId}
        renderUploadIcon={() => (
          <IconCamera />
        )}
        isImageUpload={false}
        onImagePress={action()}
        onImageUpload={action()}
      />
      <ImagePicker
        images={[{
          url: 'https://facebook.github.io/react/img/logo_og.png',
          id: imageSelectedId,
        }]}
        imageSelectedId={imageSelectedId}
        isImageUpload={true}
        renderUploadIcon={() => (
          <IconCamera />
        )}
        onImagePress={action()}
        onImageUpload={action()}
      />
    </View>
  ));
