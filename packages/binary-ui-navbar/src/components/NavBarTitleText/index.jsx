import PropTypes from 'prop-types';
import React from 'react';
import TitleText from '../../components-styled/TitleText';
import TitleWrapperText from '../../components-styled/TitleWrapperBase';

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
