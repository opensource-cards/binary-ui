import styled from 'styled-components/native';
import React from 'react';
import { LIST_ITEM_HALF_HEIGHT } from '../../../utils/styles';

const StyledOpacity = styled.TouchableOpacity`
  position: relative;
  height: ${LIST_ITEM_HALF_HEIGHT};
`;

const propTypes = {
  onClick: React.PropTypes.func.isRequired,
  children: React.PropTypes.any,
};

const defaultProps = {};

const SwitchContainer = ({ onClick, children }) => (
  <StyledOpacity onPress={onClick} activeOpacity={1}>
    {children}
  </StyledOpacity>
);

SwitchContainer.defaultProps = defaultProps;
SwitchContainer.propTypes = propTypes;

export default SwitchContainer;
