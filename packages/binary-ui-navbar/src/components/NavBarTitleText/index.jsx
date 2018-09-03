import PropTypes from 'prop-types';
import React from 'react';
import TitleText from './components-styled/TitleText';
import TitleWrapper from './components-styled/TitleWrapper';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: undefined,
};

const NavBarTitleText = ({ children, ...props }) => (
  <TitleWrapper {...props}>
    <TitleText>{children}</TitleText>
  </TitleWrapper>
);

NavBarTitleText.propTypes = propTypes;
NavBarTitleText.defaultProps = defaultProps;

export default NavBarTitleText;
