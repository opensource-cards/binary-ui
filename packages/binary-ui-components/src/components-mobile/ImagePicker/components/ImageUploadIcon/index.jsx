import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

const propTypes = {
  theme: PropTypes.object.isRequired,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {};

const ImageUploadIcon = ({ theme, renderIcon }) => (
  renderIcon({
    color: theme.colorBackgroundMain,
    size: 36,
  })
);

ImageUploadIcon.propTypes = propTypes;
ImageUploadIcon.defaultProps = defaultProps;

export default withTheme(ImageUploadIcon);
