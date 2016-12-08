import { NO_SELECT_STYLE } from 'binary-ui-styles/web';
import React from 'react';

const propTypes = {
  style: React.PropTypes.object,
  IconComponent: React.PropTypes.func,
};

const defaultProps = {};

const ActionIconWrapper = ({ style, IconComponent, ...props }) => {
  const styleMerged = Object.assign({}, style, NO_SELECT_STYLE);
  return (
    <IconComponent style={styleMerged} {...props} />
  );
};

ActionIconWrapper.defaultProps = defaultProps;
ActionIconWrapper.propTypes = propTypes;

export default ActionIconWrapper;
