import { BINARY_COLOR_SAND_90, LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
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
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  ${props => (props.isEdit ? `border-bottom: 1px solid ${BINARY_COLOR_SAND_90}` : undefined)}
`;
