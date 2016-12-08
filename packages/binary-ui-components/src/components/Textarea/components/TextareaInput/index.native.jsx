import styled from 'styled-components/native';
// import { actionAreaEditorHOC } from 'react-action-hoc';
import { CARDS_INPUT_RESET_STYLE_NATIVE, FIELD_VALUE_FONT_STYLE_NATIVE } from '../../../../utils/styles';

// TODO: make styled component
export default styled.TextInput`
  ${CARDS_INPUT_RESET_STYLE_NATIVE}
  ${FIELD_VALUE_FONT_STYLE_NATIVE}
  padding: 10;
  height: 120;
  flex: 1;
  width: 80;
`;
