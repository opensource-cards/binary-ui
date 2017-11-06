import IconCamera from 'binary-ui-icons/binary/CameraAlt';
import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import ImagePicker from 'binary-ui-components/mobile/ImagePicker';

setAddon(infoAddon);

const imageSelectedId = uuid.v1();

storiesOf('binary-ui-components/mobile', module)
  .add('ImagePicker', withInfo('ImagePicker Component')(() => (
    <div>
      <ImagePicker
        imageFit="contain"
        images={[{
          url: 'http://contacts.try.cards/card-placeholder-logo.png',
          id: imageSelectedId,
        }]}
        imageSelectedId={imageSelectedId}
        isImageUpload={false}
        renderUploadIcon={(props) => (
          <IconCamera {...props} />
        )}
        onImageClick={action()}
        onImageUpload={action()}
      />
      <ImagePicker
        imageFit="cover"
        images={[{
          url: 'http://contacts.try.cards/card-placeholder-logo.png',
          id: imageSelectedId,
        }]}
        imageSelectedId={imageSelectedId}
        isImageUpload
        renderUploadIcon={(props) => (
          <IconCamera {...props} />
        )}
        onImageClick={action()}
        onImageUpload={action()}
      />
    </div>
  )));
