import styled from 'styled-components';
import {
  CARDS_INPUT_RESET_STYLE_WEB,
  LIST_ITEM_CONTENTS_BASE_STYLE_WEB,
} from '../../../../utils/styles';

export default styled.input`
  ${CARDS_INPUT_RESET_STYLE_WEB}
  ${LIST_ITEM_CONTENTS_BASE_STYLE_WEB}
  overflow: hidden;
  resize: none;
  text-align: left;
  width: 100%;
  wrap: soft;
`;
