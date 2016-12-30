import styled from 'styled-components/native';
import {
  CARDS_INPUT_RESET_CSS,
  LIST_ITEM_CONTENTS_BASE_CSS,
} from '../../../../utils/styles';

/*
resize: none;
width: 100%;
wrap: soft;
*/

export default styled.TextInput`
  ${CARDS_INPUT_RESET_CSS}
  ${LIST_ITEM_CONTENTS_BASE_CSS}
  padding: 10;
  overflow: hidden;
  min-height: 120;
  text-align: left;
`;
