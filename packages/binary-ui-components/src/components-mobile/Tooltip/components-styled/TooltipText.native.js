import styled from 'styled-components';

export default styled.Text`
  color: hsl(0, 100%, 100%);
  flex: 0;
  font-family: ${props => props.theme.fontFamily400};
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeight400};
`;
