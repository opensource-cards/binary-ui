import PropTypes from 'prop-types';
import React from 'react';
import ImageContent from '../../components-styled/ImageContent';
import ImageCheckmark from '../../components-styled/ImageCheckmark';

const propTypes = {
  imageFit: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onImageClick: PropTypes.func,
};

const defaultProps = {
  onImageClick: undefined,
};

export default class Image extends React.Component {

  constructor(props) {
    super(props);
    this.onImageClick = this.onImageClick.bind(this);
  }

  onImageClick() {
    const { imageId, onImageClick } = this.props;
    if (onImageClick) {
      onImageClick(imageId);
    }
  }

  render() {
    const { imageFit, imageUrl, isSelected } = this.props;
    return (
      <ImageContent imageFit={imageFit} imageUrl={imageUrl} onClick={this.onImageClick} >
        {isSelected ? (<ImageCheckmark />) : null}
      </ImageContent>
    );
  }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;
