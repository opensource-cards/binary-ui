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
        isImageUpload={false}
        onImageClick={action()}
      />
      <ImagePicker
        images={[{
          url: 'https://facebook.github.io/react/img/logo_og.png',
          id: imageSelectedId,
        }]}
        imageSelectedId={imageSelectedId}
        isImageUpload={true}
        onImageClick={action()}
      />
    </View>
  ));
