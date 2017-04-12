import React from 'react';

const propTypes = {
  style: React.PropTypes.object,
  renderIcon: React.PropTypes.func.isRequired,
};

const defaultProps = {};

const ActionIconWrapper = ({ style, renderIcon, ...props }) => (
  React.cloneElement(renderIcon(), {
    style,
    ...props,
  })
);

ActionIconWrapper.defaultProps = defaultProps;
ActionIconWrapper.propTypes = propTypes;

export default ActionIconWrapper;
