import IconDone from 'binary-ui-icons/binary/Done';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import ImageContent from '../../components-styled/ImageContent';

const propTypes = {
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
    const { imageUrl, isSelected } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={this.onImageClick} >
        <ImageContent
          source={{ uri: imageUrl }}
          style={{ width: 60, height: 60 }}
        >
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
