import PropTypes from 'prop-types';
import React from 'react';
import TitleWrapperText from './components-styled/TitleWrapperText';
import TitleText from '../../components-styled/TitleText';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: undefined,
};

const NavBarTitleText = ({ children, ...props }) => (
  <TitleWrapperText {...props}>
    <TitleText>{children}</TitleText>
  </TitleWrapperText>
);

NavBarTitleText.propTypes = propTypes;
NavBarTitleText.defaultProps = defaultProps;

export default NavBarTitleText;
