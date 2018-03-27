import { BINARY_COLOR_BLUE_50, BINARY_COLOR_SAND_90 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import IconDone from './components-styled/IconDone';
import IconSpinner from './components-styled/IconSpinner';
import ImageContent from '../../components-styled/ImageContent';

const propTypes = {
  imageFit: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  isLoading: false,
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

  renderIcon() {
    const { isLoading, isSelected } = this.props;
    if (isLoading) {
      return <IconSpinner color={BINARY_COLOR_SAND_90} size={20} />;
    }
    if (isSelected) {
      return <IconDone color={BINARY_COLOR_BLUE_50} size={36} />;
    }
    return null;
  }

  render() {
    const { imageFit, imageUrl } = this.props;
    return (
      <ImageContent imageFit={imageFit} imageUrl={imageUrl} onClick={this.onClick} >
        {this.renderIcon()}
      </ImageContent>
    );
  }
}

ImageRead.propTypes = propTypes;
ImageRead.defaultProps = defaultProps;
