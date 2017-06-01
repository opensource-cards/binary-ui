import styled from 'styled-components/native';
import {
  CARDS_INPUT_RESET_CSS,
  FIELD_VALUE_FONT_STYLE_CSS,
} from '../../../../utils/styles';

export default styled.TextInput`
  ${CARDS_INPUT_RESET_CSS}
  ${FIELD_VALUE_FONT_STYLE_CSS}
  background-color: transparent;
  padding: 10;
  height: 120;
  flex: 1;
  width: 80;
`;
