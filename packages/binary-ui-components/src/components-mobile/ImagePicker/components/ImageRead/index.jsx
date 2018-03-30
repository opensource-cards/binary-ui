import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import IconDone from './components-styled/IconDone';
import IconSpinner from './components-styled/IconSpinner';
import ImageContent from './components-styled/ImageContent';

const propTypes = {
  imageFit: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  isSelected: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  isLoading: false,
  onClick: undefined,
};

class ImageRead extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { imageId, isLoading, onClick } = this.props;
    // Ignore click if image is loading.
    if (isLoading) {
      return;
    }
    if (onClick) {
      onClick(imageId);
    }
  }

  renderIcon() {
    const { isLoading, isSelected, theme } = this.props;
    if (isLoading) {
      return <IconSpinner color={theme.colorBackgroundMain} size={20} />;
    }
    if (isSelected) {
      return <IconDone color={theme.colorBlue50} size={36} />;
    }
    return null;
  }

  render() {
    const { imageFit, imageUrl, isLoading } = this.props;
    return (
      <ImageContent
        imageFit={imageFit}
        imageUrl={imageUrl}
        isLoading={isLoading}
        onClick={this.onClick}
      >
        {this.renderIcon()}
      </ImageContent>
    );
  }
}

ImageRead.propTypes = propTypes;
ImageRead.defaultProps = defaultProps;

export default withTheme(ImageRead);
