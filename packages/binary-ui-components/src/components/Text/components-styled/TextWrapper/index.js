import { BINARY_COLOR_SAND_90, LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import { CURSOR_POINTER_CSS } from '../../../../utils/styles';
import { NO_SELECT_CSS } from 'binary-ui-styles/web';
import styled from 'styled-components';

export default styled.div`
  ${CURSOR_POINTER_CSS}
  ${NO_SELECT_CSS}
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: ${LIST_ITEM_HEIGHT}px;
  padding-left: 10px;
  ${props => (props.isEdit ? `border-bottom: 1px solid ${BINARY_COLOR_SAND_90}` : undefined)}
`;
