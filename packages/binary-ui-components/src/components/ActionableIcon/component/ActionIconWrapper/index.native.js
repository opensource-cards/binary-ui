import React from 'react';

const propTypes = {
  IconComponent: React.PropTypes.func,
};

const defaultProps = {};

const ActionIconWrapper = ({ IconComponent, ...props }) => (
  <IconComponent {...props} />
);

ActionIconWrapper.defaultProps = defaultProps;
ActionIconWrapper.propTypes = propTypes;

export default ActionIconWrapper;
