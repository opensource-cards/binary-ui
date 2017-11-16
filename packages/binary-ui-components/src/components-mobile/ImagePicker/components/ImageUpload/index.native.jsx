import PropTypes from 'prop-types';
import React from 'react';
import ImageUploadIcon from '../ImageUploadIcon';
import ImageUploadWrapper from '../../components-styled/ImageUploadWrapper';

const propTypes = {
  renderIcon: PropTypes.func.isRequired,
  onImageUpload: PropTypes.func.isRequired,
};

const defaultProps = {};

const ImageUpload = ({ renderIcon, onImageUpload }) => (
  <ImageUploadWrapper activeOpacity={0.5} onPress={onImageUpload} >
    <ImageUploadIcon renderIcon={renderIcon} />
  </ImageUploadWrapper>
);

ImageUpload.propTypes = propTypes;
ImageUpload.defaultProps = defaultProps;

export default ImageUpload;
