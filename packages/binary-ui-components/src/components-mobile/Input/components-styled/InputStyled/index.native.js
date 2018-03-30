import styled from 'styled-components';

export default styled.TextInput`
  flex: 9;
  height: ${props => props.theme.sizeListItemHeight};
  padding-bottom: 0;
  padding-left: 10;
  padding-right: 0;
  padding-top: 0;

  color: hsl(0, 0%, 0%);
  font-family: ${props => (props.isBold ? props.theme.fontFamily600 : props.theme.fontFamily200)};
  font-size: ${props => (props.isBold ? '13px' : '18px')};
  font-weight: ${props => (props.isBold ? props.theme.fontWeight600 : props.theme.fontWeight200)};
  letter-spacing: ${props => (props.isBold ? 2 : 0)};
`;
