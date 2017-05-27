import PropTypes from 'prop-types';
import React from 'react';
import uuid from 'uuid';
import Photo from './Photo';
import PhotoUpload from './PhotoUpload';
import ListItemPhotoWrapperWrapper from '../components-styled/ListItemPhotoWrapperWrapper';

const propTypes = {
  isSelectable: PropTypes.bool,
  limit: PropTypes.number,
  noImageUrl: PropTypes.string.isRequired,
  photoFit: PropTypes.string,
  selectedPhotoGuid: PropTypes.string,
  uploadedPhotos: PropTypes.array,
  onPhotoClick: PropTypes.func,
  onPhotoUpload: PropTypes.func.isRequired,
};

const defaultProps = {
  isSelectable: true,
  photoFit: 'contain',
  uploadedPhotos: [],
  onPhotoClick: undefined,
};

export default class ListItemPhotoWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.onPhotoAdd = this.onPhotoAdd.bind(this);
  }

  onPhotoAdd(e) {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onload = (upload) => {
      const newPhoto = {
        url: upload.target.result,
        guid: uuid.v1(),
      };
      this.props.onPhotoUpload(newPhoto);
    };
    reader.readAsDataURL(file);
  }

  getOnPhotoClick(photoGuid) {
    return () => {
      const { onPhotoClick } = this.props;
      if (!onPhotoClick) {
        return;
      }
      onPhotoClick(photoGuid);
    };
  }

  renderNodes() {
    const {
      isSelectable,
      photoFit,
      selectedPhotoGuid,
      uploadedPhotos,
    } = this.props;
    return uploadedPhotos.map((photo) => {
      const selected = isSelectable && photo.guid === selectedPhotoGuid;
      return (
        <Photo
          key={photo.guid}
          photoFit={photoFit}
          selected={selected}
          url={photo.url}
          onPhotoClick={this.getOnPhotoClick(photo.guid)}
        />
      );
    });
  }

  renderPhotoUpload() {
    const { limit, noImageUrl, uploadedPhotos } = this.props;
    if (uploadedPhotos.length >= limit) {
      return null;
    }
    return (
      <PhotoUpload noImageUrl={noImageUrl} onPhotoAdd={this.onPhotoAdd} />
    );
  }

  render() {
    return (
      <ListItemPhotoWrapperWrapper>
        {this.renderNodes()}
        {this.renderPhotoUpload()}
      </ListItemPhotoWrapperWrapper>
    );
  }
}

ListItemPhotoWrapper.propTypes = propTypes;
ListItemPhotoWrapper.defaultProps = defaultProps;
