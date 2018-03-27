import { BINARY_COLOR_SAND_90 } from 'binary-ui-styles';
import PropTypes from 'prop-types';

const propTypes = {
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {};

const ImageUploadIcon = ({ renderIcon }) => (
  renderIcon({
    color: BINARY_COLOR_SAND_90,
    size: 36,
  })
);

ImageUploadIcon.propTypes = propTypes;
ImageUploadIcon.defaultProps = defaultProps;

export default ImageUploadIcon;
