import PropTypes from 'prop-types';
import React from 'react';
import IconMark from './components/IconMark';
import IconWrapper from './components/IconWrapper';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: undefined,
};

const NavBarIconNotification = ({ children }) => (
  <IconWrapper>
    {children}
    <IconMark />
  </IconWrapper>
);

NavBarIconNotification.propTypes = propTypes;
NavBarIconNotification.defaultProps = defaultProps;

export default NavBarIconNotification;
