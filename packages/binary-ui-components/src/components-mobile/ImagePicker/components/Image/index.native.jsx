import IconDone from 'binary-ui-icons/binary/Done';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import ImageContent from '../../components-styled/ImageContent';
import { PHOTO_SIZE } from '../../utils/styles.native-and-web';

const propTypes = {
  imageId: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onPress: PropTypes.func,
};

const defaultProps = {
  onPress: undefined,
};

export default class Image extends React.Component {

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
    const { imageUrl, isSelected } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={this.onPress} >
        <ImageContent borderRadius={PHOTO_SIZE / 2} source={{ uri: imageUrl }} >
          {isSelected ? (
            <IconDone size={40} color="#FFF" />
          ) : null}
        </ImageContent>
      </TouchableOpacity>
    );
  }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;
