import PropTypes from 'prop-types';
import React from 'react';
import NavBarTitleWrapperText from './components-styled/NavBarTitleWrapperText';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: undefined,
};

const NavBarTitleText = ({ children, ...props }) => (
  <NavBarTitleWrapperText {...props}>
    {children}
  </NavBarTitleWrapperText>
);

NavBarTitleText.propTypes = propTypes;
NavBarTitleText.defaultProps = defaultProps;

export default NavBarTitleText;
