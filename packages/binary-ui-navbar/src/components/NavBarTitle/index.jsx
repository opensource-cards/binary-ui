import PropTypes from 'prop-types';
import React from 'react';
import NavBarTitleIcon from './components-styled/NavBarTitleIcon';
import NavBarTitleText from './components-styled/NavBarTitleText';
import NavBarTitleWrapper from './components-styled/NavBarTitleWrapper';

const propTypes = {
  children: PropTypes.node,
  isActionable: PropTypes.bool,
};

const defaultProps = {
  children: undefined,
  isActionable: false,
};

const NavBarTitle = ({ children, isActionable, ...props }) => (
  <NavBarTitleWrapper isActionable={isActionable} {...props}>
    <NavBarTitleText>{children}</NavBarTitleText>
    {isActionable === true ? (
      <NavBarTitleIcon size={15} />
    ) : null}
  </NavBarTitleWrapper>
);

NavBarTitle.propTypes = propTypes;
NavBarTitle.defaultProps = defaultProps;

export default NavBarTitle;
