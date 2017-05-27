import PropTypes from 'prop-types';
import React from 'react';
import PhotoContent from '../../components-styled/PhotoContent';
import PhotoCheckmark from '../../components-styled/PhotoCheckmark';

const propTypes = {
  photoFit: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  onPhotoClick: PropTypes.func,
};

const defaultProps = {};

export default class Photo extends React.Component {

  constructor(props) {
    super(props);
    this.onPhotoClick = this.onPhotoClick.bind(this);
  }

  onPhotoClick() {
    const { onPhotoClick } = this.props;
    if (onPhotoClick) {
      onPhotoClick();
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
