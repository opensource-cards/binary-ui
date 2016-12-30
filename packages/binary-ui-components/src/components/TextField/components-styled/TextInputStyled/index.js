import styled from 'styled-components';
import {
  CARDS_INPUT_RESET_CSS,
  LIST_ITEM_CONTENTS_BASE_CSS,
} from '../../../../utils/styles';

export default styled.input`
  ${CARDS_INPUT_RESET_CSS}
  ${LIST_ITEM_CONTENTS_BASE_CSS}
  overflow: hidden;
  resize: none;
  text-align: left;
  width: 100%;
  wrap: soft;
`;
