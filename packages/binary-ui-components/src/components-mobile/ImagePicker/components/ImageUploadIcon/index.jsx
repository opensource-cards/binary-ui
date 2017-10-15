import PropTypes from 'prop-types';

const propTypes = {
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {};

const ImageUploadIcon = ({ renderIcon }) => (
  renderIcon({
    color: '#aeaeae',
    size: 30,
  })
);

ImageUploadIcon.propTypes = propTypes;
ImageUploadIcon.defaultProps = defaultProps;

export default ImageUploadIcon;
