import IconCamera from 'binary-ui-icons/binary/CameraAlt';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import ImageUploadWrapper from '../../components-styled/ImageUploadWrapper';

const propTypes = {};

const defaultProps = {};

export default class ImageUpload extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.5} >
        <ImageUploadWrapper>
          <IconCamera size={30} color="#aeaeae" />
        </ImageUploadWrapper>
      </TouchableOpacity>
    );
  }
}

ImageUpload.propTypes = propTypes;
ImageUpload.defaultProps = defaultProps;
