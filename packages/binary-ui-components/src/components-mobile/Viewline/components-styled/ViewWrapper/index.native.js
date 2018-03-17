import { BINARY_COLOR_SAND_90, LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.View`
  align-items: center;
  background-color: #FFFFFF;
  flex-direction: row;
  height: ${LIST_ITEM_HEIGHT};
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  ${props => (props.isEdit
    ? `border-bottom-width: 1;border-bottom-color: ${BINARY_COLOR_SAND_90};`
    : undefined
  )}
`;
