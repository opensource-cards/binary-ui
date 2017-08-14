import IconDone from 'binary-ui-icons/binary/Done';
import PropTypes from 'prop-types';
import React from 'react';
import ImageContent from '../../components-styled/ImageContent';

const propTypes = {
  imageFit: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: undefined,
};

export default class Image extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { imageId, onClick } = this.props;
    if (onClick) {
      onClick(imageId);
    }
  }

  render() {
    const { imageFit, imageUrl, isSelected } = this.props;
    return (
      <ImageContent imageFit={imageFit} imageUrl={imageUrl} onClick={this.onClick} >
        {isSelected ? (
          <IconDone size={40} color="#FFF" />
        ) : null}
      </ImageContent>
    );
  }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;
