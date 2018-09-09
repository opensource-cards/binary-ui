import styled from 'styled-components';

export default styled.div`
  color: hsl(0, 0%, 0%);
  font-family: ${props => props.theme.fontFamily600};
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeight600};
  letter-spacing: ${props => props.theme.letterSpacing3};
  text-align: center;
`;
