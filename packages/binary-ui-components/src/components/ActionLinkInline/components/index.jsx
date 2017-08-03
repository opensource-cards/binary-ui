import { BINARY_COLOR_BLUE_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import ActionLinkInlineContent from './ActionLinkInlineContent';
import ActionWrapper from '../../ActionWrapper';

const propTypes = {
  children: PropTypes.any,
  isDisabled: PropTypes.bool,
  size: PropTypes.number,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isDisabled: false,
  size: undefined,
  renderIconLeft: undefined,
  renderIconRight: undefined,
};

const ActionLinkInline = ({
  children,
  isDisabled,
  renderIconLeft,
  renderIconRight,
  ...props,
}) => (
  <ActionWrapper isDisabled={isDisabled} {...props} >
    <ActionLinkInlineContent
      color={BINARY_COLOR_BLUE_40}
      isDisabled={isDisabled}
      renderIconLeft={renderIconLeft}
      renderIconRight={renderIconRight}
    >
      {children}
    </ActionLinkInlineContent>
  </ActionWrapper>
);

ActionLinkInline.propTypes = propTypes;
ActionLinkInline.defaultProps = defaultProps;

export default ActionLinkInline;
