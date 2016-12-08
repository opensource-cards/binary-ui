import styled from 'styled-components/native';
import { LIST_ITEM_CONTENTS_BASE_STYLE_NATIVE } from '../../../utils/styles';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const StyledText = styled.Text`
  ${LIST_ITEM_CONTENTS_BASE_STYLE_NATIVE}
`;

const propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.any,
};

const defaultProps = {};

const ButtonWrapper = ({ children, onClick }) => (
  <TouchableOpacity activeOpacity={0.7} onPress={onClick} >
    <StyledText>
      {children}
    </StyledText>
  </TouchableOpacity>
);

ButtonWrapper.propTypes = propTypes;
ButtonWrapper.defaultProps = defaultProps;

export default ButtonWrapper;
