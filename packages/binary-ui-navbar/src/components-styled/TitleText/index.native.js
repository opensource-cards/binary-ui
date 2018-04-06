import styled from 'styled-components';

export default styled.Text.attrs({
  editable: false,
  numberOfLines: 1,
})`
  align-items: center;
  color: #000000;
  flex-direction: row;
  font-family: ${props => props.theme.fontFamily500};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeight500};
  justify-content: flex-start;
`;
