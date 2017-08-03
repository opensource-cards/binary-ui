import styled from 'styled-components/native';
import { EDIT_STYLE_EXT } from '../../../../utils/styles';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';

const LIST_ITEM_TEXT_STYLE = `
  align-items: center;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export default styled.View`
  ${LIST_ITEM_TEXT_STYLE}
  ${props => (props.isEdit ? EDIT_STYLE_EXT : undefined)}
  height: ${LIST_ITEM_HEIGHT};
`;

/*
min-height: ${LIST_ITEM_HEIGHT};
padding-left: 10;
*/
