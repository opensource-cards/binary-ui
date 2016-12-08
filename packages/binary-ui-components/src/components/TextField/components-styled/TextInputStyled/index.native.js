import styled from 'styled-components/native';
import {
  CARDS_INPUT_RESET_STYLE_NATIVE,
  LIST_ITEM_CONTENTS_BASE_STYLE_NATIVE,
} from '../../../../utils/styles';

/*
resize: none;
width: 100%;
wrap: soft;
*/

export default styled.TextInput`
  ${CARDS_INPUT_RESET_STYLE_NATIVE}
  ${LIST_ITEM_CONTENTS_BASE_STYLE_NATIVE}
  padding: 10;
  overflow: hidden;
  min-height: 120;
  text-align: left;
`;
