import PropTypes from 'prop-types';
import React from 'react';
import ImageRead from './ImageRead';
import ImageUpload from './ImageUpload';
import ImagePickerWrapper from '../components-styled/ImagePickerWrapper';

const propTypes = {
  imageSelectedId: PropTypes.string,
  images: PropTypes.array,
  isImageUpload: PropTypes.bool,
  renderImage: PropTypes.func.isRequired,
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

class ImagePicker extends React.Component {
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
      renderImage,
      renderUploadIcon,
      onImageUpload,
    } = this.props;
    return (
      <ImagePickerWrapper>
        {images.map(image => (
          <ImageRead
            imageId={image.id}
            imageUrl={image.url}
            isLoading={image.isLoading}
            isSelected={image.id === imageSelectedId}
            key={image.id}
            renderImage={renderImage}
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

export default ImagePicker;
