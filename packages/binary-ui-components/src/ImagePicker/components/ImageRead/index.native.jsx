
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
  onPress: PropTypes.func,
  renderImage: PropTypes.func.isRequired,
};

const defaultProps = {
  isLoading: false,
  onPress: undefined,
};

class ImageRead extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { imageId, isLoading, onPress } = this.props;
    // Ignore click if image is loading.
    if (isLoading) {
      return;
    }
    if (onPress) {
      onPress(imageId);
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
    const { imageUrl, isLoading, theme, renderImage } = this.props;
    return isLoading ? (
      <ImageContent.View>
        {renderImage({ isLoading, radius: PHOTO_SIZE / 2, url: imageUrl })}
        {this.renderIcon()}
      </ImageContent.View>
    ) : (
      <ImageContent.TouchableOpacity
        activeOpacity={theme.opacityActive}
        onPress={this.onPress}
      >
        {renderImage({ isLoading, radius: PHOTO_SIZE / 2, url: imageUrl })}
        {this.renderIcon()}
      </ImageContent.TouchableOpacity>
    );
  }
}

ImageRead.propTypes = propTypes;
ImageRead.defaultProps = defaultProps;

export default withTheme(ImageRead);
