import styled from 'styled-components';
import ActionableIcon from '../../../ActionableIcon';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';

export default styled(ActionableIcon)`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  height: ${LIST_ITEM_HEIGHT}px;
  justify-content: center;
  width: 30px;
`;
