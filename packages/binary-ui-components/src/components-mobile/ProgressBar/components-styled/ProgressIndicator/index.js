import { BINARY_COLOR_RED_40 } from 'binary-ui-styles';
import styled from 'styled-components';
import { LIST_ITEM_HALF_HEIGHT } from '../../../../utils/styles';

export default styled.div`
  ${props => (props.progress >= 90
    ? `background-color: ${BINARY_COLOR_RED_40};`
    : 'background-color: #000;'
  )}
  height: 2px;
  position: absolute;
  top: ${LIST_ITEM_HALF_HEIGHT}px;
  width: ${props => props.progress}%;
`;
