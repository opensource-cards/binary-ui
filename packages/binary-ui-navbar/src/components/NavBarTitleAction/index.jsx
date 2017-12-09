import PropTypes from 'prop-types';
import React from 'react';
import NavBarTitleIcon from './components-styled/NavBarTitleIcon';
import NavBarTitleText from './components-styled/NavBarTitleText';
import NavBarTitleWrapperActionable from './components-styled/NavBarTitleWrapperActionable';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: undefined,
};

const NavBarTitleAction = ({ children, ...props }) => (
  <NavBarTitleWrapperActionable {...props}>
    <NavBarTitleText>{children}</NavBarTitleText>
    <NavBarTitleIcon size={15} />
  </NavBarTitleWrapperActionable>
);

NavBarTitleAction.propTypes = propTypes;
NavBarTitleAction.defaultProps = defaultProps;

export default NavBarTitleAction;
