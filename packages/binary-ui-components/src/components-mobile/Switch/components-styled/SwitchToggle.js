import { LIST_ITEM_HEIGHT, OPACITY_DISABLED } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  opacity: ${props => (props.isDisabled ? OPACITY_DISABLED : '1')};
  margin-left: auto;
  margin-right: 10px;
  width: ${LIST_ITEM_HEIGHT}px;
`;
