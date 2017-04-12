import { NO_SELECT_STYLE } from 'binary-ui-styles/web';
import React from 'react';

const propTypes = {
  style: React.PropTypes.object,
  renderIcon: React.PropTypes.func.isRequired,
};

const defaultProps = {};

const ActionIconWrapper = ({ style, renderIcon, ...props }) => (
  React.cloneElement(renderIcon(), {
    style: Object.assign({}, NO_SELECT_STYLE, style),
    ...props,
  })
);

ActionIconWrapper.defaultProps = defaultProps;
ActionIconWrapper.propTypes = propTypes;

export default ActionIconWrapper;
