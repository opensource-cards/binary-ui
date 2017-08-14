import PropTypes from 'prop-types';
import React from 'react';
import Image from './Image';
import ImageUpload from './ImageUpload';
import ImagePickerWrapper from '../components-styled/ImagePickerWrapper';

const propTypes = {
  imageSelectedId: PropTypes.string,
  images: PropTypes.array,
  isImageUpload: PropTypes.bool,
  renderUploadIcon: PropTypes.func.isRequired,
  onImagePress: PropTypes.func,
  onImageUpload: PropTypes.func,
};

const defaultProps = {
  imageSelectedId: undefined,
  images: [],
  isImageUpload: true,
  onImagePress: undefined,
  onImageUpload: undefined,
};

export default class ImagePicker extends React.PureComponent {

  constructor(props) {
    super(props);
    this.onImagePress = this.onImagePress.bind(this);
  }

  onImagePress(imageId) {
    const { onImagePress } = this.props;
    if (!onImagePress) {
      return;
    }
    onImagePress(imageId);
  }

  render() {
    const {
      images,
      imageSelectedId,
      isImageUpload,
      renderUploadIcon,
      onImageUpload,
    } = this.props;
    return (
      <ImagePickerWrapper>
        {images.map(image => (
          <Image
            imageId={image.id}
            imageUrl={image.url}
            isSelected={image.id === imageSelectedId}
            key={image.id}
            onPress={this.onImagePress}
          />
        ))}
        {isImageUpload ? (
          <ImageUpload renderIcon={renderUploadIcon} onImageUpload={onImageUpload} />
        ) : null}
      </ImagePickerWrapper>
    );
  }
}

ImagePicker.propTypes = propTypes;
ImagePicker.defaultProps = defaultProps;
