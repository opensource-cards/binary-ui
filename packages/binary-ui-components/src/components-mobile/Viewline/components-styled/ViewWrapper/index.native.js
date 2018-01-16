import { BINARY_COLOR_SAND_90, LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components/native';

export default styled.View`
  height: ${LIST_ITEM_HEIGHT};
  align-items: center;
  background-color: #FFFFFF;
  flex-direction: row;
  opacity: ${props => props.styleOpacity};
  overflow: hidden;
  justify-content: space-between;
  width: 100%;
  ${props => (props.isEdit
    ? `border-bottom-width: 1;border-bottom-color: ${BINARY_COLOR_SAND_90};`
    : undefined
  )}
`;
