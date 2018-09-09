import styled from 'styled-components';

export default styled.Text.attrs({
  numberOfLines: 1,
})`
  color: hsl(0, 0%, 0%);
  font-family: ${props => props.theme.fontFamily600};
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeight600};
  letter-spacing: ${props => props.theme.letterSpacing3};
`;
