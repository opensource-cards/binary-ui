import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import ImageUploadInput from './components-styled/ImageUploadInput';
import ImageUploadWrapper from '../../components-styled/ImageUploadWrapper';

const propTypes = {
  theme: PropTypes.object.isRequired,
  renderIcon: PropTypes.func.isRequired,
  onImageUpload: PropTypes.func.isRequired,
};

const defaultProps = {};

class ImageUpload extends React.Component {
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
    const { theme, renderIcon } = this.props;
    return (
      <ImageUploadWrapper imageUploadUrl={renderIcon} onClick={this.onDivClick} >
        <ImageUploadInput
          accept="image/*"
          innerRef={this.onSetLoaderRef}
          type="file"
          onClick={this.onLoaderClick}
          onChange={this.onImageUpload}
        />
        {renderIcon({
          color: theme.colorBackgroundMain,
          size: 36,
        })}
      </ImageUploadWrapper>
    );
  }
}

ImageUpload.propTypes = propTypes;
ImageUpload.defaultProps = defaultProps;

export default withTheme(ImageUpload);
