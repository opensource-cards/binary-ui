import autobind from 'autobind-decorator';
import React from 'react';
import PhotoContent from '../../components-styled/PhotoContent';
import PhotoCheckmark from '../../components-styled/PhotoCheckmark';

const propTypes = {
  id: React.PropTypes.string.isRequired,
  photoFit: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool.isRequired,
  url: React.PropTypes.string.isRequired,
  onPhotoClick: React.PropTypes.func,
};

const defaultProps = {};

export default class Photo extends React.Component {

  @autobind
  onPhotoClick() {
    const { id, onPhotoClick } = this.props;
    if (onPhotoClick) {
      onPhotoClick(id);
    }
  }

  renderSelectedCoverIfNeed() {
    const { selected } = this.props;
    if (!selected) {
      return null;
    }
    return (<PhotoCheckmark />);
  }

  render() {
    const { photoFit, url } = this.props;
    return (
      <PhotoContent
        url={url}
        photoFit={photoFit}
        onClick={this.onPhotoClick}
      >
        {this.renderSelectedCoverIfNeed()}
      </PhotoContent>
    );
  }
}

Photo.propTypes = propTypes;
Photo.defaultProps = defaultProps;
