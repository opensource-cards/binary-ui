import styled from 'styled-components/native';
import { FONT_FAMILY_MAIN, LIST_ITEM_HEIGHT } from 'binary-ui-styles';

export default styled.TextInput`
  flex: 9;
  font-family: ${FONT_FAMILY_MAIN};
  min-height: ${LIST_ITEM_HEIGHT * 2};
  padding-left: 10;
  text-align-vertical: top;
`;
