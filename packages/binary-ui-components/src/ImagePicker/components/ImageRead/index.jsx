import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import IconDone from './components-styled/IconDone';
import IconSpinner from './components-styled/IconSpinner';
import ImageContent from './components-styled/ImageContent';
import { PHOTO_SIZE } from '../../utils/styles.native-and-web';

const propTypes = {
  imageId: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  isSelected: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  renderImage: PropTypes.func.isRequired,
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
    const { imageUrl, isLoading, renderImage } = this.props;
    return (
      <ImageContent
        imageUrl={imageUrl}
        onClick={this.onClick}
      >
        {renderImage({ isLoading, radius: PHOTO_SIZE / 2, url: imageUrl })}
        {this.renderIcon()}
      </ImageContent>
    );
  }
}

ImageRead.propTypes = propTypes;
ImageRead.defaultProps = defaultProps;

export default withTheme(ImageRead);
