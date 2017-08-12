import { LIST_ITEM_HEIGHT, NO_SELECT_CSS } from 'binary-ui-styles';
import styled from 'styled-components';
import { FIELD_NAME_FONT_CSS, LIST_ITEM_CONTENTS_BASE_CSS } from '../../../utils/styles';

export default styled.div`
  ${NO_SELECT_CSS}
  ${FIELD_NAME_FONT_CSS}
  ${LIST_ITEM_CONTENTS_BASE_CSS}
  height: ${LIST_ITEM_HEIGHT}px;
  line-height: ${LIST_ITEM_HEIGHT}px;
  vertical-align: middle;
  width: calc(100% - ${LIST_ITEM_HEIGHT})%;
`;
