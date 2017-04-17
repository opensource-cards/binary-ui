import styled from 'styled-components';
import IconStyled from '../../IconStyled';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';

export default styled(IconStyled) `
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${LIST_ITEM_HEIGHT}px;
  min-width: ${LIST_ITEM_HEIGHT}px;
`;
