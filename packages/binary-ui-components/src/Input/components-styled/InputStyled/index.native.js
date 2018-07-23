import styled from 'styled-components';

export default styled.TextInput`
  color: hsl(0, 0%, 0%);
  flex: 1;
  font-family: ${props => (props.isBold ? props.theme.fontFamily400 : props.theme.fontFamily200)};
  font-size: 16px;
  font-weight: ${props => (props.isBold ? props.theme.fontWeight400 : props.theme.fontWeight200)};
  height: ${props => props.theme.sizeListItemHeight};
  opacity: ${props => (props.isDisabled ? props.theme.opacityDisabled : 1)};
  padding-bottom: 0;
  padding-left: 10;
  padding-right: 0;
  padding-top: 0;
`;
