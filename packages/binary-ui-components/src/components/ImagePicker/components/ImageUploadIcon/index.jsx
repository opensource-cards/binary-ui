import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {};

export default class ImageUploadIcon extends React.PureComponent {
  render() {
    const { renderIcon } = this.props;
    const element = renderIcon();
    return (
      React.cloneElement(element, {
        ...element.props,
        color: '#aeaeae',
        size: 30,
      })
    );
  }
}

ImageUploadIcon.propTypes = propTypes;
ImageUploadIcon.defaultProps = defaultProps;
