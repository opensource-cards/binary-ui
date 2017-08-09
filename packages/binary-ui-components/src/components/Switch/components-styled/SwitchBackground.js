import { BINARY_COLOR_BLUE_40, BINARY_COLOR_GRAY_80, LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components';
import { LIST_ITEM_HALF_HEIGHT } from '../../../utils/styles';

export default styled.div.attrs({
  style: (props) => (props.isChecked
    ? { backgroundColor: BINARY_COLOR_BLUE_40 }
    : { backgroundColor: BINARY_COLOR_GRAY_80 }
  ),
})`
  border-radius: ${LIST_ITEM_HALF_HEIGHT}px;
  height: ${LIST_ITEM_HALF_HEIGHT}px;
  position: absolute;
  top: 0px;
  transition: .25s ease-in-out;
  width: ${LIST_ITEM_HEIGHT}px;
`;
