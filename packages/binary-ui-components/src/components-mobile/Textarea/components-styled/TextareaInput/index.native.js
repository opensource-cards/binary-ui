import styled from 'styled-components/native';
import { FONT_FAMILY_MAIN, INPUT_RESET_CSS, LIST_ITEM_HEIGHT } from 'binary-ui-styles';

export default styled.TextInput`
  ${INPUT_RESET_CSS}
  color: hsl(0, 0%, 0%);
  flex: 9;
  font-family: ${FONT_FAMILY_MAIN};
  min-height: ${LIST_ITEM_HEIGHT * 2};
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  padding-top: 10;
  text-align-vertical: top;
`;
