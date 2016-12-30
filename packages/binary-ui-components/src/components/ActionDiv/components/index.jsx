import React from 'react';
import ActionDivRender from '../components-styled/ActionDivRender';

const propTypes = {
  isDisabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

const defaultProps = {};

const ActionDiv = ({ isDisabled, onClick, ...props }) => (
  <ActionDivRender
    isDisabled={isDisabled}
    onClick={!isDisabled && onClick}
    {...props}
  />
);

ActionDiv.propTypes = propTypes;
ActionDiv.defaultProps = defaultProps;

export default ActionDiv;
