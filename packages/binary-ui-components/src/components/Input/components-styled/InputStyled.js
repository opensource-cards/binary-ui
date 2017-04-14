import styled from 'styled-components';
import {
  CARDS_INPUT_RESET_CSS,
  FIELD_VALUE_FONT_CSS,
  LIST_ITEM_CONTENTS_BASE_CSS,
} from '../../../utils/styles';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';

export default styled.input`
  ${CARDS_INPUT_RESET_CSS}
  ${FIELD_VALUE_FONT_CSS}
  ${LIST_ITEM_CONTENTS_BASE_CSS}
  background-color: transparent;
  height: ${LIST_ITEM_HEIGHT}px;
  overflow: hidden;
  resize: none;
  text-align: left;
  width: 100%;
  wrap: soft;
`;
