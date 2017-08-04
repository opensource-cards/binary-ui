import styled from 'styled-components/native';
import { BINARY_COLOR_SAND_90, LIST_ITEM_HEIGHT } from 'binary-ui-styles';

export default styled.View`
  ${props => (props.isEdit
    ? `border-bottom-width: 1; border-bottom-color: ${BINARY_COLOR_SAND_90};`
    : undefined
  )}
  align-items: center;
  flex-direction: row-reverse;
  height: ${LIST_ITEM_HEIGHT}px;
  width: 100%;
`;
