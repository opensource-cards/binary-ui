import { BINARY_COLOR_SAND_90, LIST_ITEM_HEIGHT, NO_SELECT_CSS } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  ${NO_SELECT_CSS}
  align-items: center;
  background-color: #FFFFFF;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
  cursor: default;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: ${LIST_ITEM_HEIGHT}px;
  padding-left: 10px;
  ${props => (props.isEdit ? `border-bottom: 1px solid ${BINARY_COLOR_SAND_90}` : undefined)}
`;
