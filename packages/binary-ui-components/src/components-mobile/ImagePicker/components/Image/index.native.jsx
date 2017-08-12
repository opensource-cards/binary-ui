import IconDone from 'binary-ui-icons/binary/Done';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import ImageContent from '../../components-styled/ImageContent';

const propTypes = {
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
    const { imageUrl, isSelected } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={this.onClick} >
        <ImageContent source={{ uri: imageUrl }} >
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
