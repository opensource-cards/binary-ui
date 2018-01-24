import PropTypes from 'prop-types';
import React from 'react';
import ActionLinkWrapper from '../components-styled/ActionLinkWrapper';

const propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};

const defaultProps = {
  children: undefined,
  href: undefined,
};

const ActionLink = ({ children, href, ...props }) => (
  <ActionLinkWrapper href={href} {...props} >
    {children}
  </ActionLinkWrapper>
);

ActionLink.propTypes = propTypes;
ActionLink.defaultProps = defaultProps;

export default ActionLink;
