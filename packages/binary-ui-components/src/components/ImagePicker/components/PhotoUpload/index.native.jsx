import ImagePicker from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native';
import React from 'react';
import StyledImage from '../../components-styled/StyledImage';

const propTypes = {
  noImageUrl: React.PropTypes.string.isRequired,
  onPhotoAdd: React.PropTypes.func.isRequired,
};

const defaultProps = {};

export default class PhotoUpload extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { onPhotoAdd } = this.props;
    ImagePicker.showImagePicker({
      title: 'Select picture',
      storageOptions: {},
    }, (response) => {
      if (response.didCancel) {
        // console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else {
        onPhotoAdd(response);
      }
    });
  }

  render() {
    const { noImageUrl } = this.props;
    return (
      <TouchableOpacity onPress={this.onClick} >
        <StyledImage source={{ uri: noImageUrl }} />
      </TouchableOpacity>
    );
  }
}

PhotoUpload.propTypes = propTypes;
PhotoUpload.defaultProps = defaultProps;
