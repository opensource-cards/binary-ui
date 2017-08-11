import PropTypes from 'prop-types';
import React from 'react';
import ImageUploadIcon from '../ImageUploadIcon';
import { TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ImageUploadWrapper from '../../components-styled/ImageUploadWrapper';

const propTypes = {
  renderIcon: PropTypes.func.isRequired,
  onImageUpload: PropTypes.func.isRequired,
};

const defaultProps = {};

export default class ImageUpload extends React.Component {

  constructor(props) {
    super(props);
    this.onImageUpload = this.onImageUpload.bind(this);
  }

  onImageUpload() {
    const { onImageUpload } = this.props;
    ImagePicker.showImagePicker({
      title: 'Select Image',
      customButtons: [],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }, (response) => {
      if (response.didCancel) {
        return;
      }
      if (response.error) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(response.error);
        }
        return;
      }
      onImageUpload(`data:image/jpeg;base64,${response.data}`);
    });
  }

  render() {
    const { renderIcon } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={this.onImageUpload} >
        <ImageUploadWrapper>
          <ImageUploadIcon renderIcon={renderIcon} />
        </ImageUploadWrapper>
      </TouchableOpacity>
    );
  }
}  

ImageUpload.propTypes = propTypes;
ImageUpload.defaultProps = defaultProps;
