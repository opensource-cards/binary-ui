import { BINARY_COLOR_BLUE_50, OPACITY_ACTIVE } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import IconDoneStyled from './components-styled/IconDoneStyled/index.native';
import ImageStyled from './components-styled/ImageStyled/index.native';
import ImageContent from '../../components-styled/ImageContent';
import { PHOTO_SIZE } from '../../utils/styles.native-and-web';

const propTypes = {
  imageFit: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onPress: PropTypes.func,
};

const defaultProps = {
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

  render() {
    const { imageFit, imageUrl, isSelected } = this.props;
    return (
      <ImageContent activeOpacity={OPACITY_ACTIVE} onPress={this.onPress} >
        <ImageStyled
          borderRadius={PHOTO_SIZE / 2}
          resizeMode={imageFit}
          source={{ uri: imageUrl }}
        />
        {isSelected ? (
          <IconDoneStyled color={BINARY_COLOR_BLUE_50} size={40} />
        ) : null}
      </ImageContent>
    );
  }
}

ImageRead.propTypes = propTypes;
ImageRead.defaultProps = defaultProps;
