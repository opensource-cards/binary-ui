import PropTypes from 'prop-types';
import React from 'react';
import ActionLinkContent from './ActionLinkContent';
import ActionWrapper from '../../../components/ActionWrapper';

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

const ActionLink = ({
  children,
  isDisabled,
  renderIconLeft,
  renderIconRight,
  ...props,
}) => (
  <ActionWrapper isDisabled={isDisabled} {...props} >
    <ActionLinkContent
      isDisabled={isDisabled}
      renderIconLeft={renderIconLeft}
      renderIconRight={renderIconRight}
    >
      {children}
    </ActionLinkContent>
  </ActionWrapper>
);

ActionLink.propTypes = propTypes;
ActionLink.defaultProps = defaultProps;

export default ActionLink;
