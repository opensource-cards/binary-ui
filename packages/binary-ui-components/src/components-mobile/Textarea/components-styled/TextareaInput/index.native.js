import { FONT_SET_LIGHT_CSS, INPUT_RESET_CSS, LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components/native';

export default styled.TextInput`
  ${INPUT_RESET_CSS}
  ${FONT_SET_LIGHT_CSS}
  color: hsl(0, 0%, 0%);
  flex: 9;
  min-height: ${LIST_ITEM_HEIGHT * 2};
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  text-align-vertical: top;
`;
