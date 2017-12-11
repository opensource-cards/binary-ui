import { FONT_SET_BOLD_CSS, FONT_SET_LIGHT_CSS, OPACITY_ACTIVE } from 'binary-ui-styles';
import styled from 'styled-components/native';

export default styled.Text.attrs({
  numberOfLines: 1,
})`
  color: hsl(0, 0%, 0%);
  flex: 9;
  padding-left: 10;
  ${props => (props.isDisabled ? `opacity: ${OPACITY_ACTIVE};` : undefined)}
  ${props => (props.isBold ? FONT_SET_BOLD_CSS : FONT_SET_LIGHT_CSS)}
`;
