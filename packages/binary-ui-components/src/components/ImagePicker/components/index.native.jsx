import PropTypes from 'prop-types';
import React from 'react';
import Image from './Image';
import ImageUpload from './ImageUpload';
import ImagePickerWrapper from '../components-styled/ImagePickerWrapper';

const propTypes = {
  imageSelectedId: PropTypes.string,
  images: PropTypes.array,
  isImageUpload: PropTypes.bool,
  onImageClick: PropTypes.func,
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
    this.onImageClick = this.onImageClick.bind(this);
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
      imageSelectedId,
      isImageUpload,
    } = this.props;
    return (
      <ImagePickerWrapper>
        {images.map(image => (
          <Image
            imageId={image.id}
            imageUrl={image.url}
            isSelected={image.id === imageSelectedId}
            key={image.id}
            onImageClick={this.onImageClick}
          />
        ))}
        {isImageUpload ? (
          <ImageUpload />
        ) : null}
      </ImagePickerWrapper>
    );
  }
}

ImagePicker.propTypes = propTypes;
ImagePicker.defaultProps = defaultProps;
