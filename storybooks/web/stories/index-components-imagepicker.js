import IconCamera from 'binary-ui-icons/binary/CameraAlt';
import React from 'react';
import styled from 'styled-components';
import { getImg } from './resources/fake-img';
import uuid from 'uuid';

import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import ImagePicker from 'binary-ui-components/mobile/ImagePicker';

setAddon(infoAddon);

const imageSelectedId = uuid.v1();

storiesOf('binary-ui-components', module)
  .add('ImagePicker', withInfo('ImagePicker Component')(() => (
    <div>
      <ImagePicker
        imageFit="contain"
        images={[{
          url: getImg(),
          id: imageSelectedId,
        }]}
        imageSelectedId={imageSelectedId}
        isImageUpload={false}
        renderUploadIcon={() => (
          <IconCamera />
        )}
        onImageClick={action()}
        onImageUpload={action()}
      />
      <ImagePicker
        imageFit="contain"
        images={[{
          url: getImg(),
          id: imageSelectedId,
        }]}
        imageSelectedId={imageSelectedId}
        isImageUpload
        renderUploadIcon={() => (
          <IconCamera />
        )}
        onImageClick={action()}
        onImageUpload={action()}
      />
    </div>
  )));
