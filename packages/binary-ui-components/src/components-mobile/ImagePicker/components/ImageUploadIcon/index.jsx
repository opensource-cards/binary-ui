import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {};

const ImageUploadIcon = ({ renderIcon }) => (
  React.cloneElement(renderIcon(), {
    color: '#aeaeae',
    size: 30,
  })
);

ImageUploadIcon.propTypes = propTypes;
ImageUploadIcon.defaultProps = defaultProps;

export default ImageUploadIcon;
