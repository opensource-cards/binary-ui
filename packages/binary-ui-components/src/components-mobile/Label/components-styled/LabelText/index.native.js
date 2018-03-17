import { FONT_SET_BOLD_CSS, FONT_SET_LIGHT_CSS, OPACITY_DISABLED } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.Text.attrs({
  numberOfLines: 1,
})`
  color: hsl(0, 0%, 0%);
  opacity: ${props => (props.isDisabled ? OPACITY_DISABLED : '1')};
  ${props => (props.isBold ? FONT_SET_BOLD_CSS : FONT_SET_LIGHT_CSS)}
`;
