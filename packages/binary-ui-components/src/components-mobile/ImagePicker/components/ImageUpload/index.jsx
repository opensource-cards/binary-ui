import PropTypes from 'prop-types';
import React from 'react';
import ImageUploadInput from './components-styled/ImageUploadInput';
import ImageUploadIcon from '../ImageUploadIcon';
import ImageUploadWrapper from '../../components-styled/ImageUploadWrapper';

const propTypes = {
  renderIcon: PropTypes.func.isRequired,
  onImageUpload: PropTypes.func.isRequired,
};

const defaultProps = {};

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.onDivClick = this.onDivClick.bind(this);
    this.onLoaderClick = this.onLoaderClick.bind(this);
    this.onImageUpload = this.onImageUpload.bind(this);
    this.onSetLoaderRef = this.onSetLoaderRef.bind(this);
  }

  onDivClick() {
    this.loader.click();
  }

  onLoaderClick() {
    this.loader.value = null;
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

  onSetLoaderRef(loader) {
    this.loader = loader;
  }

  render() {
    const { renderIcon } = this.props;
    return (
      <ImageUploadWrapper imageUploadUrl={renderIcon} onClick={this.onDivClick} >
        <ImageUploadInput
          accept="image/*"
          innerRef={this.onSetLoaderRef}
          type="file"
          onClick={this.onLoaderClick}
          onChange={this.onImageUpload}
        />
        <ImageUploadIcon renderIcon={renderIcon} />
      </ImageUploadWrapper>
    );
  }
}

ImageUpload.propTypes = propTypes;
ImageUpload.defaultProps = defaultProps;
