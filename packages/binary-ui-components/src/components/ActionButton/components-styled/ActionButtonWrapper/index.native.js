import styled from 'styled-components/native';
import React from 'react';
const StyledText = styled.Text``;

const StyledView = styled.View``;

const propTypes = {
  children: React.PropTypes.any,
};

const defaultProps = {};

const ActionButtonWrapper = ({ children, ...props }) => (
  <StyledView {...props} >
    <StyledText>{children}</StyledText>
  </StyledView>
);

ActionButtonWrapper.defaultProps = defaultProps;
ActionButtonWrapper.propTypes = propTypes;

export default ActionButtonWrapper;
