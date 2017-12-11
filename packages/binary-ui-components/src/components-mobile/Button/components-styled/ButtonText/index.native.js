import { FONT_SET_BOLD_CSS, FONT_SET_LIGHT_CSS, OPACITY_ACTIVE } from 'binary-ui-styles';
import styled from 'styled-components/native';

export default styled.Text`
  color: ${props => props.styleColor};
  ${props => (props.isDisabled ? `opacity: ${OPACITY_ACTIVE};` : undefined)}
  ${props => (props.isBold ? FONT_SET_BOLD_CSS : FONT_SET_LIGHT_CSS)}
  flex: 9;
  padding-left: 10;
`;
