import styled from 'styled-components';

export default styled.TextInput`
  color: hsl(0, 0%, 0%);
  flex: 9;
  font-family: ${props => props.theme.fontFamily200};
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeight200};
  height: ${props => props.styleHeight}px;
  padding: 10px;
  text-align-vertical: top;
`;
