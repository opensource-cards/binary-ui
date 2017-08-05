import styled from 'styled-components/native';
import { FONT_FAMILY_MAIN, LIST_ITEM_HEIGHT } from 'binary-ui-styles';

const TextareaHeight = LIST_ITEM_HEIGHT * 2;

export default styled.TextInput`
  flex: 9;
  font-family: ${FONT_FAMILY_MAIN};
  min-height: ${TextareaHeight};
  padding-left: 10;
  text-align-vertical: top;
`;
