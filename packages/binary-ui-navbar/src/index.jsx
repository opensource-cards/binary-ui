import PropTypes from 'prop-types';
import React from 'react';
import NavBarIconButton from './components-styled/NavBarIconButton';
import NavBarPlaceholder from './components-styled/NavBarPlaceholder';
import NavBarTitle from './components/NavBarTitle';
import NavBarWrapper from './components-styled/NavBarWrapper';

const propTypes = {
  headerButtonLeft: PropTypes.object,
  headerButtonRight: PropTypes.object,
  headerButtonRightSecondary: PropTypes.object,
  headerStyle: PropTypes.object,
  headerTitle: PropTypes.object,
};

const defaultProps = {
  headerButtonLeft: {},
  headerButtonRight: {},
  headerButtonRightSecondary: {},
  headerStyle: undefined,
  headerTitle: {},
};

const NavBar = ({
  headerButtonLeft,
  headerButtonRight,
  headerButtonRightSecondary,
  headerStyle,
  headerTitle,
}) => (
  <NavBarWrapper style={headerStyle}>
    {headerButtonLeft.renderIcon ? (
      <NavBarIconButton {...headerButtonLeft} />
    ) : <NavBarPlaceholder />}
    <NavBarTitle {...headerTitle} />
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
