import React from 'react';
import uuid from 'uuid';
import Photo from '../Photo';
import PhotoUpload from '../PhotoUpload';
import ListItemPhotoWrapperWrapper from '../../components-styled/ListItemPhotoWrapperWrapper';

const propTypes = {
  isSelectable: React.PropTypes.bool,
  limit: React.PropTypes.number,
  noImageUrl: React.PropTypes.string.isRequired,
  photoFit: React.PropTypes.string,
  selectedPhotoGuid: React.PropTypes.string,
  uploadedPhotos: React.PropTypes.array,
  onPhotoClick: React.PropTypes.func,
  onPhotoUpload: React.PropTypes.func,
};

const defaultProps = {
  isSelectable: true,
  photoFit: 'contain',
  uploadedPhotos: [],
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

  renderNodes() {
    const {
      isSelectable,
      photoFit,
      selectedPhotoGuid,
      uploadedPhotos,
      onPhotoClick,
    } = this.props;
    return uploadedPhotos.map((photo) => {
      const selected = isSelectable && photo.guid === selectedPhotoGuid;
      return (
        <Photo
          key={photo.guid}
          photoFit={photoFit}
          selected={selected}
          url={photo.url}
          onPhotoClick={() => onPhotoClick(photo.guid)}
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
