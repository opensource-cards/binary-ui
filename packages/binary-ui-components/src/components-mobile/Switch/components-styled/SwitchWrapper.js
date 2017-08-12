import styled from 'styled-components';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import { CURSOR_POINTER_CSS } from '../../../utils/styles';

export default styled.div`
  ${CURSOR_POINTER_CSS}
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: ${LIST_ITEM_HEIGHT}px;
  padding-left: 10px;
  width: 100%;
`;
