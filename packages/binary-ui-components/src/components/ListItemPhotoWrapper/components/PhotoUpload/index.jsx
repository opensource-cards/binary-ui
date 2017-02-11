import React from 'react';
import PhotoUploadInput from '../../components-styled/PhotoUploadInput';
import PhotoUploadWrapper from '../../components-styled/PhotoUploadWrapper';

const propTypes = {
  noImageUrl: React.PropTypes.string.isRequired,
  onPhotoAdd: React.PropTypes.func.isRequired,
};

const defaultProps = {};

export default class PhotoUpload extends React.Component {

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
    const { noImageUrl, onPhotoAdd } = this.props;
    return (
      <PhotoUploadWrapper
        noImageUrl={noImageUrl}
        onClick={this.onDivClick}
      >
        <PhotoUploadInput
          innerRef={this.setLoaderRef}
          type="file"
          onClick={this.onLoaderClick}
          onChange={onPhotoAdd}
        />
      </PhotoUploadWrapper>
    );
  }
}

PhotoUpload.propTypes = propTypes;
PhotoUpload.defaultProps = defaultProps;
