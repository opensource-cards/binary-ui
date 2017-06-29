import PropTypes from 'prop-types';
import React from 'react';
import Image from './Image';
import ImageUpload from './ImageUpload';
import ImagePickerWrapper from '../components-styled/ImagePickerWrapper';

const propTypes = {
  imageUploadUrl: PropTypes.string.isRequired,
  imageFit: PropTypes.string,
  imageSelectedId: PropTypes.string,
  images: PropTypes.array,
  isImageUpload: PropTypes.bool,
  onImageClick: PropTypes.func,
  onImageUpload: PropTypes.func.isRequired,
};

const defaultProps = {
  imageFit: 'contain',
  images: [],
  isImageUpload: true,
  onImageClick: undefined,
};

export default class ImagePicker extends React.Component {

  constructor(props) {
    super(props);
    this.onImageClick = this.onImageClick.bind(this);
    this.onImageUpload = this.onImageUpload.bind(this);
  }

  onImageUpload(e) {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onload = (upload) => {
      const { onImageUpload } = this.props;
      onImageUpload(upload.target.result);
    };
    reader.readAsDataURL(file);
  }

  onImageClick(imageId) {
    const { onImageClick } = this.props;
    if (!onImageClick) {
      return;
    }
    onImageClick(imageId);
  }

  render() {
    const {
      images,
      imageUploadUrl,
      imageFit,
      imageSelectedId,
      isImageUpload,
    } = this.props;
    return (
      <ImagePickerWrapper>
        {images.map(image => (
          <Image
            imageFit={imageFit}
            imageId={image.id}
            imageUrl={image.url}
            isSelected={image.id === imageSelectedId}
            key={image.id}
            onImageClick={this.onImageClick}
          />
        ))}
        {isImageUpload ? (
          <ImageUpload imageUploadUrl={imageUploadUrl} onImageUpload={this.onImageUpload} />
        ) : null}
      </ImagePickerWrapper>
    );
  }
}

ImagePicker.propTypes = propTypes;
ImagePicker.defaultProps = defaultProps;
