import { OPACITY_ACTIVE } from 'binary-ui-styles';
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
  <ImageUploadWrapper activeOpacity={OPACITY_ACTIVE} onPress={onImageUpload} >
    <ImageUploadIcon renderIcon={renderIcon} />
  </ImageUploadWrapper>
);

ImageUpload.propTypes = propTypes;
ImageUpload.defaultProps = defaultProps;

export default ImageUpload;
