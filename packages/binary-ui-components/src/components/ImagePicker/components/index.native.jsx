import PropTypes from 'prop-types';
import React from 'react';
import ImagePickerWrapper from '../components-styled/ImagePickerWrapper';
import ImageUploadWrapper from '../components-styled/ImageUploadWrapper';
import ImageContent from '../components-styled/ImageContent';
import { TouchableOpacity } from 'react-native';
import IconDone from 'binary-ui-icons/binary/Done';
import IconCamera from 'binary-ui-icons/binary/CameraAlt';

const propTypes = {
  isImageUpload: PropTypes.bool,
};

const defaultProps = {
  imageSelectedId: undefined,
  images: [],
  isImageUpload: true,
  onImageClick: undefined,
};

export default class ImagePicker extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { } = this.props;
    return (
      <ImagePickerWrapper>
        <TouchableOpacity activeOpacity={0.5} >
          <ImageContent
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
            style={{ width: 60, height: 60 }}
          >
            <IconDone size={40} color="#FFF" />
          </ImageContent>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} >
          <ImageUploadWrapper>
            <IconCamera size={30} color="#aeaeae" />
          </ImageUploadWrapper>
        </TouchableOpacity>
      </ImagePickerWrapper>
    );
  }
}

ImagePicker.propTypes = propTypes;
ImagePicker.defaultProps = defaultProps;
