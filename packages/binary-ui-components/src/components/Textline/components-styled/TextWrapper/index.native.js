import styled from 'styled-components/native';
import { BINARY_COLOR_SAND_90, LIST_ITEM_HEIGHT } from 'binary-ui-styles';

export default styled.View`
  height: ${LIST_ITEM_HEIGHT};
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  justify-content: space-between;
  width: 100%;
  ${props => (props.isEdit ? `border-bottom-width: 1; border-bottom-color: ${BINARY_COLOR_SAND_90};` : undefined)}
`;
