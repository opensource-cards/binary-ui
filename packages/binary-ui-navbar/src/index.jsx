import PropTypes from 'prop-types';
import React from 'react';
import NavBarIconButton from './components-styled/NavBarIconButton';
import NavBarIconPlaceholder from './components-styled/NavBarIconPlaceholder';
import NavBarTitle from './components/NavBarTitle';
import NavBarWrapper from './components-styled/NavBarWrapper';

const propTypes = {
  headerButtonLeft: PropTypes.object,
  headerButtonRight: PropTypes.object,
  headerStyle: PropTypes.object,
  headerTitle: PropTypes.object,
};

const defaultProps = {
  headerButtonLeft: {},
  headerButtonRight: {},
  headerStyle: undefined,
  headerTitle: {},
};

const NavBar = ({
  headerButtonLeft,
  headerButtonRight,
  headerStyle,
  headerTitle,
}) => (
  <NavBarWrapper style={headerStyle}>
    {headerButtonLeft.renderIcon ? (
      <NavBarIconButton {...headerButtonLeft} />
    ) : (
      <NavBarIconPlaceholder />
    )}
    <NavBarTitle {...headerTitle} />
    {headerButtonRight.renderIcon ? (
      <NavBarIconButton {...headerButtonRight} />
    ) : (
      <NavBarIconPlaceholder />
    )}
  </NavBarWrapper>
);

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default NavBar;
