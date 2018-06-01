import styled from 'styled-components';

export default styled.TextInput`
  color: hsl(0, 0%, 0%);
  flex: 9;
  font-family: ${props => props.theme.fontFamily200};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeight200};
  height: ${props => props.styleHeight}px;
  min-height: ${props => props.styleHeight}px;
  padding: ${props => props.stylePadding}px;
  text-align-vertical: top;
`;
