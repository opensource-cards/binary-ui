import styled from 'styled-components';

export default styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #000000;
  font-family: ${props => props.theme.fontFamily600};
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeight600};
  letter-spacing: 3px;
`;
