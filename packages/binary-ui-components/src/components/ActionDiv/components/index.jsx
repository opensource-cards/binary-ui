import PropTypes from 'prop-types';
import React from 'react';
import ActionDivRender from '../components-styled/ActionDivRender';

const propTypes = {
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  isDisabled: undefined,
  onClick: undefined,
};

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
