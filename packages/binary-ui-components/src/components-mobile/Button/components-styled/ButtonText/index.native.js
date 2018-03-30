import styled from 'styled-components';

export default styled.Text.attrs({
  numberOfLines: 1,
})`
  opacity: ${props => (props.isDisabled ? props.theme.opacityDisabled : '1')};
  flex: 9;
  padding-left: 10;

  color: hsl(0, 0%, 0%);
  font-family: ${props => (props.isBold ? props.theme.fontFamily600 : props.theme.fontFamily200)};
  font-size: ${props => (props.isBold ? '13px' : '18px')};
  font-weight: ${props => (props.isBold ? props.theme.fontWeight600 : props.theme.fontWeight200)};
  letter-spacing: ${props => (props.isBold ? 2 : 0)};
`;
