import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components/native';
import { FIELD_VALUE_FONT_STYLE_CSS } from '../../../../utils/styles';

export default styled.Text`
  ${FIELD_VALUE_FONT_STYLE_CSS}
  flex-direction: row;
  height: ${LIST_ITEM_HEIGHT};
  align-items: center;
  padding-left: 10;
`;
