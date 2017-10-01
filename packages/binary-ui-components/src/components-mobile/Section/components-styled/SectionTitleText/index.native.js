import { FONT_FAMILY_MAIN_700 } from 'binary-ui-styles';
import styled from 'styled-components/native';

export default styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #000000;
  font-family: ${FONT_FAMILY_MAIN_700};
  font-size: 12px;
  letter-spacing: 3px;
`;
