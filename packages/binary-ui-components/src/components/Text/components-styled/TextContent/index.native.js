import styled from 'styled-components/native';
import {
  FIELD_NAME_FONT_CSS,
  FIELD_VALUE_FONT_CSS,
} from '../../../../utils/styles';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';

export default styled.Text`
  ${props => (props.isBold ? FIELD_NAME_FONT_CSS : FIELD_VALUE_FONT_CSS)}
  align-items: center;
  flex-direction: row;
  height: ${LIST_ITEM_HEIGHT};
  padding-left: 10;
`;
