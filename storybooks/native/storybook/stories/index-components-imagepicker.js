import IconCamera from 'binary-ui-icons/binary/CameraAlt';
import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import ImagePicker from 'binary-ui-components/mobile/ImagePicker';

const imageSelectedId = 'uuid';

storiesOf('binary-ui-components/mobile', module)
  .add('ImagePicker', () => (
    <View>
      <ImagePicker
        imageFit="contain"
        images={[{
          url: 'http://contacts.try.cards/card-placeholder-logo.png',
          id: imageSelectedId,
        }]}
        imageSelectedId={imageSelectedId}
        renderUploadIcon={(props) => (
          <IconCamera {...props} />
        )}
        isImageUpload={false}
        onImagePress={action()}
        onImageUpload={action()}
      />
      <ImagePicker
        imageFit="cover"
        images={[{
          url: 'http://contacts.try.cards/card-placeholder-logo.png',
          id: imageSelectedId,
        }]}
        imageSelectedId={imageSelectedId}
        isImageUpload={true}
        renderUploadIcon={(props) => (
          <IconCamera {...props} />
        )}
        onImagePress={action()}
        onImageUpload={action()}
      />
    </View>
  ));
