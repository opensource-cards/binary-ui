import { BINARY_COLOR_BLUE_50, BINARY_COLOR_SAND_90, OPACITY_ACTIVE } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import IconDone from './components-styled/IconDone';
import IconSpinner from './components-styled/IconSpinner';
import ImageStyled from './components-styled/ImageStyled/index.native';
import ImageContent from '../../components-styled/ImageContent';
import { PHOTO_SIZE } from '../../utils/styles.native-and-web';

const propTypes = {
  imageFit: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  isSelected: PropTypes.bool.isRequired,
  onPress: PropTypes.func,
};

const defaultProps = {
  isLoading: false,
  onPress: undefined,
};

export default class ImageRead extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { imageId, onPress } = this.props;
    if (onPress) {
      onPress(imageId);
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
      <ImageContent activeOpacity={OPACITY_ACTIVE} onPress={this.onPress} >
        <ImageStyled
          borderRadius={PHOTO_SIZE / 2}
          resizeMode={imageFit}
          source={{ uri: imageUrl }}
        />
        {this.renderIcon()}
      </ImageContent>
    );
  }
}

ImageRead.propTypes = propTypes;
ImageRead.defaultProps = defaultProps;
