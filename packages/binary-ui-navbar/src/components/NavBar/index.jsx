import PropTypes from 'prop-types';
import React from 'react';
import IconButton from './components-styled/IconButton';
import Space from './components-styled/Space';
import Wrapper from './components-styled/Wrapper';

const propTypes = {
  children: PropTypes.node,
  headerButtonLeft: PropTypes.object,
  headerButtonRight: PropTypes.object,
  headerButtonRightSecondary: PropTypes.object,
};

const defaultProps = {
  children: null,
  headerButtonLeft: {},
  headerButtonRight: {},
  headerButtonRightSecondary: {},
};

const NavBar = ({
  children,
  headerButtonLeft,
  headerButtonRight,
  headerButtonRightSecondary,
  ...props,
}) => (
  <Wrapper {...props} >
    {headerButtonLeft.renderIcon ? (
      <IconButton {...headerButtonLeft} />
    ) : <Space />}
    {children}
    {headerButtonRightSecondary.renderIcon ? (
      <IconButton {...headerButtonRightSecondary} />
    ) : null}
    {headerButtonRight.renderIcon ? (
      <IconButton {...headerButtonRight} />
    ) : <Space />}
  </Wrapper>
);

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default NavBar;
