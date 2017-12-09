import PropTypes from 'prop-types';
import React from 'react';
import NavBarIconButton from './components-styled/NavBarIconButton';
import NavBarPlaceholder from './components-styled/NavBarPlaceholder';
import NavBarWrapper from './components-styled/NavBarWrapper';

const propTypes = {
  children: PropTypes.node,
  headerButtonLeft: PropTypes.object,
  headerButtonRight: PropTypes.object,
  headerButtonRightSecondary: PropTypes.object,
  headerStyle: PropTypes.object,
};

const defaultProps = {
  children: null,
  headerButtonLeft: {},
  headerButtonRight: {},
  headerButtonRightSecondary: {},
  headerStyle: undefined,
};

const NavBar = ({
  children,
  headerButtonLeft,
  headerButtonRight,
  headerButtonRightSecondary,
  headerStyle,
}) => (
  <NavBarWrapper style={headerStyle}>
    {headerButtonLeft.renderIcon ? (
      <NavBarIconButton {...headerButtonLeft} />
    ) : <NavBarPlaceholder />}
    {children}
    {headerButtonRightSecondary.renderIcon ? (
      <NavBarIconButton {...headerButtonRightSecondary} />
    ) : null}
    {headerButtonRight.renderIcon ? (
      <NavBarIconButton {...headerButtonRight} />
    ) : null}
  </NavBarWrapper>
);

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default NavBar;
