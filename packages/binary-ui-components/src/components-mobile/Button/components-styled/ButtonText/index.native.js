import styled from 'styled-components';

export default styled.Text.attrs({
  numberOfLines: 1,
})`
  color: hsl(0, 0%, 0%);
  flex: 9;
  font-family: ${props => (props.isBold ? props.theme.fontFamily600 : props.theme.fontFamily200)};
  font-size: ${props => (props.isBold ? '13px' : '18px')};
  font-weight: ${props => (props.isBold ? props.theme.fontWeight600 : props.theme.fontWeight200)};
  letter-spacing: ${props =>
    (props.isBold
      ? props.theme.letterSpacing2
      : props.theme.letterSpacingNormal)};
  opacity: ${props => (props.isDisabled ? props.theme.opacityDisabled : '1')};
  padding-left: 10;
`;
