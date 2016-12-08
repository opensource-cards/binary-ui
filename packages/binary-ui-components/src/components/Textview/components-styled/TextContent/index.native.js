import styled from 'styled-components/native';
import { FIELD_VALUE_FONT_STYLE_NATIVE } from '../../../../utils/styles';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';

export default styled.Text`
  ${FIELD_VALUE_FONT_STYLE_NATIVE}
  flex-direction: row;
  height: ${LIST_ITEM_HEIGHT};
  align-items: center;
  padding-left: 10;
`;
