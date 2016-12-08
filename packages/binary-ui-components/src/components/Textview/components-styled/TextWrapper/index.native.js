import styled from 'styled-components/native';
import { EDIT_STYLE_EXT } from '../../../../utils/styles';

const LIST_ITEM_TEXT_STYLE = `
  align-items: center;
  background-color: white;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export default styled.View`
  ${LIST_ITEM_TEXT_STYLE}
  ${(props) => {
    if (props.isEdit) {
      return EDIT_STYLE_EXT;
    }
    return '';
  }}
`;

/*
min-height: ${LIST_ITEM_HEIGHT};
padding-left: 10;
*/
