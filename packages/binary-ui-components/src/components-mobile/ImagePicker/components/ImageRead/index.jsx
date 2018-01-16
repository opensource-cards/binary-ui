import IconDone from 'binary-ui-icons/binary/Done';
import { BINARY_COLOR_BLUE_50 } from 'binary-ui-styles';
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

export default class ImageRead extends React.Component {

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
          <IconDone color={BINARY_COLOR_BLUE_50} size={40} />
        ) : null}
      </ImageContent>
    );
  }
}

ImageRead.propTypes = propTypes;
ImageRead.defaultProps = defaultProps;
