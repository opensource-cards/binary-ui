import { FONT_FAMILY_MAIN } from 'binary-ui-styles';
import styled from 'styled-components/native';

export default styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #000000;
  font-weight: 700;
  font-family: ${FONT_FAMILY_MAIN};
  font-size: 12px;
  letter-spacing: 3px;
`;
