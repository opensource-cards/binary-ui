import styled from 'styled-components/native';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import { FIELD_VALUE_FONT_CSS, FIELD_NAME_FONT_CSS, INPUT_RESET_CSS } from '../../../utils/styles';

export default styled.TextInput`
  ${INPUT_RESET_CSS}
  ${props => (props.isBold ? FIELD_NAME_FONT_CSS : FIELD_VALUE_FONT_CSS)}
  flex: 9;
  height: ${LIST_ITEM_HEIGHT};
  padding-bottom: 0;
  padding-left: 10;
  padding-right: 0;
  padding-top: 0;
`;
