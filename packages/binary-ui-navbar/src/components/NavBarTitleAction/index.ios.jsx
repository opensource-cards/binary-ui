import PropTypes from 'prop-types';
import React from 'react';
import TitleIcon from './components-styled/TitleIcon';
import TitleWrapperActionable from './components-styled/TitleWrapperActionable';
import TitleText from '../../components-styled/TitleText';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: undefined,
};

const NavBarTitleAction = ({ children, ...props }) => (
  <TitleWrapperActionable {...props}>
    <TitleText>{children}</TitleText>
    <TitleIcon size={15} />
  </TitleWrapperActionable>
);

NavBarTitleAction.propTypes = propTypes;
NavBarTitleAction.defaultProps = defaultProps;

export default NavBarTitleAction;
