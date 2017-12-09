import PropTypes from 'prop-types';
import React from 'react';
import NavBarTitleIcon from './components-styled/NavBarTitleIcon';
import NavBarTitleText from './components-styled/NavBarTitleText';
import NavBarTitleWrapperActionable from './components-styled/NavBarTitleWrapperActionable';
import NavBarTitleWrapperText from './components-styled/NavBarTitleWrapperText';

const propTypes = {
  children: PropTypes.node,
  isActionable: PropTypes.bool,
};

const defaultProps = {
  children: undefined,
  isActionable: false,
};

const NavBarTitle = ({ children, isActionable, ...props }) => (
  isActionable ? (
    <NavBarTitleWrapperActionable {...props}>
      <NavBarTitleText>{children}</NavBarTitleText>
      <NavBarTitleIcon size={15} />
    </NavBarTitleWrapperActionable>
  ) : (
    <NavBarTitleWrapperText {...props}>
      {children}
    </NavBarTitleWrapperText>
  )
);

NavBarTitle.propTypes = propTypes;
NavBarTitle.defaultProps = defaultProps;

export default NavBarTitle;
