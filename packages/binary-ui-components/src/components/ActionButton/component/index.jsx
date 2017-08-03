import PropTypes from 'prop-types';
import React from 'react';
import ActionButtonContent from './ActionButtonContent';
import ActionWrapper from '../../ActionWrapper';

const propTypes = {
  children: PropTypes.any,
  isDisabled: PropTypes.bool,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isDisabled: false,
  renderIconLeft: undefined,
  renderIconRight: undefined,
};

const ActionButton = ({
  children,
  isDisabled,
  renderIconLeft,
  renderIconRight,
  ...props,
}) => (
  <ActionWrapper isDisabled={isDisabled} {...props} >
    <ActionButtonContent
      isDisabled={isDisabled}
      renderIconLeft={renderIconLeft}
      renderIconRight={renderIconRight}
    >
      {children}
    </ActionButtonContent>
  </ActionWrapper>
);

ActionButton.propTypes = propTypes;
ActionButton.defaultProps = defaultProps;

export default ActionButton;
