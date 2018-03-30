import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import ImageUploadIcon from '../ImageUploadIcon';
import ImageUploadWrapper from '../../components-styled/ImageUploadWrapper';

const propTypes = {
  theme: PropTypes.object.isRequired,
  renderIcon: PropTypes.func.isRequired,
  onImageUpload: PropTypes.func.isRequired,
};

const defaultProps = {};

const ImageUpload = ({ theme, renderIcon, onImageUpload }) => (
  <ImageUploadWrapper activeOpacity={theme.opacityActive} onPress={onImageUpload} >
    <ImageUploadIcon renderIcon={renderIcon} />
  </ImageUploadWrapper>
);

ImageUpload.propTypes = propTypes;
ImageUpload.defaultProps = defaultProps;

export default withTheme(ImageUpload);
