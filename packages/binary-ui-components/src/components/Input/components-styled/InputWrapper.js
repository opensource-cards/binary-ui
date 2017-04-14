import styled from 'styled-components';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import { CURSOR_POINTER_CSS } from '../../../utils/styles';

export default styled.div`
  ${CURSOR_POINTER_CSS}
  box-sizing: border-box;
  display: flex;
  flex-direction: row-reverse;
  height: ${LIST_ITEM_HEIGHT}px;
  width: 100%;
`;
