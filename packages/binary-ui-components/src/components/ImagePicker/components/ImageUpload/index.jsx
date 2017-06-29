import PropTypes from 'prop-types';
import React from 'react';
import ImageUploadInput from '../../components-styled/ImageUploadInput';
import ImageUploadWrapper from '../../components-styled/ImageUploadWrapper';

const propTypes = {
  imageUploadUrl: PropTypes.string.isRequired,
  onImageUpload: PropTypes.func.isRequired,
};

const defaultProps = {};

export default class ImageUpload extends React.Component {

  constructor(props) {
    super(props);
    this.onDivClick = this.onDivClick.bind(this);
    this.onLoaderClick = this.onLoaderClick.bind(this);
    this.setLoaderRef = this.setLoaderRef.bind(this);
  }

  onDivClick() {
    this.loader.click();
  }

  onLoaderClick() {
    this.loader.value = null;
  }

  setLoaderRef(loader) {
    this.loader = loader;
  }

  render() {
    const { imageUploadUrl, onImageUpload } = this.props;
    return (
      <ImageUploadWrapper imageUploadUrl={imageUploadUrl} onClick={this.onDivClick} >
        <ImageUploadInput
          accept="image/*"
          innerRef={this.setLoaderRef}
          type="file"
          onClick={this.onLoaderClick}
          onChange={onImageUpload}
        />
      </ImageUploadWrapper>
    );
  }
}

ImageUpload.propTypes = propTypes;
ImageUpload.defaultProps = defaultProps;
