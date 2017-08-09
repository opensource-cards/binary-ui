import { BINARY_COLOR_BLUE_40, BINARY_COLOR_GRAY_80 } from 'binary-ui-styles';
import styled from 'styled-components';
import { LIST_ITEM_HALF_HEIGHT } from '../../../utils/styles';

export default styled.div.attrs({
  style: (props) => (props.isChecked
    ? { borderColor: BINARY_COLOR_BLUE_40, left: '22px' }
    : { borderColor: BINARY_COLOR_GRAY_80, left: 0 }
  ),
})`
  background-color: white;
  border-radius: 100%;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  height: ${LIST_ITEM_HALF_HEIGHT}px;
  position: absolute;
  top: 0px;
  transition: .25s ease-in-out;
  width: ${LIST_ITEM_HALF_HEIGHT}px;
`;
