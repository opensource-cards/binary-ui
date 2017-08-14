import PropTypes from 'prop-types';
import React from 'react';
import ImageUploadIcon from '../ImageUploadIcon';
import { TouchableOpacity } from 'react-native';
import ImageUploadWrapper from '../../components-styled/ImageUploadWrapper';

const propTypes = {
  renderIcon: PropTypes.func.isRequired,
  onImageUpload: PropTypes.func.isRequired,
};

const defaultProps = {};

const ImageUpload = ({ renderIcon, onImageUpload }) => (
  <TouchableOpacity activeOpacity={0.5} onPress={onImageUpload} >
    <ImageUploadWrapper>
      <ImageUploadIcon renderIcon={renderIcon} />
    </ImageUploadWrapper>
  </TouchableOpacity>
);

ImageUpload.propTypes = propTypes;
ImageUpload.defaultProps = defaultProps;

export default ImageUpload;
