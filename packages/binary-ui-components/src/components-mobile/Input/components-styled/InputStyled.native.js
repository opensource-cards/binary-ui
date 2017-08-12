import styled from 'styled-components/native';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import {
  FIELD_VALUE_FONT_CSS,
  FIELD_NAME_FONT_CSS,
} from '../../../utils/styles';

export default styled.TextInput`
  flex: 9;
  ${props => (props.isBold ? FIELD_NAME_FONT_CSS : FIELD_VALUE_FONT_CSS)}
  height: ${LIST_ITEM_HEIGHT};
  padding-left: 10;
`;
